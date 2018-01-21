const showDescription=(item)=>{
	console.log(item.description);
	return {
		type:"SHOW_DESCRIPTION",
		payload:item.description
	}
}
export default showDescription;