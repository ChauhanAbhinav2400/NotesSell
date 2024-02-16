const intialState = {
  note:{}
}

 export const CartReducer = (state=intialState,action )=>{
    const {type,payload} = action;
switch(type){
case "SET_CART_DATA":
    return{
        ...state,note:payload
    }
    default: return state;
}
 }