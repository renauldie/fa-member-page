import React from 'react';

import Sidebar from 'parts/Sidebar';
import OprecForm from 'parts/OprecForm'

export default function OpenRecruitment() {
	return (
		<div className='flex'>
			<Sidebar></Sidebar>

			<main className='flex-1'>
				<div className='px-4 sm:px-16'>
					<section className='flex flex-col mt-8 pl-12 sm:pl-0'>
						<h1 className='text-xl sm:text-4xl text-gray-900 font-medium'>
							Open Recruitment
						</h1>
						<p className="text-sm sm:text-lg text-gray-600">
							Choose what you're good at
						</p>
					</section>
					<OprecForm></OprecForm>
				</div>
			</main>
		</div>
	);
}
