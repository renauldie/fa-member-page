import axios from 'configs/axios';

export default {
	getData: (code) => axios.get(`/offered-courses/${code}`),
	// getData: (code) => axios.get(`/offered-courses/${code}`).then((res) => res.data),
	joinCourse: (id) => axios.post('/user-course', {id: id}),
	myCourse: () => axios.get('/user-course'),
	DelMyCourse: (id) => axios.delete(`/user-course/${id}`),
};
