import React from 'react';

import Select from 'components/Form/Select';

export default function OprecForm() {
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
		</div>
	);
}

// export default withRouter(OprecForm);
