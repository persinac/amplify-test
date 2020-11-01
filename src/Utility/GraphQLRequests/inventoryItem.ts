import {API, graphqlOperation} from "aws-amplify";
import {listWrfcenterInventoryIteMs} from "../../graphql/queries";
import {createWrfcenterInventoryItem, updateWrfcenterInventoryItem} from "../../graphql/mutations";

export async function fetchListOfInventoryItem() {
    try {
        const listOfInvItem = await API.graphql(graphqlOperation(listWrfcenterInventoryIteMs));
        // @ts-ignore
        console.log(listOfInvItem.data.listWRFCENTER_INVENTORY_ITEMs);
        // @ts-ignore
        return listOfInvItem.data.listWRFCENTER_INVENTORY_ITEMs
    } catch (err) { console.log('error fetching inventory item data') }
}

export async function createInventoryItem(newInvItem: any) {
    try {
        console.log(newInvItem);
        const postNewInvItem = await API.graphql({
            query: createWrfcenterInventoryItem, variables: {data:{
                INVENTORY_ITEM_ID: 1,
                R_INVENTORY_ITEM_ID: 1,
                QUANTITY: 0,
                CREATED_BY: "SYSTEM",
                CREATED_DATETIME: new Date(),
                LAST_MODIFIED_BY: "SYSTEM",
                LAST_MODIFIED_DATETIME: new Date(),
                IS_ACTIVE: 1
            }}
        });
        // @ts-ignore
        console.log(postNewInvItem);
        // @ts-ignore
        return postNewInvItem;
    } catch (err) {
        console.log('error adding inventory item data');
        console.log(err);
    }
}

export async function updateInventoryItem(updateInvItem: any) {
    try {
        console.log(updateInvItem);
        const postUpdatedInvItem = await API.graphql(graphqlOperation(updateWrfcenterInventoryItem, {input: updateInvItem}));
        // @ts-ignore
        console.log(postUpdatedInvItem);
        // @ts-ignore
        return postUpdatedInvItem;
    } catch (err) {
        console.log('error updating inventory item data');
        console.log(err);
    }
}