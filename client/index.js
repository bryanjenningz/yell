import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import update from './reducers'

const store = createStore(update, applyMiddleware(thunk))
const root = <Provider store={store}><App /></Provider>
const rootEl = document.querySelector('#root')
render(root, rootEl)
