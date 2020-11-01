import React, { Component } from 'react';
import {CallbackButton} from "./CallbackButton";
import {createInventoryItem, updateInventoryItem} from "../../Utility/GraphQLRequests/inventoryItem";

export default class ChildMessageRenderer extends Component {
    constructor(props: any) {
        super(props);

        this.saveUpdates = this.saveUpdates.bind(this);
    }

    saveUpdates() {
        console.log(this.props);
        // @ts-ignore
        console.log(`Saving Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`);
        // @ts-ignore
        if(this.props.data.INVENTORY_ITEM_ID !== undefined && this.props.data.INVENTORY_ITEM_ID !== null) {
            // @ts-ignore
            updateInventoryItem(this.props.data)
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
            <span>
                <CallbackButton text={"Save Update"} callback={() => {this.saveUpdates()}}/>
            </span>
        );
    }
}