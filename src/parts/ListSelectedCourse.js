import React from 'react';

import Select from 'components/Form/Select';

export default function OprecForm({ data, course }) {
	return (
		<div>
			<section className='flex flex-col md:w-9/12 xl:w-9/12 sm:w-6/12'>
				<div className='flex items-center pb-10'>
					<h1 className='text-xl'>Selected Courses</h1>
				</div>
				<div className='flex flex-col'>
					<table className='table-fixed'>
						<thead>
							<tr>
								<th className='w-1/2 text-left'>Course</th>
								<th className='w-1/2 text-left'>Whatsapp link</th>
								<th className='w-1/4 text-right'>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr className=' '>
								<td>{course.name}</td>
								{console.log(course, 'data')}
								<td>
									<a
										className='rounded-md text-blue-700 hover:text-blue-400 transition-all duration-200'
										href={data.whatsapp_link}
										target='_blank'>
										click this link to join group
									</a>
								</td>
								<td className='text-right'>
									<a className='text-red-700'>delete</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}

// export default withRouter(OprecForm);
