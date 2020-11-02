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
import ChildMessageRenderer from "../General/ChildCellRenderer";

interface InterfaceProps {
    authUser?: any;
    fromAdmin: boolean;
}

interface IState {
    doesContainShow?: boolean;
    referenceData?: IReferenceData[];
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
        this.state = {
            doesContainShow: false,
            currentPage: 0,
            paging: ListOfInventoryItems.INITIAL_PAGING,
            sorting: ListOfInventoryItems.INITIAL_SORT,
            columnDefs: [
                {
                    headerName: 'ID',
                    field: 'INVENTORY_ITEM_ID',
                    editable: true,
                    colId: 'INVENTORY_ITEM_ID',
                    maxWidth: 90,
                    autoHeight:true
                },
                {
                    headerName: 'Item Type',
                    field: 'R_INVENTORY_ITEM_ID',
                    editable: true,
                    colId: 'R_INVENTORY_ITEM_ID',
                    autoHeight: true
                },
                {
                    headerName: 'Quantity',
                    field: 'QUANTITY',
                    editable: true,
                    colId: 'QUANTITY',
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
                callBackButton: ChildMessageRenderer,
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
                console.log(res);
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
                {/*<AgGridColumn field="ID" maxWidth={90} editable={true} autoHeight={true}/>*/}
                {/*<AgGridColumn field="TYPE" editable={true} autoHeight={true}/>*/}
                {/*<AgGridColumn field="LABEL" editable={true} autoHeight={true}/>*/}
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
    // private renderCard() {
    //     return (
    //         <div>
    //             <div className={'table-responsive'}>
    //                 <table
    //                     id={"inventoryTable"}
    //                     className={'table table-striped table-sm'}>
    //                     <thead>
    //                     <tr>
    //                         <th>ID</th>
    //                         <th>Type</th>
    //                         <th>Label</th>
    //                         <th>Parent ID</th>
    //                         <th>Sort Order</th>
    //                         <th>Is Active</th>
    //                         <th></th>
    //                     </tr>
    //                     </thead>
    //                     <tbody>
    //                     {this.buildProductHeaderTRs()}
    //                     </tbody>
    //                 </table>
    //             </div>
    //             <GridPaging
    //                 paging={this.state.paging}
    //                 forwardPageCallback={() => {this.pageThroughTable("F")}}
    //                 backwardPageCallback={() => {this.pageThroughTable("B")}}
    //                 totalCount={this.state.totalTestCount}
    //             />
    //         </div>
    //     );
    // }

    // private renderSummaryDetails() {
    //     return (
    //         <div>
    //             <div>
    //                 <CallbackButton callback={() => {this.backToSummaryList()}} text={"Back to Summary List"} theme={"info"}/>
    //             </div>
    //             <div>
    //                 <TestSummaryPage
    //                     fromAdmin={this.props.fromAdmin}
    //                     summaryID={this.state.summaryID}
    //                     // testSummary={this.state.selectedSummary}
    //                     // selectedSummaryDetails={this.state.selectedSummaryDetails}
    //                     paging={this.state.summaryDetailPaging}
    //                     sorting={this.state.summaryDetailSorting}
    //                     totalCount={this.state.summaryDetailTotalCount}
    //                     pageForwardCallback={() => {this.pageThroughSummaryTable("F")}}
    //                     pageBackwardCallback={() => {this.pageThroughSummaryTable("B")}}
    //                 />
    //             </div>
    //         </div>
    //     );
    // }

    private pageThroughTable(direction: string) {
        let {paging, sorting} = this.state;
        let newStartIndex: number = 0;
        if (direction === "F") {
            newStartIndex = forwardPage(paging.startIndex, paging.batchSize, this.state.totalTestCount);
        } else if (direction === "B") {
            newStartIndex = backwardPage(paging.startIndex, paging.batchSize);
        }
        paging.startIndex = newStartIndex;
        let endpoint = "test-summary/all";
        if (this.props.fromAdmin) {
            endpoint = "test-summary/all";
        } else {
            if (!!this.props.authUser.username) {
                endpoint = `test-summary/${this.props.authUser.username}`;
            }
        }

        pageThroughTable(
            endpoint,
            paging,
            sorting,
            [],
            newStartIndex
        ).then((d: any) => {
            const parsedD = d.data.totalCount > 0 ? d.data : [];
            this.setState({
                // testSummary: parsedD.testSummary,
                totalTestCount: parsedD.totalCount,
                paging: paging
            });
        })
            .catch((e) => {
                console.log(e)
            });
    }

    private backToSummaryList() {
        this.setState({
            currentPage: 0,
            summaryID: null,
            paging: ListOfInventoryItems.INITIAL_PAGING,
            sorting: ListOfInventoryItems.INITIAL_SORT
        });
    }
}