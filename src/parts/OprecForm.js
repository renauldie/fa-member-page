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
						<Select labelName='Choose Course' name=''></Select>
					</div>
				</div>
			</section>
		</div>
	);
}

export default withRouter(OprecForm);
