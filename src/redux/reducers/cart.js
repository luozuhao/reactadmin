import actionsTypes from '../actions/actionsTypes'
const initState = {
    cartData: [
        {
            id:1,
            name:'luozuhao'
        },
        {
            id:2,
            name:'luo'
        }
    ],
    count: 0
};
const cart = (state = initState, action) => {
    console.log('actions',action)
    switch (action.type) {
        case actionsTypes.CART_ADD:
            state.count++;
            break;
        case actionsTypes.CART_REDUMENT:
            state.count--;
            break;
        default:
            break
    }
    return {...state}
}
export default cart
