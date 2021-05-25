import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import users from 'constants/api/users';

import { setAuthorizationHeader } from 'configs/axios';

import { populateProfile } from 'store/actions/users';

import useForm from 'helpers/hooks/useForm';

function LoginForm({ history }) {
	const dispatch = useDispatch();

	const [{ u, p }, setState] = useForm({
		u: '',
		p: '',
	});

	function submit(e) {
		e.preventDefault();

		users
			.login({ u, p })
			.then((res) => {
				setAuthorizationHeader(res.data.token);
				users.details().then((detail) => {
					dispatch(populateProfile(detail.data));
					const production =
						process.env.REACT_APP_FRONTPAGE_URL === 'https://localhost:3005'
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
						new Date().getTime() + 1 * 24 * 60 * 60 * 1000
						// new Date().getTime() + 10 * 60 * 1000
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
		<div className='flex justify-center items-center pb-24'>
			<div className='w-full sm:w-1/3'>
				<h1 className='text-4xl text-gray-900 mb-6'>
					<span className='font-bold'>Continue</span> Study, <br />
					Finish your <span className='font-bold'>Goals</span>
				</h1>
				<form onSubmit={submit}>
					<div className='flex flex-col mb-4'>
						<label htmlFor='u' className='text-lg mb-2'>
							NPM
						</label>
						<input
							name='u'
							type='name'
							onChange={setState}
							className='bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-blue-700 rounded-md'
							value={u}
							placeholder='Your NPM'
							required
						/>
					</div>

					<div className='flex flex-col mb-4'>
						<label htmlFor='p' className='text-lg mb-2'>
							Password
						</label>
						<input
							name='p'
							type='password'
							onChange={setState}
							className='bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-blue-700 rounded-md'
							value={p}
							placeholder='Your password'
							required
						/>
					</div>

					<button
						type='submit'
						className='bg-blue-700 hover:bg-blue-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full'>
						Masuk
					</button>
				</form>
			</div>

			<div className='w-1/12 hidden sm:block'></div>

			<div className='w-5/12 hidden sm:block justify-end pt-24 pr-16'>
				<div className='relative' style={{ width: 369, height: 440 }}>
					<div className='absolute w-full h-full -mb-8 -ml-8'>
						<img src='#' alt='' />
					</div>
					<div
						className='absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12'
						style={{ width: 290 }}>
						<p className='text-gray-900 mb-2'>
							Tidak perlu registrasi. Cukup pakai akun mahasiswa
						</p>
						<span className='text-gray-600'>~ IT Support Team</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(LoginForm);
