import axios from 'axios';

import '../conf';

export const getStudents = (token) => {
	return{
		type : 'GET_STUDENTS',
		payload : axios.get(`${apiUrl}/students`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const postStudent = (token, body) => {
	return{
		type : 'POST_STUDENT',
		payload : axios.post(`${apiUrl}/student`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const patchStudent = (token, body, id) => {
	return {
		type : 'PATCH_STUDENT',
		payload : axios.patch(`${apiUrl}/student/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}

export const deleteStudent = (token, id) => {
	return {
		type : 'DELETE_STUDENT',
		payload : axios.delete(`${apiUrl}/student/${id}`,
			{ headers:
				{ Authorization : `Bearer ${token}` }
			}
		)
	}
}