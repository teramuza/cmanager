const initialValue = {
	data : [],
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
  		case 'GET_TEACHERS_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'GET_TEACHERS_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'GET_TEACHERS_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	case 'POST_TEACHER_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'POST_TEACHER_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'POST_TEACHER_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'PATCH_TEACHER_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'PATCH_TEACHER_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'PATCH_TEACHER_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}
	  	case 'DELETE_TEACHER_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'DELETE_TEACHER_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'DELETE_TEACHER_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	
	  	default:
	    	return state;
	   
	}
}

