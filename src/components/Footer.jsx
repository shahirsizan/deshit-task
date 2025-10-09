import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
	const [hovered1, setHovered1] = useState(false);

	return (
		<div
			id="contact"
			className="mt-20 scroll-mt-14 pb-12 px-[5vw] md:px-[8vw] lg:px-[10vw] text-[#EDE5DB] bg-[#000000]"
		>
			<p className="text-center text-3xl md:text-5xl lg:text-8xl font-[700] text-[#EDE5DB] pt-5 pb-3 md:pt-6 md:pb-6">
				LET'S CONNECT!
			</p>

			<div className="flex flex-col lg:flex-row gap-10 text-white">
				{/* FORM */}
				<div className="lg:flex-1/2 p-5">
					<div className="p-4 lg:p-8 rounded-lg mx-auto bg-[#212025] border-2 border-amber-700/20">
						<form className="flex flex-col gap-2 lg:gap-4 border-none">
							{/* NAME */}
							<input
								type="text"
								placeholder="Name"
								className="bg-[#27262B] text-white placeholder-gray-400 p-2 lg:p-3 outline-none focus:ring-2 focus:ring-[#6A4FFF]/40 rounded-2xl"
							/>

							{/* EMAIL */}
							<input
								type="email"
								placeholder="Email"
								className="bg-[#27262B] text-white placeholder-gray-400 p-2 lg:p-3 outline-none focus:ring-2 focus:ring-[#6A4FFF]/40 rounded-2xl"
							/>

							{/* PHONE */}
							<input
								type="tel"
								placeholder="Phone"
								className="bg-[#27262B] text-white placeholder-gray-400 p-2 lg:p-3 outline-none focus:ring-2 focus:ring-[#6A4FFF]/40 rounded-2xl"
							/>

							{/* MESSAGE */}
							<textarea
								rows="4"
								placeholder="Please type your message here..."
								className="bg-[#27262B] text-white placeholder-gray-400 p-2 lg:p-3 outline-none focus:ring-2 focus:ring-[#6A4FFF]/40 rounded-lg"
							></textarea>

							{/* BUTTON */}
							<motion.button
								className="px-3 py-2 lg:px-8 lg:py-3 w-fit font-semibold text-sm lg:text-md border-2 border-gray-800 overflow-hidden bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF] rounded-md cursor-pointer"
								initial={{}}
								whileHover={{
									scale: 1.05,
								}}
								transition={{ duration: 0.2 }}
								onMouseEnter={() => {
									setHovered1(true);
								}}
								onMouseLeave={() => {
									setHovered1(false);
								}}
							>
								<motion.span
									initial={{ y: 0 }}
									whileHover={{
										transition: {
											type: "spring",
											stiffness: 100,
											damping: 10,
										},
									}}
									className=" z-10 flex items-center gap-2"
								>
									{/* LEFT ICON */}
									<div className="w-3 flex justify-center items-center">
										<AnimatePresence>
											{!hovered1 && (
												<motion.div
													initial={{ x: -20 }}
													animate={{ x: 0 }}
													exit={{ x: -120 }}
													transition={{
														duration: 0.2,
													}}
												>
													<FaArrowRight />
												</motion.div>
											)}
										</AnimatePresence>
									</div>{" "}
									{/* TEXT */}
									Send Message
									{/* RIGHT ICON */}
									<div className="w-3 flex justify-center">
										<AnimatePresence>
											{hovered1 && (
												<motion.div
													initial={{ x: 120 }}
													animate={{ x: 0 }}
													exit={{ x: 120 }}
													transition={{
														duration: 0.2,
													}}
												>
													<FaArrowRight />
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</motion.span>
							</motion.button>
						</form>
					</div>
				</div>

				{/* TEXT DATA */}
				<div className="lg:flex-1/2 flex flex-col space-y-2 lg:space-y-4">
					<div className="flex flex-col items-center justify-center">
						<p className="font-[700] text-[30px]">Contact us</p>

						<hr className="text-[#D9D9D9B2]/60 border-2 w-2/3" />
					</div>

					<p className="text-[#8F8D8D] text-center lg:text-left">
						Let's discuss how I can leverage my expertise to help
						you build your next great application.
					</p>

					<div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-3 text-sm lg:text-md">
						<p className="flex items-center lg:items-start gap-2 text-[#8F8D8D] font-[700] ">
							<CiMail className="text-amber-500" />{" "}
							<span>CONTACT@COMPANY.COM</span>
						</p>

						<hr className="text-[#D9D9D9B2]/60 border-2 w-2/3" />

						<p className="flex items-center lg:items-start gap-2 text-[#8F8D8D] font-[700]">
							<CiPhone className="text-amber-500" />{" "}
							<span>(123)456-789</span>
						</p>

						<hr className="text-[#D9D9D9B2]/60 border-2 w-2/3" />

						<p className="flex items-center lg:items-start gap-2 text-[#8F8D8D] font-[700]">
							<FiMapPin className="text-amber-500" />{" "}
							<span>
								794 MCALLISTER ST,
								<br /> SAN FRANCISGO,84102
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
