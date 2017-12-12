function rootReducer(state = { isFetching: false, list: []}, action) {
  switch (action.type) {
    case "FETCHED_IMAGES":
      return Object.assign({}, state, {list: action.payload, isFetching: false} )
    case "FETCHING_IMAGES":
      return Object.assign({}, state, { isFetching: true})
    default:
      return state
  }
}


export default rootReducer
