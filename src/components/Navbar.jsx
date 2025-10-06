import React from "react";

const Navbar = () => {
	return (
		<div className="border-b-2 flex items-center justify-between py-3 px-[5vw] md:px-[8vw] lg:px-[10vw]">
			<div>
				<span className="text-[#B94A5B]">ARAFAT</span> HOSSAIN SOBUJ
			</div>
			<div className="flex items-center gap-2">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#service">Service</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	);
};

export default Navbar;
