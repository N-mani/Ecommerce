import data from '../Pages/data.json'

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TOCART':
      return {
        ...state,
        cartItems: [...new Set([...state.cartItems, data[action.payload]])],
      }
    case 'DELETE_FROMCART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}
