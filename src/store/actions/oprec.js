import {
	FETCH_COURSES,
	STATUS_COURSES,
	MESSAGE_COURSES,
} from 'constants/types/oprec';

export const statusCourses = (status) => ({
	type: STATUS_COURSES,
	payload: status,
});

export const fetchCourses = (oprec) => ({
	type: FETCH_COURSES,
	payload: oprec,
});

export const messageCourse = (message) => ({
	type: MESSAGE_COURSES,
	payload: message,
});
