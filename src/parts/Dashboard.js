import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	return (
		<>
			<section className='flex justify-between flex-col xl:flex-row md:flex-row items-center'>
				<div className='bg-white rounded-xl shadow-md overflow-hidden mt-10 xl:w-1/3 xs:w-4/5 md:w-1/3 mr-3'>
					<div className='md:flex'>
						<div className='md:flex-shrink-0'></div>
						<div class='p-8'>
							<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Available Course
							</div>
							<p class='mt-2 text-gray-500 text-2xl'>10</p>
						</div>
					</div>
				</div>
				<div className='bg-white rounded-xl shadow-md overflow-hidden mt-10 xl:w-1/3  xs:w-4/5 md:w-1/3 mr-3'>
					<div className='md:flex'>
						<div className='md:flex-shrink-0'></div>
						<div class='p-8'>
							<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Available Course
							</div>
							<p class='mt-2 text-gray-500 text-2xl'>10</p>
						</div>
					</div>
				</div>
				<div className='bg-white rounded-xl shadow-md overflow-hidden mt-10 xl:w-1/3  xs:w-4/5 md:w-1/3 mr-3'>
					<div className='md:flex'>
						<div className='md:flex-shrink-0'></div>
						<div class='p-8'>
							<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Available Course
							</div>
							<p class='mt-2 text-gray-500 text-2xl'>10</p>
						</div>
					</div>
				</div>
			</section>

			<section className='p-2 mt-7 flex justify-between flex-col xl:flex-row md:flex-row items-center'>
				<div className='flex flex-col'>
					<p className='text-sm sm:text-lg text-gray-600 mb-4'>
						It's seem you need to make an update to your profile!
					</p>
					<div className='flex'>
						<button
							className='bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-all duration-200 focus:outline-none shadow-inner'
							type='submit'>
							<Link to='/profile'>Update Profile</Link>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
