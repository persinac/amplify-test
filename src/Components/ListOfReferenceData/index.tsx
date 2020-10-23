import React from 'react';
import '../../Styles/general.css';
import {ListOfReferenceData} from './ListOfReferenceData';
import {authUserContext} from "../../Firebase/AuthUserContext";

interface IProps {}

interface IState {}

class ListOfReferenceDataComponent extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {}

    public render() {
        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'width-100'}>
                        {this.renderList()}
                    </div>
                </div>
            </div>
        );
    }

    private renderList() {
        return (
            <authUserContext.Consumer>
                {authUser => {
                    return <ListOfReferenceData authUser={authUser} fromAdmin={false}/>
                }}
            </authUserContext.Consumer>
        )
    }
}

export const listOfReferenceDataPage = ListOfReferenceDataComponent;
