import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import offered from 'constants/api/offered';

import Loading from 'parts/Loading';
import Sidebar from 'parts/Sidebar';

import Select from 'components/Form/Select';

import useForm from 'helpers/hooks/useForm';

import {
	statusOffered,
	fetchOffered,
	messageOffered,
} from 'store/actions/offeredCourse';

export default function OfferedCourse() {
	const dispatch = useDispatch();
	const COURSES = useSelector((state) => state.offered);

	useEffect(() => {
		window.scroll(0, 0);
		dispatch(statusOffered('loading'));
		offered
			.getData(localStorage.getItem('code'))
			.then((res) => {
				console.log(res);
				dispatch(fetchOffered(res.data));
			})
			.catch((err) => {
				dispatch(messageOffered(err?.response?.data?.message ?? 'error'));
			});
	}, [dispatch]);

	const [offered_course_id, setState] = useForm({
		offered_course_id: '',
	});

	const [errors, seterrors] = useState(null);

	function submit(e) {
    e.preventDefault();
	}

	return (
		<>
			<div className='flex'>
				<Sidebar></Sidebar>
				<main className='flex-1'>
					<div className='px-4 sm:px-16'>
						{COURSES.status === 'loading' && <Loading></Loading>}
						{COURSES.status === 'error' && COURSES.message}
						{COURSES.status === 'ok' && (
							<section className='flex flex-col mt-8 pl-12 sm:pl-0'>
								<h1 className='text-xl sm:text-4xl text-gray-900 font-medium'>
									Open Recruitment
								</h1>
								<p className='text-sm sm:text-lg text-gray-600'>
									Choose what you're good at
								</p>
								<section className='flex flex-col mt-8'>
									<div className='flex items-center pb-24'>
										<div className='w-full md:w-4/6 xl:w-5/12 sm:w-6/12'>
											<form action=''>
												<Select
													labelName='ListOffered Courses'
													name='offered_course_id'
													value={offered_course_id}
													fallbackText='Select your focus'
													onClick={setState}>
													{Object.values(COURSES.data)?.map?.((item, index) => {
														return (
															<>
																<option value={item.id} key={index}>
																	{item.course.name}
																</option>
															</>
														);
													})}
												</Select>
												<div className='flex justify-center'>
													<button
														type='submit'
														className='w-full h-10 bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white py-2 rounded-md'>
														Choose!
													</button>
												</div>
											</form>
										</div>
									</div>
								</section>
							</section>
						)}
					</div>
				</main>
			</div>
		</>
	);
}
