const initialValue = {
	data : [],
	students: [],
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
  		case 'GET_COURSES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'GET_COURSES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'GET_COURSES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	case 'GET_COURSES_STUDENTS_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'GET_COURSES_STUDENTS_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			students : action.payload.data
	  		}

	  	case 'GET_COURSES_STUDENTS_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'POST_COURSES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'POST_COURSES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'POST_COURSES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'ADD_TO_COURSES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'ADD_TO_COURSES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'ADD_TO_COURSES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'PATCH_COURSES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'PATCH_COURSES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'PATCH_COURSES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'REMOVE_FROM_COURSES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'REMOVE_FROM_COURSES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'REMOVE_FROM_COURSES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'DELETE_COURSES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'DELETE_COURSES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'DELETE_COURSES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	default:
	    	return state;
	   
	}
}