
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from '../Reducers/restaurantReducer'

const reducers = combineReducers({
    restaurantList: restaurantListReducer
})

const middlware = [thunk]

const store = createStore(reducers, applyMiddleware(...middlware));

export default store