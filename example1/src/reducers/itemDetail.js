const initialState="Click On Item";
const ItemDetail=(state=initialState,action)=>{
   switch(action.type){
   	 case 'SHOW_DESCRIPTION':
   	 	return action.payload;
   	 default:
   	   return state;
   }
}
export default ItemDetail;