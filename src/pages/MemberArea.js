import React from 'react';
import users from 'constants/api/users';

import { useDispatch, useSelector } from 'react-redux';

import Sidebar from 'parts/Sidebar';
import Dashboard from 'parts/Dashboard';
import SettingForm from 'parts/SettingForm';

function EmptyState() {
	return (
		<section className='flex h-screen items-center'>
			<div className='w-5/12 text-center py-12 mx-auto'></div>
		</section>
	);
}

export default function MemberArea() {
	const USERS = useSelector((state) => state.users);

	return (
		<div className='flex'>
			<Sidebar></Sidebar>

			<main className='flex-1'>
				<div className='px-4 sm:px-16'>
					<section className='flex flex-col mt-8 pl-12 sm:pl-0'>
						<h1 className='text-xl sm:text-4xl text-gray-900 font-medium'>
							Wellcome Back!
						</h1>
						<p className='text-sm sm:text-lg text-gray-600'>How's Your Day?</p>
					</section>
					<Dashboard></Dashboard>
				</div>
			</main>
		</div>
	);
}
