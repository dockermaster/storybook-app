import React from 'react';
import User from '../components/connectedComponents/user/user'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../reducers';
const store = createStore(allReducers)

export default {
    title: 'User',
    component: User
}

export const MyUser = () => (<Provider store={store}><User></User></Provider>)