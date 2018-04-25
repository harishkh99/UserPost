import React from 'react';
import ReactDOM from 'react-dom';
import UserPostsContainer from './container/UserPostsContainer';
import { Provider } from 'react-redux'
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <UserPostsContainer/>
    </Provider>, 
    document.getElementById('app')
);
