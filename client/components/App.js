import React from 'react'
import {connect} from 'react-redux'
import {getCount, getCountError} from '../reducers'
import * as actions from '../actions'

let App = ({count, error, increment, decrement, incrementError}) =>
  <div className="text-center">
    <h2>{count}</h2>
    {error ? <h3>{error}<button className="btn btn-default" onClick={increment}><i className="glyphicon glyphicon-refresh" /></button></h3> : null}
    <div className="btn-group">
      <button className="btn btn-default" onClick={decrement}>-</button>
      <button className="btn btn-default" onClick={increment}>+</button>
    </div>
    <div>
      <button className="btn btn-default" onClick={incrementError}>DO NOT PRESS</button>
    </div>
  </div>

App = connect(
  state => ({
    count: getCount(state),
    error: getCountError(state),
  }),
  {...actions}
)(App)

export default App
