import React from "react";
import {IPagination, IReferenceData, ISort} from "../../State";
import {Link} from "react-router-dom";
import {CallbackButton} from "../General/CallbackButton";
import {GridPaging} from "../General/GridPaging";
import {backwardPage, forwardPage, pageThroughTable} from "../../Utility/APIRequests/paging";
import {fetchListOfRefData} from "../../Utility/GraphQLRequests/referenceData";
import {fetchListOfInventoryItem} from "../../Utility/GraphQLRequests/inventoryItem";
import {ListWrfcenterInventoryIteMsQuery} from "../../API";

interface InterfaceProps {
    authUser?: any;
    fromAdmin: boolean;
}

interface IState {
    doesContainShow?: boolean;
    referenceData?: IReferenceData[];
    currentPage?: number;
    summaryID?: number;
    totalTestCount?: number;
    inventoryItem?: ListWrfcenterInventoryIteMsQuery;
}

export class CreateOrUpdateInventoryItem extends React.Component<InterfaceProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            doesContainShow: false,
            currentPage: 0
        };
    }

    public componentDidMount() {
        // this.pageThroughTable("");
        fetchListOfInventoryItem()
            .then((res: any) => {
                console.log(res);
                this.setState({inventoryItem: res})
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    // public shouldComponentUpdate(nextProps: Readonly<InterfaceProps>, nextState: Readonly<IState>, nextContext: any): boolean {
    //     let shouldUpdate = false;
    //
    //     if (this.state.currentPage !== nextState.currentPage) {
    //         shouldUpdate = true;
    //     } else if (this.state.paging !== nextState.paging) {
    //         shouldUpdate = true;
    //     } else if (this.state.referenceData !== nextState.referenceData) {
    //         shouldUpdate = true;
    //     }
    //     return shouldUpdate;
    // }

    public render() {
        if(this.state.currentPage === 0) {
            return this.renderCard();
        }

    }

    private renderCard() {
        return (
            <div>
                <div className={'table-responsive'}>
                    <table className={'table table-striped table-sm'}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Label</th>
                            <th>Parent ID</th>
                            <th>Sort Order</th>
                            <th>Is Active</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.buildProductHeaderTRs()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

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

    private buildProductHeaderTRs() {
        const {referenceData} = this.state;
        if (!!referenceData && referenceData.length > 0) {
            return referenceData.map((ts: IReferenceData) => {
                return (
                    <tr key={ts.ID}>
                        <td>{ts.ID}</td>
                        <td>{ts.TYPE}</td>
                        <td>{ts.LABEL}</td>
                        <td>{ts.PARENT_ID}</td>
                        <td>{ts.SORT_ORDER}</td>
                        <td>{ts.IS_ACTIVE}</td>
                        {/*<td>*/}
                        {/*    <CallbackButton callback={() => {this.loadSummaryDetails(ts.testSummaryID)}} text={"View"} theme={"info"}/>*/}
                        {/*</td>*/}
                    </tr>
                )
            });
        }
    }

    private backToSummaryList() {
        this.setState({
            currentPage: 0,
            summaryID: null
        });
    }
}