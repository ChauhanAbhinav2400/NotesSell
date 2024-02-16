import {notesData} from "../notesData";

 export const getCartData = (note)=>{
    return async (dispatch,getState)=>{
dispatch(setCartData(note))
    }
}

const setCartData = (note)=>{
return{
    type:"SET_CART_DATA",
    payload:note
}
}















