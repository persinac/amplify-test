import {API, graphqlOperation} from "aws-amplify";
import {listWrfcenterInventoryIteMs} from "../../graphql/queries";
import {createWrfcenterInventoryItem, updateWrfcenterInventoryItem} from "../../graphql/mutations";
import {ICreateInventoryItem, IInventoryItem} from "../../State";

export async function fetchListOfInventoryItem() {
    try {
        const listOfInvItem = await API.graphql(graphqlOperation(listWrfcenterInventoryIteMs));
        // @ts-ignore
        return listOfInvItem.data.listWRFCENTER_INVENTORY_ITEMs
    } catch (err) { console.log('error fetching inventory item data') }
}

export async function createInventoryItem(newInvItem: IInventoryItem) {
    try {
        let transformedInvItem: ICreateInventoryItem = {
            R_INVENTORY_ITEM_ID: newInvItem.R_INVENTORY_ITEM_ID,
            QUANTITY: newInvItem.QUANTITY,
            CREATED_BY: newInvItem.CREATED_BY,
            CREATED_DATETIME: newInvItem.CREATED_DATETIME,
            LAST_MODIFIED_BY: newInvItem.LAST_MODIFIED_BY,
            LAST_MODIFIED_DATETIME: newInvItem.LAST_MODIFIED_DATETIME,
            IS_ACTIVE: newInvItem.IS_ACTIVE
        }
        return await API.graphql({
            query: createWrfcenterInventoryItem, variables: { createWRFCENTER_INVENTORY_ITEMInput: transformedInvItem}
        });
    } catch (err) {
        console.log('error adding inventory item data');
        console.log(err);
    }
}

export async function updateInventoryItem(updateInvItem: IInventoryItem, authUser: any) {
    try {
        let tempDate = new Date();
        let formatted_date =
            tempDate.getFullYear() + "-"
            + (tempDate.getMonth() + 1) + "-"
            + tempDate.getDate() + " "
            + tempDate.getHours() + ":"
            + tempDate.getMinutes() + ":"
            + tempDate.getSeconds();
        updateInvItem.LAST_MODIFIED_BY = authUser.username;
        updateInvItem.LAST_MODIFIED_DATETIME = formatted_date;
        return await API.graphql(
            graphqlOperation(updateWrfcenterInventoryItem,
                {
                    updateWRFCENTER_INVENTORY_ITEMInput: updateInvItem}
                )
        );
    } catch (err) {
        console.log('error updating inventory item data');
        console.log(err);
    }
}