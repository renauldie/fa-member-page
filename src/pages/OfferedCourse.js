import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import offered from 'constants/api/offered';

import Loading from 'parts/Loading';
import Sidebar from 'parts/Sidebar';

import useForm from 'helpers/hooks/useForm';

import Select from 'components/Form/Select';

import {
	statusOffered,
	fetchOffered,
	messageOffered,
} from 'store/actions/offeredCourse';

export default function OfferedCourse({ history }) {
	const dispatch = useDispatch();
	const OFFERED = useSelector((state) => state.offered);

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

	const [{ offered_course_id }, setState, state] = useForm({
		offered_course_id: '',
	});

	const [errors, seterrors] = useState(null);

	function submit(e) {
		e.preventDefault();

		offered
			.joinCourse({ offered_course_id })
			.then((res) => {
				toast.success('Course choosen');
				console.log(res);
				history.push('/open-recruitment');
			})
			.catch((err) => {
				seterrors(err?.response?.data?.message);
			});
	}

	return (
		<>
			<div className='flex'>
				<Sidebar></Sidebar>
				<main className='flex-1'>
					<div className='px-4 sm:px-16'>
						<section className='flex flex-col mt-8 pl-12 sm:pl-0'>
							<h1 className='text-xl sm:text-4xl text-gray-900 font-medium'>
								Open Recruitment
								{console.log('object')}
							</h1>
							<p className='text-sm sm:text-lg text-gray-600'>
								Choose what you're good at
							</p>
							{OFFERED.status === 'loading' && <Loading></Loading>}
							{OFFERED.status === 'error' && OFFERED.message}
							{OFFERED.status === 'ok' && (
								<section className='flex flex-col mt-8'>
									<div className='flex items-center pb-24'>
										<div className='w-full md:w-4/6 xl:w-5/12 sm:w-6/12'>
											<form onSubmit={submit}>
												<Select
													labelName='Choose Your Course'
													name='offered_course_id'
													value={offered_course_id}
													fallbackText='Select your focus'
													onClick={setState}>
													{Object.values(OFFERED.data)?.map?.((item, index) => {
														return (
															<option value={item.id} key={index}>
																{item.course.name}
															</option>
														);
													})}
												</Select>
												<div className='flex'>
													<button
														type='submit'
														// className='h-10 bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white py-2 rounded-md'>
														className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all duration-200 ocus:outline-none shadow-inner'>
														Choose!
													</button>
												</div>
											</form>
										</div>
									</div>
								</section>
							)}
						</section>
					</div>
				</main>
			</div>
		</>
	);
}
