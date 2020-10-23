import React from "react";
import {withAuthorization} from "../../Firebase/withAuthorization";
import {API, graphqlOperation} from 'aws-amplify';
import {listWrfcenterRDatAs} from '../../graphql/queries'

const ax = require('axios').default;

class HomeComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      users: null
    };
  }

  public componentDidMount() { }

  public render() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>The Home Page is accessible by every signed in user.</p>
      </div>
    );
  }
}

async function fetchTodos() {
  try {
    const listOfRefData = await API.graphql(graphqlOperation(listWrfcenterRDatAs));
    // @ts-ignore
    const refData = listOfRefData.data.listWRFCENTER_R_DATAs
    console.log(refData);
  } catch (err) { console.log('error fetching todos') }
}

const authCondition = (authUser: any) => { console.log(authUser); return !!authUser} ;

export const Home = withAuthorization(authCondition)(HomeComponent);
