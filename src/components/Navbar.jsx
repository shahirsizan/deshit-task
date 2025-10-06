import React from "react";

const Navbar = () => {
	return (
		<div
			style={{
				background: `linear-gradient(
					to right,
					#131339 0%,
					#232369 25%,
					#35359f 50%,
					#232369 75%,
					#060606 100%
				)`,
			}}
			className="text-white sticky top-0 border-b-2 flex items-center justify-between py-3 px-[5vw] md:px-[8vw] lg:px-[10vw]"
		>
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
