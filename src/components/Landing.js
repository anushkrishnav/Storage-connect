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
		<section>
			<div className="header">
				<h2 className="logo">Your Logo</h2>
				<ul>
					<li>
						<Link href="/" className="active">Home</Link>
					</li>
					<li>
						<Link href="/NewWarehouse">Warehouses</Link>
					</li>
					<li>
						<Link href="/">Profile</Link>
					</li>
                    <li>
						<Link href="/Signup">Sign Up</Link>
					</li>
					{/* <li>
						<Link href="#">Our Work</Link>
					</li>
					<li>
						<Link href="#">Portfolio</Link>
					</li>
					<li>
						<Link href="#">Contact</Link>
					</li> */}
				</ul>
			</div>
			<div class="bannerText">
				<h2>Think Creative</h2><br></br>
				<h3>And Make Innovative Design</h3>
				<p>Lorem ipsum carrots, enhanced rebates, but they do occaecat
                                labor and in pain, and vitality, so that at some important things to. Over the years, I will come,
                                aliquip out of her the advantage of exercise, so that stimulus efforts if the school district who has nostrud
                                products. Duis has been criticized in the pleasure of the want to be a pain in the cupidatat
                                cillum produces no resultant et dolore magna flee. Excepteur blinds are not cupidatat
                                excepteur are to blame for those services that is soft minds to abandon efforts. </p>
				<Link href="/">Read More</Link>
			</div>
			<img src="bulb.jpg" class="bulb" alt="**"></img>
			  {/*<ul class="sci">
				<li><a href="#"><i class="fa fa-facebook"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter"></i></a></li>
				<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="#"><i class="fa fa-instagram"></i></a></li>
			  </ul>
			  			  */}
			<div class="element1"></div>
			<div class="element2"></div>
		</section>
    </div>
  )
}
