import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import {SignOut} from '../SignOut';
import {authUserContext} from '../../Firebase/AuthUserContext';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import * as ROLES from "../../Constants/roles";

interface INavState {
	authUser: any
}

interface INavProps {
	authUser: any
}

class NavigationComponent extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = {
			users: null
		};
	}

	public componentDidMount() { }

	public render() {
		// console.log(this.state);
		return (
			<authUserContext.Consumer>
				{authUser => {
					return (authUser ? this.returnAuthorizedLogin(!!authUser.roles[ROLES.ADMIN]) : this.returnNonAuthorizedLogin())
				}
				}
			</authUserContext.Consumer>
		);
	}

	private returnNonAuthorizedLogin() {
		return (<div></div>);
	}

	private returnAuthorizedLogin(isAdmin: boolean) {
		return (
			<Navbar id={'primary-navbar'} className={'navbar-dark sticky-top bg-dark flex-md-nowrap p-0'} expand={"lg"}>
				<Navbar.Brand as={Link} to={ROUTES.HOME}>WRF Center</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="navbarSupportedContent">
					<Nav className="mr-auto width-100">
						<Nav.Link
							eventKey="1"
							as={Link}
							to={ROUTES.HOME}
							onClick={(event: any) => {
								this.removeActiveClasses();
								(event.target as any).classList.toggle('active')
							}
						}>Home</Nav.Link>
						<Nav.Link
							eventKey="2"
							as={Link}
							to={ROUTES.ACCOUNT}
							onClick={(event: any) => {
								this.removeActiveClasses();
								(event.target as any).classList.toggle('active')
							}
							}>Account</Nav.Link>
						{isAdmin ? this.showAdmin() : null}
						<Nav.Link
							className={"ml-auto"}
							eventKey="4"
							onClick={(event: any) => {
								this.removeActiveClasses();
								(event.target as any).classList.toggle('active')
							}
							}>
							<SignOut/>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}

	private removeActiveClasses(): void {
		[...document.querySelectorAll('.active')].forEach(function(e) {
			e.classList.remove('active');
		});
	}

	private showAdmin() {
		return (
			<Nav.Link
				eventKey="3"
				as={Link}
				to={ROUTES.ADMIN}
				onClick={(event: any) => {
					this.removeActiveClasses();
					(event.target as any).classList.toggle('active')
				}
				}>Admin</Nav.Link>
		)
	}
}

const authCondition = (authUser: any) => {
	return !!authUser
} ;

export const Navigation = NavigationComponent;
