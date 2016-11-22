import fetch from 'isomorphic-fetch'

export const increment = () => (dispatch) => {
  dispatch({type: 'INCREMENT_REQUEST'})
  fetch('/api/increment', {method: 'PUT'})
    .then(
      res => {
        if (res.status === 200) {
          dispatch({type: 'INCREMENT_SUCCESS'})
        } else {
          dispatch({type: 'INCREMENT_FAILURE'})
        }
      },
      () => dispatch({type: 'INCREMENT_FAILURE'})
    )
}

export const decrement = () => ({type: 'DECREMENT_SUCCESS'})
