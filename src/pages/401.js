import React from 'react';

import { Link } from 'react-router-dom';

export default function Unauthenticated({
	fallbackUrl,
	fallbackText,
	external,
}) {
	return (
		<>
			<div className='flex-center position-ref full-height'>
				<div className='code'>401</div>
				<div className='message' style={{ padding: '10px' }}>
					Authentication not found
				</div>
				<div className='absolute mt-28'>
					{external ? (
						<a
							className='rounded-md bg-blue-700 hover:bg-blue-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5'
							href={fallbackUrl}>
							{fallbackText || 'Logging me in'}
						</a>
					) : (
						<Link
							className='rounded-md bg-blue-700 hover:bg-blue-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5'
							to={fallbackUrl || '/login'}>
							{fallbackText || 'Logging me in'}
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
