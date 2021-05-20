import React from 'react';

import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
			<div className='flex-center position-ref full-height'>
				<div className='code'>404</div>
				<div className='message' style={{ padding: '10px' }}>
					Not Found
				</div>
				<div className='absolute mt-28'>
					<Link
						className='bg-blue-700 hover:bg-blue-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5'
						to={'/'}>
						Back to home
					</Link>
				</div>
			</div>
		</>
	);
}
