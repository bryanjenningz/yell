import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

let App = ({count, increment, decrement}) =>
  <div className="text-center">
    <h2>{count}</h2>
    <div className="btn-group">
      <button className="btn btn-default" onClick={decrement}>-</button>
      <button className="btn btn-default" onClick={increment}>+</button>
    </div>
  </div>

App = connect(count => ({count}), {...actions})(App)

export default App
