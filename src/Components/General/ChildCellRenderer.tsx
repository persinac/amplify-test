import React, { Component } from 'react';
import {CallbackButton} from "./CallbackButton";
import {createInventoryItem, updateInventoryItem} from "../../Utility/GraphQLRequests/inventoryItem";
import {authUserContext} from "../../Firebase/AuthUserContext";

export default class ChildMessageRenderer extends Component {
    constructor(props: any) {
        super(props);

        this.saveUpdates = this.saveUpdates.bind(this);
    }

    saveUpdates(authUser: any) {
        // @ts-ignore
        if(this.props.data.INVENTORY_ITEM_ID !== undefined && this.props.data.INVENTORY_ITEM_ID !== null) {
            // @ts-ignore
            updateInventoryItem(this.props.data, authUser)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // @ts-ignore
            createInventoryItem(this.props.data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <authUserContext.Consumer>
                {authUser => {
                    return (
                        <span>
                            <CallbackButton text={"Save Update"} callback={() => {
                                this.saveUpdates(authUser);
                            }}/>
                        </span>
                    )
                }}
            </authUserContext.Consumer>
        );
    }
}