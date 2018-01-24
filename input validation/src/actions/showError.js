const showError=(error)=> {
	 return {
         type:"SHOW_ERROR",
         payLoad:error 
	 }  
}

export default showError;