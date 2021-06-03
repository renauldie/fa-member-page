import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'assets/css/style.css';

import MemberRoute from 'components/Routes/MemberRoute';
import GuestRoute from 'components/Routes/GuestRoute';

import NotFound from 'pages/404';
import Unauthenticated from 'pages/401';

import Login from 'pages/Login';

import MemberArea from 'pages/MemberArea';
import Profile from 'pages/Profile';
import MyCourse from 'pages/SelectedCourse';
import OfferedCourse from 'pages/OfferedCourse';
import Certivicates from 'pages/Certivicates';

import { setAuthorizationHeader } from 'configs/axios';

import users from 'constants/api/users';

import { populateProfile } from 'store/actions/users';

function App() {
	const dispatch = useDispatch();
	const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

	useEffect(() => {
		let session = null;
		if (localStorage.getItem('FA:token')) {
			session = JSON.parse(localStorage.getItem('FA:token'));
			setAuthorizationHeader(session.token);

			users.details().then((details) => {
				dispatch(populateProfile(details.data));
			});
		}
	}, [dispatch]);
	return (
		<>
			<Router history={history}>
				<Switch>
					<GuestRoute path='/login' component={Login}></GuestRoute>
					<GuestRoute path='/private' component={Unauthenticated}></GuestRoute>

					<MemberRoute exact path='/' component={MemberArea}></MemberRoute>
					<MemberRoute
						path='/open-recruitment'
						component={MyCourse}></MemberRoute>
					<MemberRoute
						path='/offered-course'
						component={OfferedCourse}></MemberRoute>
					<MemberRoute
						path='/certivicates'
						component={Certivicates}></MemberRoute>
					<MemberRoute path='/profile' component={Profile}></MemberRoute>
					
					<Route path='*' component={NotFound}></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
