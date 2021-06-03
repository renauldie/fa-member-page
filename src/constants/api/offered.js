import axios from 'configs/axios';

export default {
	getData: (code) => axios.get(`/offered-courses/${code}`),
	joinCourse: (payload) => axios.post('/user-course', payload),
};
