//Combinar vários Reducers dentro de um único estado disponível da aplicação, que é o rootReducer
import { combineReducers } from 'redux'
import { cart } from './cart/reducer'

export default combineReducers({
  cart,
})