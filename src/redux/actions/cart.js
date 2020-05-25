import actionsTypes from './actionsTypes'

const add = (id) =>{
    return {
        type:actionsTypes.CART_ADD,
        payload:{
            id
        }
    }
}

const redument = (id) =>{
    return {
        type:actionsTypes.CART_REDUMENT,
        payload:{
            id
        }
    }
}
const redumentAysync = (id)=>{
    return (dispatch)=>{
       setTimeout(()=>{
           dispatch(redument(id))
       },300)
    }
}
export {
    add,
    redument,
    redumentAysync
}
