import {
	FETCH_OFFERED,
	STATUS_OFFERED,
	MESSAGE_OFFERED,
} from 'constants/types/offered';

const initialState = {
	data: {},
	total: 0,
	status: 'idle',
	message: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case STATUS_OFFERED:
			return {
				...state,
				status: action.payload,
			};

		case FETCH_OFFERED:
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

		case MESSAGE_OFFERED:
			return {
				...state,
				message: action.payload,
				status: 'error',
			};

		default:
			return state;
	}
}
