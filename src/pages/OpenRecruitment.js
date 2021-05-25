import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import oprec from 'constants/api/oprec';

import Sidebar from 'parts/Sidebar';

import ListSelectedCourse from 'parts/ListSelectedCourse';
import ListOfferedCourse from 'parts/ListOfferedCourse';

import Loading from 'parts/Loading';
import {
	statusCourses,
	fetchCourses,
	messageCourse,
} from 'store/actions/oprec';

function EmptyState() {
	return (
		<section className='flex h-screen items-center relative z-50 bg-white'>
			<div className='w-full sm:w-5/12 text-center py-12 mx-auto'>
				<p className='text-lg text-gray-600 mt-4 mb-8 mx-auto text-center'>
					It seems you don’t have any class yet so let’s get them and grow your
					skills
				</p>
			</div>
		</section>
	);
}

export default function OpenRecruitment() {
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
		<div className='flex'>
			<Sidebar></Sidebar>
			<main className='flex-1'>
				<div className='px-4 sm:px-16'>
					{COURSES.status === 'loading' && <Loading></Loading>}
					{COURSES.status === 'error' && COURSES.message}
					{COURSES.status === 'ok' &&
						(COURSES.total > 0 ? (
							<>
								<section className='flex flex-col mt-8 pl-12 sm:pl-0'>
									<h1 className='text-xl sm:text-4xl text-gray-900 font-medium'>
										Open Recruitment
									</h1>
									<p className='text-sm sm:text-lg text-gray-600'>
										Choose what you're good at
									</p>

									{Object.values(COURSES.data)?.map?.((item, index) => {
										return (
											<ListOfferedCourse></ListOfferedCourse>
										);
									})}
									
									{Object.values(COURSES.data)?.map?.((item, index) => {
										return (
											<ListSelectedCourse
												data={item.offered_course}
												course={item.offered_course.course}
												key={index}>
											</ListSelectedCourse>
										);
									})}
									
								</section>
							</>
						) : (
							<EmptyState></EmptyState>
						))}
				</div>
			</main>
		</div>
	);
}
