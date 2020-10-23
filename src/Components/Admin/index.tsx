import React from 'react';
import {db} from '../../Firebase';
import {withAuthorization} from '../../Firebase/withAuthorization';
import {Admin} from './Admin';
import * as ROLES from '../../Constants/roles';
import * as routes from '../../Constants/routes';
import AdminSideNav from "../Navigation/AdminSideNav";
import {Component} from "react";
import {fetchListOfRefData} from "../../Utility/GraphQLRequests/referenceData";
import {ListOfReferenceData} from "../ListOfReferenceData/ListOfReferenceData";

interface IState {
	navbarHeight: string;
	users: any;
	data: any;
	whatToRender?: number;
}


class AdminComponent extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);

		this.linkClickRender = this.linkClickRender.bind(this);
		this.state = {
			users: null,
			navbarHeight: '',
			data: null
		};
	}

	public componentDidMount() {

		this.setState({navbarHeight: window.getComputedStyle(document.getElementById('primary-navbar'), null).getPropertyValue("height")})
	}

	public render() {
		const {navbarHeight, whatToRender} = this.state;
		const containerStyle = {
			height: `calc(100% - ${navbarHeight})`
		};
		return (
			<div className={'container-fluid'} style={containerStyle}>
				<div className={'row height-100'}>
					<AdminSideNav linkRenderHandler={this.linkClickRender}/>
					<main role={'main'} className={'col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'}>
						<div>
							{whatToRender === 1 ? this.renderListOfReferenceData() : null}
						</div>
					</main>
				</div>
			</div>
		);
	}

	private linkClickRender(toRender: number) {
		this.setState({
			whatToRender: toRender
		});
	}

	private renderListOfReferenceData() {
		return <ListOfReferenceData fromAdmin={true}/>
	}
}

const authCondition = (authUser: any) => {
	console.log('AUTH CONDITION');
	console.log(authUser);
	console.log(authUser.roles);
	console.log(ROLES.ADMIN);
	console.log(authUser.roles[ROLES.ADMIN]);
	return authUser && !!authUser.roles[ROLES.ADMIN];
};

const defaultRouteRedirect = (authUser: any) => {
	console.log('DEFAULT REDIRECT - ADMIN INDEX');
	console.log(authUser);
	console.log(authUser.roles);
	console.log(ROLES.ADMIN);
	let route = routes.SIGN_IN;
	if (authUser) {
		if (!!authUser.roles[ROLES.ADMIN]) {
			route = routes.ADMIN;
		} else if (!!authUser.roles[ROLES.MEMBER]) {
			route = routes.ACCOUNT;
		} else {
			route = routes.SIGN_IN;
		}
	}
	return route;
};

export const AdminPage = withAuthorization(authCondition, defaultRouteRedirect)(AdminComponent);
