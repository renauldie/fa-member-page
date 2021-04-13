import { useState } from 'react';

export default (initialValues) => {
	const [state, setState] = useState(initialValues);

	return [
		state,
		(e) => {
			console.log(e.target.name);
			setState({
				...state,
				[e.target.name]: e.target.value,
			});
		},
		(newState) => {
			setState({
				...state,
				...newState,
			});
		},
	];
};
