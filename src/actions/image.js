function fetchingImages() {
  return {
    type: "FETCHING_IMAGES"
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
    fetch(`https://api.imgur.com/3/gallery/search?q=everything?`, {
        method: 'get',
        headers: {
          "Authorization": 'Client-ID 449d22197eed5ec'
        }
        })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data)
        const images = json.data.slice(0,20)
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
        
        const images = json.data.slice(0,40)
        dispatch(fetchedImages(images))
      })
  }

}