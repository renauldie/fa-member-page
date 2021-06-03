import {
	FETCH_COURSES,
	STATUS_COURSES,
	MESSAGE_COURSES,
} from 'constants/types/courses';

export const statusCourses = (status) => ({
	type: STATUS_COURSES,
	payload: status,
});

export const fetchCourses = (courses) => ({
	type: FETCH_COURSES,
	payload: courses,
});

export const messageCourse = (message) => ({
	type: MESSAGE_COURSES,
	payload: message,
});
