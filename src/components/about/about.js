import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
	return(
		<div className="aboutPage">
			<div className="title">
				About
			</div>
			<div className="content">
				<p>Welcome to <span className="picsty">Picsty</span>. We are the number one photo browsing experience on the internet.  Feel free to browse using any search word.
				</p>
			</div>
			<div>
			<Link className="link" to='/images'><button className="button">Let's Browse</button></Link>
			</div>
		</div>
	)
}

export default About