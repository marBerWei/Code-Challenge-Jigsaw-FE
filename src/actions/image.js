function fetchingImages() {
  return {
    type: "FETCHING_IMAGES"
  }
}

export function addComment(comment, id){
  return {
    type:"ADD_COMMENT",
    payload: comment,
    id: id
  }
}

export function searchTerm(term){
  return {
    type: "SEARCH-TERM",
    payload: term
  }
}

export function filterImages(filter) {
  return {
    type: "FILTER_IMAGES",
    payload: filter
  }
}

export function currentList(images) {
  return {
    type: "CURRENT_LIST",
    payload: images
  }
}

function fetchedImages(images) {
  return {
    type: "FETCHED_IMAGES",
    payload: images
  }
}

export function fetchImages() {
  return function(dispatch) {
    dispatch(fetchingImages())
    fetch(`https://api.imgur.com/3/gallery/search?q=everything`, {
        method: 'get',
        headers: {
          "Authorization": 'Client-ID 449d22197eed5ec'
        }
        })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data)
        const images = json.data
        dispatch(fetchedImages(images))
      })
  }
}


export function searchImages(title) {
  return function (dispatch) {
    dispatch(fetchingImages())
    fetch(`https://api.imgur.com/3/gallery/search?q=${title}`, {
        method: 'get',
    		headers: {
    			"Authorization": 'Client-ID 449d22197eed5ec'
        }
    		})
      .then((res) => res.json())
      .then((json) => {
        if(json) {
          console.log(json)
        } else {
          console.log("no data")
        }

        dispatch(fetchedImages(json.data))
      })
  }

}