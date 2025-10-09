import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SkillCards from "./SkillCards";
import SkillsList from "./SkillsList";
import ScrollFadeIn from "./ScrollFadeIn";

const MySkills = () => {
	return (
		<div id="skills" className="mt-24 scroll-mt-12 pt-12 pb-12">
			{/* TITLE */}
			<p className=" text-white text-4xl font-[600] flex items-center gap-3 mb-8 px-[5vw] md:px-[8vw] lg:px-[10vw]">
				<span className="text-black">
					<IoIosArrowForward className="w-14 h-14 text-white" />
				</span>{" "}
				My Skills
			</p>

			<div className="flex flex-col md:flex-row p-3 gap-7 bg-[#6E6E6E30]/20 px-[5vw] md:px-[8vw] lg:px-[10vw]">
				<SkillCards />

				<SkillsList />
			</div>
		</div>
	);
};

export default MySkills;
