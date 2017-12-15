function rootReducer(state = { isFetching: false, list: []}, action) {
  switch (action.type) {
    case "FETCHED_IMAGES":
      action.payload.forEach(obj => obj.comments = [{author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12 GMT-0500 (EST)'},
      {author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12 GMT-0500 (EST)'}])
      return Object.assign({}, state, {list: action.payload, isFetching: false} )
    case "FETCHING_IMAGES":
      return Object.assign({}, state, { isFetching: true})
    default:
      return state
  }
}


export default rootReducer
