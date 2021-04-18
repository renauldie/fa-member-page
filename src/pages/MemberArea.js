import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Sidebar from 'parts/Sidebar';

function EmptyState() {
	return (
		<section className='flex h-screen items-center'>
			<div className='w-5/12 text-center py-12 mx-auto'></div>
		</section>
	);
}

export default function MemberArea() {
	return (
		<div className='flex'>
			<Sidebar></Sidebar>
		</div>
	);
}
