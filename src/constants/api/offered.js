import axios from 'configs/axios';

export default {
	getData: (code) => axios.get(`/offered-courses/${code}`),
	joinCourse: () => axios.post('/user-course/'),
};
