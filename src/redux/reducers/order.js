import actionsTypes from '../actions/actionsTypes'
const initOrder = {
    order:[
        {
            id:0,
            price:23,
            content:'商品'
        },
        {
            id:1,
            price:24,
            content:'商品1'
        }
    ],
    num:0
}

const order = (state = initOrder,action) => {
    console.log('order',state)
    switch (action.type) {
        case actionsTypes.ORDER_SETNUM:
            state.num +=2
            break;
        default:
            return state
    }
    return {...state}
}
export default order
