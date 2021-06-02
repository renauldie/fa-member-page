import axios from 'configs/axios';

export default {
	myCourse: () => axios.get('/user-course'),
	DelMyCourse: (id) => axios.delete(`/user-course/${id}`),
};
