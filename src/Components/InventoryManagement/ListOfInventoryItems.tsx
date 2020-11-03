import React, {useState} from "react";
import {IInventoryItem, IPagination, IReferenceData, ISort} from "../../State";
import {Link} from "react-router-dom";
import {CallbackButton} from "../General/CallbackButton";
import {GridPaging} from "../General/GridPaging";
import {backwardPage, forwardPage, pageThroughTable} from "../../Utility/APIRequests/paging";
import {fetchListOfRefData} from "../../Utility/GraphQLRequests/referenceData";
import {fetchListOfInventoryItem} from "../../Utility/GraphQLRequests/inventoryItem";
import {ListWrfcenterInventoryIteMsQuery} from "../../API";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ChildMessageRenderer from "../General/AgGridRenderers/ChildCellRenderer";
import InventoryItemDropdown from "../General/AgGridRenderers/InventoryItemDropdown";
import ColorsRenderer from "../General/AgGridRenderers/InventoryItemDropdown";
import {AutocompleteSelectCellEditor} from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/main.css';

interface InterfaceProps {
    authUser?: any;
    fromAdmin: boolean;
    referenceData?: IReferenceData[];
}

interface IState {
    doesContainShow?: boolean;
    currentPage?: number;
    summaryID?: number;
    paging?: IPagination;
    sorting?: ISort[];
    totalTestCount?: number;
    inventoryItem?: IInventoryItem[];
    columnDefs?: any;
    context?: any;
    frameworkComponents?: any;
}

export class ListOfInventoryItems extends React.Component<InterfaceProps, IState> {
    private static INITIAL_PAGING = {startIndex: 0, batchSize: 10};
    private static INITIAL_SORT = [{sortBy: "createdDatetime", ascDesc: "ASC"}];

    constructor(props: any) {
        super(props);
        let refData = this.props.referenceData.map(d => ({ value: d.ID, label: d.LABEL }));
        // @ts-ignore
        this.state = {
            doesContainShow: false,
            currentPage: 0,
            paging: ListOfInventoryItems.INITIAL_PAGING,
            sorting: ListOfInventoryItems.INITIAL_SORT,
            columnDefs: [
                {
                    headerName: "Item",
                    field: "R_INVENTORY_ITEM_ID",
                    colId: 'R_INVENTORY_ITEM_ID',
                    cellEditor: AutocompleteSelectCellEditor,
                    cellEditorParams: {
                        selectData: refData,
                        placeholder: 'Select an option',
                        required: true,
                        autocomplete: {
                            // @ts-ignore
                            fetch: function (cellEditor: any, text: string, update) {
                                if (text === "*") {
                                    update(refData);
                                } else {
                                    text = text.toLowerCase();
                                    let suggestions = refData.filter(n => n.label.toLowerCase().indexOf(text) >= 0)
                                    update(suggestions);
                                }
                            },
                            onSelect: (cellEditor: any, item: any) => {
                                if (item) {
                                    cellEditor.currentItem = item.value;
                                }
                            }
                        }
                    },
                    valueFormatter: (params: any) => {
                        if (params.value) {
                            let foundValue = refData.filter((rd) => rd.value === params.data.R_INVENTORY_ITEM_ID);
                            return foundValue[0].label || foundValue[0].value || foundValue[0];
                        }
                        return "";
                    },
                    editable: true,
                },
                {
                    headerName: 'Quantity',
                    field: 'QUANTITY',
                    editable: true,
                    colId: 'QUANTITY',
                    autoHeight: true
                },
                {
                    headerName: 'Last Modified By',
                    field: 'LAST_MODIFIED_BY',
                    editable: false,
                    colId: 'LAST_MODIFIED_BY',
                    autoHeight: true
                },
                {
                    headerName: 'Last Modified On',
                    field: 'LAST_MODIFIED_DATETIME',
                    editable: false,
                    colId: 'LAST_MODIFIED_DATETIME',
                    autoHeight: true
                },
                {
                    headerName: '',
                    field: 'value',
                    cellRenderer: 'callBackButton',
                    colId: 'params',
                    editable: false,
                    maxWidth: 150,
                },
            ],
            context: { componentParent: this },
            frameworkComponents: {
                callBackButton: ChildMessageRenderer
            }
        };
    }

    onGridReady = (params: any) => {
        // @ts-ignore
        this.gridApi = params.api;
        // @ts-ignore
        this.gridColumnApi = params.columnApi;
        fetchListOfInventoryItem()
            .then((res: any) => {
                this.setState({inventoryItem: res})
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    onFirstDataRendered = (params: any) => {
        params.api.sizeColumnsToFit();
    };

    public componentDidMount() {
        // this.pageThroughTable("");

    }

    public shouldComponentUpdate(nextProps: Readonly<InterfaceProps>, nextState: Readonly<IState>, nextContext: any): boolean {
        let shouldUpdate = false;

        if (this.state.currentPage !== nextState.currentPage) {
            shouldUpdate = true;
        } else if (this.state.paging !== nextState.paging) {
            shouldUpdate = true;
        } else if (this.state.inventoryItem !== nextState.inventoryItem) {
            shouldUpdate = true;
        }
        return shouldUpdate;
    }

    public render() {
        if(this.state.currentPage === 0) {
            return this.renderCard();
        }

    }

    private renderCard() {
        const currentData = this.state.inventoryItem;
        return (
            <div>
                <div className="ag-theme-alpine" style={{height: `100%`, width: `100%`}}>
                    {this.renderAgGridComponent()}
                </div>
                <div>
                    <CallbackButton text={"Add Item"} callback={() => {this.addNewItem(currentData)}}/>
                    <CallbackButton text={"Reset"} callback={() => {this.reset()}}/>
                </div>
            </div>
        )
    }
    private renderAgGridComponent() {
        return <AgGridReact
                rowData={this.state.inventoryItem}
                onGridReady={this.onGridReady}
                onFirstDataRendered={this.onFirstDataRendered}
                domLayout={"autoHeight"}
                onCellValueChanged={this.onCellValueChanged.bind(this)}
                columnDefs={this.state.columnDefs}
                frameworkComponents={this.state.frameworkComponents}
                context={this.state.context}
            >
            </AgGridReact>
    }

    onCellValueChanged = (event: any) => {
        console.log('Data after change is', event.data);
    };

    private addNewItem(refData: IInventoryItem[]) {
        console.log("This will add a new item and refresh the grid");
        this.setState({
            inventoryItem: this.addAnItem(refData)
        });
    }

    private addAnItem(refData: IInventoryItem[]): IInventoryItem[] {
        let newList = refData.slice();
        let tempDate = new Date();
        let formatted_date =
            tempDate.getFullYear() + "-"
            + (tempDate.getMonth() + 1) + "-"
            + tempDate.getDate() + " "
            + tempDate.getHours() + ":"
            + tempDate.getMinutes() + ":"
            + tempDate.getSeconds();
        newList.push({
            INVENTORY_ITEM_ID: null,
            R_INVENTORY_ITEM_ID: 1,
            QUANTITY: 0,
            CREATED_BY: this.props.authUser.username,
            CREATED_DATETIME: formatted_date,
            LAST_MODIFIED_BY: this.props.authUser.username,
            LAST_MODIFIED_DATETIME: formatted_date,
            IS_ACTIVE: 1
        });
        return newList;
    }

    private reset() {
        fetchListOfInventoryItem()
            .then((res: any) => {
                console.log(res);
                this.setState({inventoryItem: res})
            })
            .catch((err: any) => {
                console.log(err);
            });
    }
}