import React from 'react';

import { Link } from 'react-router-dom';

export default function Unauthenticated({
	fallbackUrl,
	fallbackText,
	external,
}) {
	return (
		<section className='h-screen flex flex-col items-center mt-10'>
			<img
				style={{ height: 400, zIndex:100}}
				src={`${process.env.PUBLIC_URL}/assets/images/illustration-not-found.jpg`}
				alt='you are not supposed here, please login'
			/>
			<h1 className='text-2xl text-gray-900 mt-12'>No Atuhorization Found.</h1>
			<p className='text-md text-gray-600 mt-4 mtb-8 mx-auto text-center'>
				this page is publically available. <br/>
        to access it please login first.
			</p>
			{external ? (
				<a
					className='bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5'
					href={fallbackUrl}>
					{fallbackText || 'Logging me in'}
				</a>
			) : (
				<Link
					className='bg-blue-500 hover:bg-blue-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5'
					to={fallbackUrl || '/login'}>
					{fallbackText || 'Logging me in'}
				</Link>
			)}
		</section>
	);
}
