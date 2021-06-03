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
							{COURSES.status === 'loading' && <Loading></Loading>}
							{COURSES.status === 'error' && COURSES.message}
							{COURSES.status === 'ok' && (
								<section className='flex flex-col mt-10 sm:pl-0'>
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
										<Link to='offered-course'>
											<button
												className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all duration-200 ocus:outline-none shadow-inner'
												type='submit'>
												Choose course
											</button>
										</Link>
									</div>
								</section>
							)}
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
