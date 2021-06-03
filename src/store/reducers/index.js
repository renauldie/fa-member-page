import { combineReducers } from 'redux';

import users from './users';
import oprec from './myCourse';
import offered from './offeredCourse'

export default combineReducers({
	users,
	oprec,
	offered,
});
