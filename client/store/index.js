import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import bubble from './bubble'
import song from './song'
import leaderboard from './leaderboard'

const reducer = combineReducers({user, bubble, song, leaderboard})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

//original store
// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
//  )

export default store
export * from './user'
export * from './bubble'
export * from './song'
export * from './leaderboard'
