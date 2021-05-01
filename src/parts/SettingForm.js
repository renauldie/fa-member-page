import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Select from 'components/Form/Select';
import Input from 'components/Form/Input';

import { useSelector } from 'react-redux';

import useForm from 'helpers/hooks/useForm';
import fieldErrors from 'helpers/fieldErrors';

import users from 'constants/api/users';
import media from 'constants/api/media';

import { populateProfile } from 'store/actions/users';

import image2base64 from 'utils/image2base64';

import { ReactComponent as DefaultUser } from 'assets/images/default-profile.svg';

function SettingForm({ details, history }) {
	const dispatch = useDispatch();
	const addPicture = useRef(null);

	const USERS = useSelector((state) => state.users);

	const [state, setKey, setState] = useForm({
		name: details?.name ?? '',
		email: details?.email ?? '',
		npm: details?.npm ?? '',
		avatar: details?.avatar ?? '',
		tft: details?.tft ?? '',
		city_address: details?.city_address ?? '',
	});

	const [errors, setErrors] = useState(null);

	function previewImage(e) {
		e.persist();
		image2base64(e.target.files[0]).then((image) => {
			setKey({
				target: {
					name: e.target.name,
					value: image,
				},
			});
		});
	}

	async function submit(e) {
		e.preventDefault();

		const payload = {
			name: state.name,
			npm: state.npm,
			email: state.email,
			avatar: state.avatar,
			tft: state.tft,
			city_address: state.city_address,
		};
		if (payload.profession === 'others')
			payload.profession = state.otherProfession;

		if (state.avatar.indexOf('base64') > -1) {
			const avatar = await media.upload(state.avatar);
			payload.avatar = avatar.data.image;
		}

		users
			.update(payload)
			.then((res) => {
				toast.success('Profile updated');
				setState({
					...state,
					password: '',
				});
				setErrors(null);
				dispatch(
					populateProfile({
						...details,
						...res.data,
					})
				);
			})
			.catch((error) => setErrors(error?.response?.data?.message ?? 'errors'));
	}

	const ERRORS = fieldErrors(errors);

	return (
		<>
			<section className='flex flex-col mt-8'>
				<div className='flex justify-start items-center -mx-5'>
					<div className='w-auto text-center px-5'>
						<div className='rounded-full overflow-hidden w-24 h-24'>
							{state.avatar ? (
								<img
									className='object-cover w-full h-full'
									src={state.avatar}
									alt='Preview'
								/>
							) : (
								<DefaultUser
									className='fill-indigo-500'
									style={{ width: 90, height: 90 }}></DefaultUser>
							)}
						</div>
					</div>
					<div className='w-full flex flex-col'>
						<span className='text-gray-600'>Add your picture...</span>
						<div>
							<input
								type='file'
								name='avatar'
								ref={addPicture}
								className='hidden'
								onChange={previewImage}
							/>
							<button
								onClick={() => addPicture.current.click()}
								className='bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-3 rounded-md'>
								Browse
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className='flex flex-col mt-8'>
				<div className='flex items-center pb-24'>
					<div className='w-full md:w-4/6 xl:w-5/12 sm:w-6/12'>
						<form onSubmit={submit}>
							<Input
								value={USERS?.npm ?? state.npm}
								error={ERRORS?.npm?.message}
								name='npm'
								onChange={setKey}
								placeholder='Your NPM'
								labelName='Student Number'
							/>
							<Input
								value={USERS?.name ?? state.name}
								error={ERRORS?.name?.message}
								name='name'
								onChange={setKey}
								placeholder='Your Name'
								labelName='Full Name'
							/>
							<Input
								value={state.email}
								error={ERRORS?.email?.message}
								name='email'
								type='email'
								onChange={setKey}
								placeholder='Your email address'
								labelName='Email Address'
							/>
							<Input
								value={state.city_address}
								error={ERRORS?.city_address?.message}
								name='city_address'
								type='text'
								onChange={setKey}
								placeholder='Your city address'
								labelName='City Address'
							/>
							<Input
								value={state.tft}
								error={ERRORS?.tft?.message}
								name='tft'
								type='text'
								onChange={setKey}
								labelName='TFT Status'
							/>
							<button
								type='submit'
								className='bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 rounded-md'>
								Save Changes
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default withRouter(SettingForm);
