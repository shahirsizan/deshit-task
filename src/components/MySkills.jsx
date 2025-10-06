import React from "react";
import { IoIosExit } from "react-icons/io";

import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import shadcnlogo from "../assets/shadcn-logo.png";
import tailwindcss from "../assets/tailwindcss.png";
import git from "../assets/git.png";
import mongodb from "../assets/mongodb.png";
import vercel from "../assets/vercel.png";
import postman from "../assets/postman.png";

const MySkills = () => {
	const skills = [
		{ id: 1, name: "javascript", image: javascript },
		{ id: 2, name: "nodejs", image: nodejs },
		{ id: 3, name: "express", image: express },
		{ id: 4, name: "reactjs", image: reactjs },
		{ id: 5, name: "shadcnlogo", image: shadcnlogo },
		{ id: 6, name: "tailwindcss", image: tailwindcss },
		{ id: 7, name: "git", image: git },
		{ id: 8, name: "mongodb", image: mongodb },
		{ id: 9, name: "vercel", image: vercel },
		{ id: 10, name: "postman", image: postman },
	];

	return (
		<div className="mt-24 pt-12 pb-12">
			<p className="text-white text-[28px] font-[600] flex items-center gap-3 mb-8 px-[5vw] md:px-[8vw] lg:px-[10vw]">
				<span className="text-black">
					<IoIosExit className="w-12 h-12" />
				</span>{" "}
				My Skills
			</p>

			<div className="flex p-3 gap-5 bg-[#6E6E6E30]/80 px-[5vw] md:px-[8vw] lg:px-[10vw]">
				<div className="w-1/2 bg-[#303030] grid grid-cols-5 gap-5 p-6 rounded-xl">
					{skills.map((skill, idx) => {
						return (
							<div
								key={idx}
								className="flex items-center justify-center"
							>
								<img
									src={skill.image}
									className="w-12 rounded-2xl overflow-hidden"
								/>
							</div>
						);
					})}
				</div>

				<div className="w-1/2 bg-[#303030] flex flex-col space-y-3 p-2 rounded-xl">
					<div className="flex flex-col gap-5 text-white p-3">
						<div className="border border-gray-500 rounded-sm p-4">
							<ul className="list-disc ml-5 ">
								<li>
									Front-End:{" "}
									<span className="text-white/40 font-semibold">
										HTML, CSS, JavaScript
									</span>{" "}
								</li>
								<li>
									Libraries:{" "}
									<span className="text-white/40 font-semibold">
										{" "}
										React
									</span>
								</li>
								<li>
									CSS Libraries:{" "}
									<span className="text-white/40 font-semibold">
										{" "}
										Tailwind, Shadcn/ui
									</span>
								</li>
								<li>
									Version Control:{" "}
									<span className="text-white/40 font-semibold">
										{" "}
										Git/GitHub
									</span>
								</li>
								<li>
									Tools:{" "}
									<span className="text-white/40 font-semibold">
										{" "}
										Postman
									</span>
								</li>
							</ul>
						</div>

						<div className="border border-gray-500 rounded-sm p-4">
							<ul className="list-disc ml-5">
								<li>
									Back-End:{" "}
									<span className="text-white/40 font-semibold">
										{" "}
										JavaScript, Node.js
									</span>
								</li>
								<li>
									Frameworks:
									<span className="text-white/40 font-semibold">
										{" "}
										Express.js
									</span>
								</li>
								<li>
									Databases:
									<span className="text-white/40 font-semibold">
										{" "}
										MongoDB
									</span>
								</li>
								<li>
									API:
									<span className="text-white/40 font-semibold">
										{" "}
										REST
									</span>
								</li>
								<li>
									Deployment:
									<span className="text-white/40 font-semibold">
										{" "}
										Vercel
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;
