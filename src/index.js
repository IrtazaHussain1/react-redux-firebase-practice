import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// importing redux material.
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './store/reducer/rootReducer'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'

import 'firebase/firestore' // add this to use Firestore

import firebase from './config/fbConfig'
import fbConfig from './config/fbConfig'

// binding layer 
import { Provider, useSelector } from 'react-redux'
// creating store

    // react-redux-firebase config
    const rrfConfig = {
      userProfile: 'users',
      attachAuthIsReady:true,
      useFirestoreForProfile: true
      }

const store = createStore(RootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig),
    )
  );


  const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }

    function AuthIsLoaded({ children }) {
      const auth = useSelector(state => state.firebase.auth)
      if (!isLoaded(auth)) return <div className='container center'>Loading Screen...</div>;
          return children
  }

ReactDOM.render(
<Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
      <App />
    </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
