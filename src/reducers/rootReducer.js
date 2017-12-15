function rootReducer(
  state = { 
    isFetching: false, 
    list: [], 
    searchTerm: 'everything', 
    filter: [{isFiltered: false, filterType:''}],
    comment:[]
  }, action) 
  {
  switch (action.type) {
    case "SEARCH-TERM":
      return Object.assign({}, state, { searchTerm: action.payload})
  	case "FILTER_IMAGES":
  	  return Object.assign({}, state, { filter: [{isFiltered: true, filterType: action.payload}]})
    case "FETCHED_IMAGES":
      action.payload.forEach(obj => obj.comments = [
      		{author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12'},
      		{author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12'}
      	])
      return Object.assign({}, state, {list: action.payload, isFetching: false} )
    case "FETCHING_IMAGES":
      return Object.assign({}, state, { isFetching: true})
    case "ADD_COMMENT":
      return Object.assign({}, state, {comment: [action.payload]})
    default:
      return state
  }
}


export default rootReducer
