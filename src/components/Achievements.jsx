import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

const Achievements = () => {
	return (
		<div className="px-[5vw] md:px-[8vw] lg:px-[10vw]">
			<div
				className="fadeInAnimation mt-24 flex flex-col md:flex-row gap-4 md:gap-6 tracking-tighter sm:tracking-[0.3rem] md:tracking-normal 
        items-center md:justify-between text-white px-3 py-5 md:py-6 md:px-6 rounded-3xl bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF]
        "
			>
				<div className="flex flex-col space-y-1 md:space-y-3 pb-6 items-center md:items-start">
					<CiCalendar className="max-md:hidden text-3xl" />
					<span className="text-xl md:text-3xl font-bold">9+</span>
					<span className="font-[700] text-2xl sm:text-3xl md:text-xl text-[#FFFFFF87]">
						Years of Experience
					</span>
				</div>
				<div className="flex flex-col space-y-1 md:space-y-3 pb-6 items-center md:items-start ">
					<CiLaptop className="max-md:hidden text-3xl" />
					<span className="text-xl md:text-3xl font-bold">40+ </span>
					<span className="font-[700] text-2xl sm:text-3xl md:text-xl text-[#FFFFFF87]">
						Projects Completed
					</span>
				</div>
				<div className="flex flex-col space-y-1 md:space-y-3 pb-6 items-center md:items-start">
					<FaRegSmile className="max-md:hidden text-3xl" />
					<span className="text-xl md:text-3xl font-bold">300+ </span>
					<span className="font-[700] text-2xl sm:text-3xl md:text-xl text-[#FFFFFF87]">
						Satisfied Client
					</span>
				</div>

				<div className="flex flex-col space-y-1 md:space-y-3 pb-6 items-center md:items-start">
					<SlBadge className="max-md:hidden text-3xl" />
					<span className="text-xl md:text-3xl font-bold">18+ </span>
					<span className="font-[700] text-2xl sm:text-3xl md:text-xl text-[#FFFFFF87]">
						Awards Won
					</span>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
