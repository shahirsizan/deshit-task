import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

import heroPortrait from "../assets/heroPortrait.png";

const Hero = () => {
	return (
		<div className="px-[5vw] md:px-[8vw] lg:px-[10vw]">
			<div className="grid grid-cols-2">
				<div className="flex flex-col space-y-5">
					<p>
						I am <span className="">ARAFAT</span> HOSSAIN SOBUJ
					</p>

					<p className="bg-gray-600 text-white p-3">
						Full-Stack Mobile App Developer | 9+ Years Experience
						<br />
						Expert in Flutter & Node.js | 40+ Successful Projects
						Delivered
					</p>

					<p>
						Maximize Your Business Potential with Custom Web
						Development Solutions!{" "}
					</p>

					<p>
						Take your business to the next level with custom web
						development solutions.
					</p>

					<div className="flex items-center">
						<button className="flex items-center gap-2 border px-3 py-2 text-white">
							Get in touch
							<span>
								<FaArrowRight />
							</span>
						</button>
						<button className="flex items-center gap-2 border px-3 py-2 text-white">
							Download CV{" "}
							<span>
								<FaArrowRight />
							</span>
						</button>
					</div>
				</div>

				<div className="w-full rounded-full overflow-hidden">
					<img src={heroPortrait} className="w-full h-auto" />
				</div>
			</div>

			<div className="flex items-center justify-around text-white px-4 py-3 rounded-2xl min-h-[100px] bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF]">
				<div>
					<CiCalendar />
					9+ <br />
					Years Of Experience
				</div>
				<div>
					<CiLaptop />
					40+ <br />
					Project Completed
				</div>
				<div>
					<FaRegSmile />
					300+ <br />
					Satisfied Client
				</div>
				<div>
					<SlBadge />
					18+ <br />
					Award Winner
				</div>
			</div>
		</div>
	);
};

export default Hero;
