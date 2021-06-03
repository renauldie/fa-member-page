import React from 'react';

import { Link } from 'react-router-dom';

export default function EmptyCourse() {
	return (
		<>
			<section className='flex justify-center flex-col items-center bg-white'>
				<div className='w-full text-center py-12 mx-auto'>
					<p className='text-lg text-gray-600 mt-4 mb-8 mx-auto text-center item-wrap'>
						It seems you have not choose any course yet
					</p>
					<Link to='offered-course'>
						<button
							className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all duration-200 ocus:outline-none shadow-inner'
							type='submit'>
							Choose course
						</button>
					</Link>
				</div>
			</section>
		</>
	);
}
