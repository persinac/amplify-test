import {API, graphqlOperation} from "aws-amplify";
import {listWrfcenterRDatAs} from "../../graphql/queries";

export async function fetchListOfRefData() {
    try {
        const listOfRefData = await API.graphql(graphqlOperation(listWrfcenterRDatAs));
        // @ts-ignore
        return listOfRefData.data.listWRFCENTER_R_DATAs
    } catch (err) { console.log('error fetching reference data') }
}