import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";

import img1 from "../assets/projectsImage/1.png";
import img2 from "../assets/projectsImage/2.png";
import img3 from "../assets/projectsImage/3.png";
import img4 from "../assets/projectsImage/4.png";
import img5 from "../assets/projectsImage/5.png";
import img6 from "../assets/projectsImage/6.png";
import img7 from "../assets/projectsImage/7.png";
import img8 from "../assets/projectsImage/8.png";

const MyProjects = () => {
	const projects = [
		{
			id: 1,
			image: img1,
			name: "SCIBAI, Diag. & SNS for veggie",
			desc: "An integrated app that uses AI to instantly solve vegetable health problems by diagnosing over 140 issues. Features a social platform (SNS) for expert gardening advice and user collaboration.",
		},
		{
			id: 2,
			image: img2,
			name: "Transcom Digital",
			desc: "A mobile platform for Transcom Digital, focusing on delivering the brand's priority of value for money and genuine products.",
		},
		{
			id: 3,
			image: img3,
			name: "Job Circular",
			desc: "This app is about all types of job circular, application forms, exam schedule, exam results, any other information about examination and job exam preparation.",
		},
		{
			id: 4,
			image: img4,
			name: "Cinebaz",
			desc: "Cinebaz is an entertainment app where can watch movies, web series and big budget films.",
		},
		{
			id: 5,
			image: img5,
			name: "SBI General Secure",
			desc: "provides information about General insurance performance with a facility to drill down till the branch level.",
		},
		{
			id: 6,
			image: img6,
			name: "কুরআন শিক্ষা (Quran Learning)",
			desc: "এই অ্যাপে ৫ ধাপে কুরআন শেখার জন্য ন্যূনতম যতটুকু জানা প্রয়োজন, তা সহজ সরল ভাষায় মূল কুরআন থেকে উদাহরণসহ আলোচনা করা হয়েছে",
		},
		{
			id: 7,
			image: img7,
			name: "Swoop News",
			desc: "If you want to stay in the know, Swoop News is perfect for you. We'll keep you up-to-date with the most significant business, economic, political and cultural developments.",
		},
		{
			id: 8,
			image: img8,
			name: "Swoop News",
			desc: "The Shoply is a micro-merchant e-commerce app. The goal is to bring all small shops around the country in one platform.",
		},
	];

	return (
		<div
			id="projects"
			className="mt-24 scroll-mt-12 px-[5vw] md:px-[8vw] lg:px-[10vw]"
		>
			<p className=" text-white text-4xl font-[600] flex items-center gap-3 mb-4">
				<span className="text-black">
					<IoIosArrowForward className="w-14 h-14 text-white" />
				</span>{" "}
				My Recent Projects
			</p>

			<p className="py-6 text-[#DBB9B9BA] px-5">
				I want to become a skilled full stack developer, proficient in
				both frontend and backend technologies. My goal is to build
				visually appealing and high-performing web applications.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-3 md:gap-8">
				{projects.map((project, idx) => {
					return <ProjectCard project={project} ids={idx} />;
				})}
			</div>
		</div>
	);
};

export default MyProjects;
