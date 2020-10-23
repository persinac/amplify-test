import React from "react";
import {IPagination, IReferenceData, ISort} from "../../State";
import {Link} from "react-router-dom";
import {CallbackButton} from "../General/CallbackButton";
import {GridPaging} from "../General/GridPaging";
import {backwardPage, forwardPage, pageThroughTable} from "../../Utility/APIRequests/paging";
import {fetchListOfRefData} from "../../Utility/GraphQLRequests/referenceData";

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
}

export class ListOfReferenceData extends React.Component<InterfaceProps, IState> {
    private static INITIAL_PAGING = {startIndex: 0, batchSize: 10};
    private static INITIAL_SORT = [{sortBy: "createdDatetime", ascDesc: "ASC"}];

    constructor(props: any) {
        super(props);
        this.state = {
            doesContainShow: false,
            currentPage: 0,
            paging: ListOfReferenceData.INITIAL_PAGING,
            sorting: ListOfReferenceData.INITIAL_SORT
        };
    }

    public componentDidMount() {
        // this.pageThroughTable("");
        fetchListOfRefData()
            .then((res: any) => {
                console.log(res);
                this.setState({referenceData: res})
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    public shouldComponentUpdate(nextProps: Readonly<InterfaceProps>, nextState: Readonly<IState>, nextContext: any): boolean {
        let shouldUpdate = false;

        if (this.state.currentPage !== nextState.currentPage) {
            shouldUpdate = true;
        } else if (this.state.paging !== nextState.paging) {
            shouldUpdate = true;
        } else if (this.state.referenceData !== nextState.referenceData) {
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
                <GridPaging
                    paging={this.state.paging}
                    forwardPageCallback={() => {this.pageThroughTable("F")}}
                    backwardPageCallback={() => {this.pageThroughTable("B")}}
                    totalCount={this.state.totalTestCount}
                />
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
            paging: ListOfReferenceData.INITIAL_PAGING,
            sorting: ListOfReferenceData.INITIAL_SORT
        });
    }
}