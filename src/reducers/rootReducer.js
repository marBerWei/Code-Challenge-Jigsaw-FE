function rootReducer(
  state = { 
    isFetching: false,
    currentList: [], 
    originalList: [], 
    searchTerm: 'puppies', 
    filter: '',
  }, action) 
  {
  switch (action.type) {
    case "SEARCH-TERM":
      return Object.assign({}, state, { searchTerm: action.payload})
  	case "FILTER_IMAGES":
  	  return Object.assign({}, state, { filter: action.payload})
    case "FETCHED_IMAGES":
      action.payload.forEach(obj => obj.comments = [
      		{author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12'},
      		{author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12'}
      	])
      return Object.assign({}, state, {originalList: action.payload, isFetching: false} )
    case "CURRENT_LIST":
      action.payload.forEach(obj => obj.comments = [
          {author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12'},
          {author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12'}
        ])
      return Object.assign({}, state, {currentList: action.payload} )
    case "FETCHING_IMAGES":
      return Object.assign({}, state, { isFetching: true})
    case "ADD_COMMENT":
      state.currentList[action.payload.imgIndex].comments.push({author:action.payload.author, text:action.payload.text})
    default:
      return state
  }
}


export default rootReducer
