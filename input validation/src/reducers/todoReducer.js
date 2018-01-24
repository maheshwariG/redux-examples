const initialState="Please Enter The Text";
const todoReducer=(state=initialState,action)=>{

	 switch(action.type) {
        case 'FORM_SUBMIT':
        	return action.payLoad
        case 'SHOW_ERROR':
            return action.payLoad
        default:
        	return state;
	 }

}

export default todoReducer;