import React from 'react';
import Link from '@material-ui/core/Link';
import '../Landing.css';

export default function Landing() {
  return (
    <div>
      <div className="open">
			<div className="layer"></div>
			<div className="layer"></div>
	  </div>
			<div class="bannerText">
				<h2>WereHouse</h2><br></br>
				<h3>Finding the Space you need</h3>
				<p>Powered by community and awesome neighbours around you</p>
				<Link href="/">Read More</Link>
			</div>
			{/* <img src="bulb.jpg" class="bulb" alt="**"></img> */}
			  {/*<ul class="sci">
				<li><a href="#"><i class="fa fa-facebook"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter"></i></a></li>
				<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="#"><i class="fa fa-instagram"></i></a></li>
			  </ul>
			  			  */}
			<div class="element1"></div>
			<div class="element2"></div>
    </div>
  )
}
