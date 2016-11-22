import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import update from './reducers'

const store = createStore(update)
const root = <Provider store={store}><App /></Provider>
const rootEl = document.querySelector('#root')
render(root, rootEl)
