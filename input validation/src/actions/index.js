const submitForm=(inputText)=> {
	 return {
         type:"FORM_SUBMIT",
         payLoad:inputText 
	 }  
}

export default submitForm;