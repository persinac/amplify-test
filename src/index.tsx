import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Amplify, API, Auth, Storage } from 'aws-amplify';
import awsConfig from './aws-exports.js'

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
/* Register the services before configure */
Amplify.configure(awsConfig)

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
