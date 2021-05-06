import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Select from 'components/Form/Select';

import useForm from 'helpers/hooks/useForm';
import fieldErrors from 'helpers/fieldErrors';

function OprecForm() {
	const [errors, seterrors] = useState(null);

	const ERRORS = fieldErrors(errors);
	return (
		<div>
			<section className='flex flex-col mt-8'>
				<div className='flex items-center pb-24'>
					<div className='w-full md:w-4/6 xl:w-5/12 sm:w-6/12'>
						<Select
							labelName='Choose Course'
							name='profession'
							value={''}
							fallbackText='Select your focus'
							onClick={''}>
							<option value='Web Developer'>Web Designer</option>
						</Select>
						<div className='flex justify-center'>
							<button
								type='submit'
								className='w-full h-10 bg-blue-800 hover:bg-blue-700 transition-all duration-200 focus:outline-none shadow-inner text-white py-2 rounded-md'>
								Choose!
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className='flex flex-col md:w-4/6 xl:w-5/12 sm:w-6/12'>
				<div className='flex items-center pb-10'>
					<h1 className='text-xl'>Selected Courses</h1>
				</div>
				<div className='flex flex-col'>
					<table className='table-fixed'>
						<thead>
							<tr>
								<th className='w-1/12 text-left'>No</th>
								<th className='w-1/2 text-left'>Title</th>
								<th className='w-1/4 text-right'>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr className='bg-blue-200'>
								<td>1</td>
								<td>
									Bahasa Pemrograman II (Sistem Informasi)
								</td>
								<td className='text-right'>932</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}

export default withRouter(OprecForm);
