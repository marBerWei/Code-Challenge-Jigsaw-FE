// Presentational Header For Top of Page

import React from 'react'
import Name from './Name'
import ImageSearch from './ImageSearch'
import Filter from './Filter'

const Header = () => {
	return(
	  <div className="header">
		  <Name />
		  <ImageSearch/>
		  <Filter />
	  </div>
	)
}

export default Header