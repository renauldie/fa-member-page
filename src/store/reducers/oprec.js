import {
	FETCH_COURSES,
	STATUS_COURSES,
	MESSAGE_COURSES,
} from 'constants/types/oprec';

const initialState = {
	data: {},
	total: 0,
	status: 'idle',
	message: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case STATUS_COURSES:
			return {
				...state,
				status: action.payload,
			};

		case FETCH_COURSES:
			return {
				...state,
				data:
					action.payload?.reduce?.((acc, item) => {
						acc[item.id] = item;
						return acc;
					}, {}) ?? {},
				total: action.payload?.length ?? 0,
				status: 'ok',
			};

		case MESSAGE_COURSES:
			return {
				...state,
				message: action.payload,
				status: 'error',
			};

		default:
			return state;
	}
}