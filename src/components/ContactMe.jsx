import React from "react";
import { LuJoystick } from "react-icons/lu";
import contactmeImage from "../assets/contactmeImage.jpg";
import { FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
	return (
		<div className="flex items-center gap-5 mt-24 px-[5vw] md:px-[8vw] lg:px-[10vw]">
			<div className="w-1/3 h-full">
				<img
					className="w-full h-full object-cover"
					src={contactmeImage}
				/>
			</div>

			<div className="w-2/3 flex flex-col gap-3">
				<p className="text-white flex items-center gap-2">
					<span className="text-[#B94A5B]">
						<LuJoystick />
					</span>{" "}
					<span className="text-[#B94A5B]">ARAFAT</span> HOSSAIN SOBUJ
				</p>

				<p className="text-white">A Full Stack Web Developer</p>

				<p className="text-gray-300">
					As a Full Stack Web Developer, I am responsible for
					designing and building complete web applications from start
					to finish. This includes creating user interfaces, writing
					server-side code, and managing databases. With my
					comprehensive knowledge of the entire web development
					process, I can efficiently turn ideas into fully functional
					websites or applications.
				</p>

				<button className="w-fit px-3 py-2 rounded-xl text-white flex items-center gap-3 bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF]">
					Contact me{" "}
					<span>
						<FaArrowRight />
					</span>
				</button>
			</div>
		</div>
	);
};

export default ContactMe;
