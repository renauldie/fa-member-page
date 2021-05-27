import { toast } from 'react-toastify';
import users from 'constants/api/users';

import axios, { setAuthorizationHeader } from './index';

export default function errorHandler(error) {
	if (error) {
		let message;
		if (error.response) {
			const originalRequest = error.config;
			if (error.response.status === 500) {
				message = 'Something went terribly wrong';
			} else if (error.response.status === 403 && !originalRequest._retry) {
				if (error.response.data.message === 'jwt expired') {
					window.location.href = '/login';
					localStorage.removeItem('FA:token');
				}
				console.log(error.response.data.message);
				originalRequest._retry = true;
				const session = localStorage['FA:token']
					? JSON.parse(localStorage['FA:token'])
					: null;
				return users
					.refresh({
						refresh_token: session.refresh_token,
						npm: session.u,
					})
					.then((res) => {
						if (res.data) {
							setAuthorizationHeader(res.data.token);
							localStorage.setItem(
								'FA:token',
								JSON.stringify({
									...session,
									token: res.data.token,
								})
							);

							originalRequest.headers.authorization = res.data.token;

							return axios(originalRequest);
						} else {
							window.location.href = '/login';
							localStorage.removeItem('FA:token');
						}
					});
			} else {
				message = error.response.data.message;
			}

			if (typeof message === 'string') toast.error(message);

			return Promise.reject(error);
		}
	}
}
