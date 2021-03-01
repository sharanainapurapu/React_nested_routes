import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from '../reducers/user';


export const store = createStore(userReducer);

function AppConfig({children}) {
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default AppConfig;
