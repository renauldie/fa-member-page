import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
	function submit() {}

	return (
		<footer className='container px-8 mx-auto'>
			<div className='flex flex-wrap justify-between'>
				<div className='w-full sm:w-1/6'>
					<h6 className='text-white'>Faculty</h6>
					<ul className='mt-4'>
						<li className='mt-2'>
							<Link
								to=''
								className='text-indigo-500 hover:text-blue-400 hover:underline'>
								Computer Science
							</Link>
						</li>
						<li className='mt-2'>
							<Link
								to=''
								className='text-indigo-500 hover:text-blue-400 hover:underline'>
								Economy and Bussiness
							</Link>
						</li>
						<li className='mt-2'>
							<Link
								to=''
								className='text-indigo-500 hover:text-blue-400 hover:underline'>
								Sains and Technology
							</Link>
						</li>
					</ul>
				</div>
				<div className='w-full md:w-1/3 sm:w-1/3 mb-8 md:mb-0'>
					<h6 className='text-white'>Touch Us</h6>
					<p className='mt-4 text-indigo-500 leading-loose'>
						Ringroad Utara <br />
						Basement 4 Block L<br />
						Universitas Amikom Yogyakarta
						<br />
					</p>
				</div>
				<div className='w-full md:w-2/6 mb-8 md:mb-0'>
					<h6 className='text-white text-right'>Promotions</h6>
					<p className='mt-4 text-indigo-500 text-right'>
						Let's find us for more information
					</p>
				</div>
			</div>
			<div className='border-t pt-8 mt-8 -mb-2 border-gray-800 text-center'>
				<p className='text-indigo-500'>2021 Copyright IT Support Team</p>
			</div>
		</footer>
	);
}
