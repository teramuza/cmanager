import axios from 'axios';

import '../conf';

export const getTeachers = (token) => {
	return{
		type : 'GET_TEACHERS',
		payload : axios.get(`${apiUrl}/teachers`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const postTeacher = (token, body) => {
	return{
		type : 'POST_TEACHER',
		payload : axios.post(`${apiUrl}/teacher`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const patchTeacher = (token, body, id) => {
	return {
		type : 'PATCH_TEACHER',
		payload : axios.patch(`${apiUrl}/teacher/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const deleteTeacher = (token, id) => {
	return {
		type : 'DELETE_TEACHER',
		payload : axios.delete(`${apiUrl}/teacher/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}