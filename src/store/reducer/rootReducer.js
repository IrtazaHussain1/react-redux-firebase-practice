import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { irebaseReducer, firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth: authReducer,
    project:projectReducer,
    firestore:firestoreReducer, 
    firebase:firebaseReducer, 
})

export default RootReducer