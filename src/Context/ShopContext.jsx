import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  cartItems: [],
}
//step1 createcontext
export const ProductContext = createContext(initialState)

const ShopContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function addToCart(id) {
    dispatch({
      type: 'ADD_TOCART',
      payload: id,
    })
  }

  function removeFromCart(id) {
    dispatch({
      type: 'DELETE_FROMCART',
      payload: id,
    })
  }

  return (
    <ProductContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ShopContext
