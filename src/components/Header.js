import React from 'react'

const Header = () => {
	return (
			<div class="main-container w-100 sm-block">
			<div class="top-menus bg-blue  py-3">
				<div class="max-w-screen-lg mx-auto flex justify-end">
					<div class="only bg-blue text-white w-100 text-xs flex justify-between w-1/3 items-center">
						<a href="#">Support & FAQs</a>
						<a href="#">1233 877 2423</a>
						<a href="#">Contact & Sales</a>
					</div>
				</div>
			</div>
			<div class="menu shadow-md">
				<div class="max-w-screen-lg mx-auto flex justify-between items-center">
					<div class="logo play-font uppercase text-5xl">
						Logo
					</div>

					<div class="second justify-between grey">
						<a class="active mr-4 drop">Solutions</a>
						<a class="mr-4 drop">Features</a>
						<a class="mr-4">Plans and pricing</a>
						<a class="mr-4 drop">Resources</a>
					</div>

					<div class="third">
						<a class="join mr-4 blue">Join a meeting</a>
						<a class="host mr-4 blue drop">Host a meeting</a>
					</div>

					<div class="fourth">
						<a href="" class="sign mr-3">Sign In</a>
						<a href="" class=" register bg-orange px-3 py-3 rounded-md text-white">Register It's free</a>
					</div>
				</div>
			</div>

	</div>
	)
}

export default Header;