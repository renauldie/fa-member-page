import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import oprec from 'constants/api/selected';

import Sidebar from 'parts/Sidebar';
import ListSelectedCourse from 'parts/ListSelectedCourse';
import Loading from 'parts/Loading';

import {
	statusCourses,
	fetchCourses,
	messageCourse,
} from 'store/actions/myCourse';

export default function SelectedCourse() {
	const dispatch = useDispatch();
	const COURSES = useSelector((state) => state.oprec);

	useEffect(() => {
		window.scroll(0, 0);
		dispatch(statusCourses('loading'));
		oprec
			.myCourse()
			.then((res) => {
				console.log(res);
				dispatch(fetchCourses(res.data));
			})
			.catch((err) => {
				dispatch(messageCourse(err?.response?.data?.message ?? 'error'));
			});
	}, [dispatch]);

	return (
		<>
			<div className='flex'>
				<Sidebar></Sidebar>
				<main className='flex-1'>
					<div className='px-4 sm:px-16'>
						{COURSES.status === 'loading' && <Loading></Loading>}
						{COURSES.status === 'error' && COURSES.message}
						{COURSES.status === 'ok' && (
							<div>
								<section className='flex flex-col sm:pl-0'>
									<section className='flex flex-col mt-8 pl-12 sm:pl-0'>
										<h1 className='text-xl sm:text-4xl text-gray-900 font-medium'>
											Open Recruitment
										</h1>
										<p className='text-sm sm:text-lg text-gray-600'>
											Selected Courses
										</p>
									</section>
								</section>
								<section className='flex flex-col mt-3 pl-12 sm:pl-0'>
									<div className='flex pb-5'></div>
									<div className='flex flex-col'>
										<table className='table-fixed'>
											<thead>
												<tr>
													<th className='truncate w-1/6 text-left'>Course</th>
													<th className='truncate w-1/6 text-left'>
														Whatsapp link
													</th>
													<th className='truncate w-1/6 text-center'>Action</th>
												</tr>
											</thead>
											{Object.values(COURSES.data)?.map?.((item, index) => {
												return (
													<ListSelectedCourse
														data={item}
														key={index}></ListSelectedCourse>
												);
											})}
										</table>
									</div>
									<div className='mt-12'>
										<Link
											className='text-center w-1/3 h-10 p-3 bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white py-2 rounded-md'
											to='offered-course'>
											<button type='submit'>Choose course</button>
										</Link>
									</div>
								</section>
							</div>
						)}
					</div>
				</main>
			</div>
		</>
	);
}
