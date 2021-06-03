import React, { useState } from 'react';
import { toast } from 'react-toastify';

import selectedCourse from 'constants/api/selected';
import {ReactComponent as Trash} from 'assets/images/property/trash-icon.svg'


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
					<td className='item-center text-center'>
						<form onSubmit={submit}>
							<button
								type='submit'>
								<Trash className='fill-current text-green-600 w-10 h-10 svg-change'></Trash>
							</button>
						</form>
					</td>
				</tr>
			</tbody>
		</>
	);
}
