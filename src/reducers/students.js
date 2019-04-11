const initialValue = {
	data : [],
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
  		case 'GET_STUDENTS_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'GET_STUDENTS_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'GET_STUDENTS_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	case 'POST_STUDENT_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'POST_STUDENT_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'POST_STUDENT_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'PATCH_STUDENT_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'PATCH_STUDENT_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'PATCH_STUDENT_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'DELETE_STUDENT_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'DELETE_STUDENT_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'DELETE_STUDENT_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	
	  	default:
	    	return state;
	   
	}
}

