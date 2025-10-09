import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const navLinks = [
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#service" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Reviews", href: "#reviews" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div
			style={{
				background: `linear-gradient(
					to right,
					#161641 0%,
					#232369 25%,
					#2f2f8d 50%,
					#232369 75%,
					#161641 100%
				)`,
			}}
			className="text-white sticky top-0 z-[100] border-b-2 border-b-gray-900/70 shadow-border flex items-center justify-between py-4 px-[5vw] md:px-[8vw] lg:px-[10vw]"
		>
			<div className="font-bold">
				<span className="text-[#B94A5B]">ARAFAT</span>
				<span className="max-md:hidden"> HOSSAIN SOBUJ</span>
			</div>

			<div className="hidden md:flex items-center space-x-5 font-semibold text-sm text-base">
				{navLinks.map((link, idx) => (
					<a
						key={idx}
						href={link.href}
						className={`hover:text-[#B94A5B] transition duration-200 `}
					>
						{link.name}
					</a>
				))}
			</div>

			{/* MOBILE HAMBURGER ICON */}
			<div className="md:hidden z-[100]">
				<button
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
					}}
					className="text-white text-3xl cursor-pointer"
				>
					{isMenuOpen ? <IoClose /> : <IoMenu />}
				</button>
			</div>

			{/* MOBILE MENU PANEL (SLIDING) */}
			<div
				className={`
                    fixed top-0 right-0 h-screen w-2/3 bg-[#161641] duration-500 ease-in-out shadow-xl
                    flex flex-col items-center pt-24 space-y-8 md:hidden z-50 transition-transform
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
			>
				{navLinks.map((link, idx) => (
					<a
						key={idx}
						href={link.href}
						onClick={() => {
							setIsMenuOpen(false);
						}}
						className="text-xl font-medium transition duration-200"
					>
						{link.name}
					</a>
				))}
			</div>

			{/* OVERLAY (for closing the menu by clicking outside) */}
			{isMenuOpen && (
				<div
					className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-49"
					onClick={() => {
						setIsMenuOpen(false);
					}}
				></div>
			)}
		</div>
	);
};

export default Navbar;
