import { combineReducers } from 'redux';

// import todos from './todospath'
import auth from './auth'
import teachers from './teachers'
import students from './students'
import courses from './courses'

const appReducer = combineReducers({
	//todos here
	auth,
	teachers,
	students,
	courses
});

export default appReducer;