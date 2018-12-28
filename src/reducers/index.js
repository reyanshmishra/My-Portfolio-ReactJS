import { fromJS } from 'immutable'

const initialState = fromJS({
  tag: fromJS({})
})

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'AAA':
      return state

    default:
      return state
  }
}

export default rootReducer
