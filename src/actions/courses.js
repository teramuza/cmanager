import axios from 'axios';

import '../conf';

export const getCourses = (token) => {
	return{
		type : 'GET_COURSES',
		payload : axios.get(`${apiUrl}/courses`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const getCoursesStudents = (token, id) => {
	return{
		type : 'GET_COURSES_STUDENTS',
		payload : axios.get(`${apiUrl}/courses/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const postCourses = (token, body) => {
	return{
		type : 'POST_COURSES',
		payload : axios.post(`${apiUrl}/courses`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const addToCourses = (token, body) => {
	return{
		type : 'ADD_TO_COURSES',
		payload : axios.post(`${apiUrl}/courses/add`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const patchCourses = (token, body, id) => {
	return {
		type : 'PATCH_COURSES',
		payload : axios.patch(`${apiUrl}/courses/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const removeFromCourses = (token, id) => {
	return {
		type : 'REMOVE_FROM_COURSES',
		payload : axios.delete(`${apiUrl}/courses/remove/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const deleteCourses = (token, id) => {
	return {
		type : 'DELETE_COURSES',
		payload : axios.delete(`${apiUrl}/courses/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}