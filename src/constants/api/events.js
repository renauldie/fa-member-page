import axios from 'src/configs/axios';
export default {
	all: () => axios.get(`/events`).then((res) => res.data),
	details: (id) => axios.get(`/events/${id}`).then((res) => res.data),
};
