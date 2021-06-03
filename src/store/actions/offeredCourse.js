import {
	FETCH_OFFERED,
	STATUS_OFFERED,
	MESSAGE_OFFERED,
} from 'constants/types/offered';

export const statusOffered = (status) => ({
	type: STATUS_OFFERED,
	payload: status,
});

export const fetchOffered = (course) => ({
	type: FETCH_OFFERED,
	payload: course,
});

export const messageOffered = (message) => ({
	type: MESSAGE_OFFERED,
	payload: message,
});
