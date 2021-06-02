import React, { useState } from 'react';
import { toast } from 'react-toastify';

import selectedCourse from 'constants/api/selected';

export default function ListSelectedCourse({ data }) {
	async function submit(e) {
		e.preventDefault();

		const id = data.id;
		selectedCourse.DelMyCourse(id).then((res) => {
			toast.success('Selected course deleted');
			if (id) {
				window.location.reload();
			}
		});
	}

	return (
		<>
			<tbody>
				<tr>
					<td>
						<div className='item-wrap'>
							<p className='mr-4'>{data.offered_course.course.name}</p>
						</div>
					</td>
					<td>
						<a
							className='rounded-md text-blue-700 hover:text-blue-400 transition-all duration-200 md:mr-3 xl:-mr-2'
							href={data.offered_course.whatsapp_link}
							target='_blank'>
							join group!
						</a>
					</td>
					<td className='item-center'>
						<form onSubmit={submit}>
							<button
								type='submit'
								className='w-full h-10 bg-red-800 hover:bg-red-700 transition-all duration-200 focus:outline-none shadow-inner text-white py-2 rounded-md'>
								delete
							</button>
						</form>
					</td>
				</tr>
			</tbody>
		</>
	);
}
