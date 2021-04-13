import React, { useState } from 'react';
import {withRouter} from 'react-router-dom'

import users from 'constants/api/users';

import { setAuthirizationHeader } from 'configs/axios';

function LoginForm({ history }) {
	const [u, setnpm] = useState(() => '');
	const [p, setpassword] = useState(() => '');

	function submit(e) {
		e.preventDefault();

		users
			.login({ u, p })
			.then((res) => {
				setAuthirizationHeader(res.data.token);
				// console.log(res);
				users.details().then((detail) => {
					const production =
						process.env.REACT_APP_FRONT_PAGE_URL === 'http://localhost:3005'
							? 'Domain = localhost:3005'
							: '';
					localStorage.setItem(
						'FA:token',
						JSON.stringify({
							...res.data,
							u: u,
						})
					);

					const redirect = localStorage.getItem('FA:redirect');
					const userCookie = {
						name: detail.data.name,
						thumbnail: detail.data.avatar,
					};

					const expires = new Date(
						new Date().getTime() + 7 * 24 * 60 * 60 * 1000
					);

					document.cookie = `FA:user=${JSON.stringify(
						userCookie
					)}; expires=${expires.toUTCString()}; path:/; ${production}`;

					history.push(redirect || '/');
				});
			})
			.catch((err) => {});
	}

	return (
		<div className='container flex justify-center items-center pb-24 -mb-10'>
			<div className='w-full sm:w-4/12'>
				<h1 className='text-4xl text-gray-900 mb-6'>
					<span className='font-bold'>Lets beginn</span> The Journery
				</h1>

				<form onSubmit={submit}>
					<div className='flex flex-col mb-4 mt-4'>
						<label htmlFor='npm' className='text-md mb-2'>
							NPM
						</label>
						<input
							name='u'
							type='text'
							onChange={(event) => setnpm(event.target.value)}
							className='bg-white focus:outline-none border w-full px-6 py-2 border-gray-400 focus:border-blue-600'
							value={u}
							placeholder='Your npm'
							required
						/>
					</div>

					<div className='flex flex-col mb-4'>
						<label htmlFor='password' className='text-lg mb-2'>
							Password
						</label>
						<input
							name='p'
							type='password'
							onChange={(event) => setpassword(event.target.value)}
							className='bg-white focus:outline-none border w-full px-6 py-2 border-gray-400 focus:border-blue-600'
							value={p}
							placeholder='Your Password'
							required
						/>
					</div>
					<button
						type='submit'
						className='bg-indigo-700 hover:bg-indigo-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full'>
						Masuk
					</button>
				</form>
			</div>

			<div className='w-1/12 hidden sm:block'></div>

			<div className='w-5/12 hidden sm:block justify-end pt-24 pr-16'>
				<div className='relative' style={{ width: 390, height: 420 }}>
					<div className='absolute items-center w-full h-full -mb-8 ml-16'>
						<img
							src='/assets/images/login-character.jpg'
							alt='Character login'
						/>
						<div
							className='absolute z-10 -mt-9 bg-white bottom-0 right-0 py-3 px-4 -mr-10'
							style={{ width: 290 }}>
							<p className='text-gray-900 mb-2'>
								Tidak perlu registrasi, gunakan akun Amikom saja
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(LoginForm)
