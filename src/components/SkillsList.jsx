import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";
import ScrollSlide from "./ScrollSlide";

const SkillsList = () => {
	// 1. Motion Values to track mouse position
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// 2. Map mouse position (0-width, 0-height) to a rotation range (-5 to 5 degrees)
	// The 'rotateX' and 'rotateY' properties are 3D rotations, creating the tilt effect.
	const rotateX = useTransform(y, [0, 100], [12, -5]);
	const rotateY = useTransform(x, [0, 100], [-5, 12]);

	// Function to capture the mouse position relative to the element
	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		// Calculate mouse position as a percentage (0 to 100)
		const mouseX = ((e.clientX - rect.left) / width) * 100;
		const mouseY = ((e.clientY - rect.top) / height) * 100;

		x.set(mouseX);
		y.set(mouseY);
	};

	// Function to reset values when mouse leaves
	const handleMouseLeave = () => {
		x.set(50); // Reset X to center (no rotation)
		y.set(50); // Reset Y to center (no rotation)
	};

	const skillSet = [
		{
			group: "Frontend",
			subgroups: [
				{ name: "Libraries", skills: ["ReactJS"] },
				{
					name: "CSS Libraries",
					skills: ["Bootstrap", "Tailwind CSS", "Framer Motion"],
				},
				{ name: "Version Control", skills: ["Git", "GitHub"] },
				{ name: "Tools", skills: ["Postman"] },
			],
		},
		{
			group: "Backend",
			subgroups: [
				{ name: "Languages", skills: ["JavaScript, Java"] },
				{ name: "Frameworks", skills: ["ExpressJS"] },
				{ name: "Databases", skills: ["PostgreSQL", "MongoDB"] },
				{ name: "API", skills: ["RESTful API"] },
				{ name: "Deployment", skills: ["Vercel", "Render"] },
			],
		},
	];

	return (
		<ScrollFadeIn>
			<motion.div
				className=" md:w-full bg-[#303030] flex flex-col space-y-3 p-2 rounded-xl hover:border-1 hover:border-white hover:border-t-gray-600/80 hover:border-r-gray-600/80"
				// Pass the transformed motion values to the style prop
				style={{ rotateX, rotateY, x: 0, y: 0 }} // x:0, y:0 is crucial to override default
				// Use the helper functions for interaction
				onMouseMove={(e) => {
					handleMouseMove(e);
				}}
				onMouseLeave={() => {
					handleMouseLeave();
				}}
				// Ensure smooth 3D perspective and transition when values change
				transition={{ type: "tween", duration: 0.3 }}
				whileHover={{ scale: 1.01 }} // Optional: Add a slight scale for visual feedback
			>
				<div className="flex flex-col gap-5 text-white p-3">
					{skillSet.map((group, idx) => {
						return (
							<div
								key={idx}
								className="border border-gray-500/70 rounded-sm p-4"
							>
								<ul className="list-disc ml-5">
									<li key={idx} className="mb-2">
										{/* GROUP NAME */}
										<span className="text-2xl font-bold">
											{group.group}
										</span>

										{/* SUBGROUPS */}
										{group.subgroups.map(
											(subGroup, subIndex) => {
												// JOIN THE SKILLS INTO A COMMA SEPERATED ARRAY
												const skillsArray =
													subGroup.skills.join(", ");

												return (
													<li key={subIndex}>
														{/* SUBGROUP NAME */}
														<span className="text-xl font-semibold">
															{subGroup.name}:{" "}
														</span>

														{/* SKILLS ARRAY */}
														<span className="text-white/60 ">
															{skillsArray}
														</span>
													</li>
												);
											}
										)}
									</li>
								</ul>
							</div>
						);
					})}
				</div>
				<div></div>
			</motion.div>
		</ScrollFadeIn>
	);
};

export default SkillsList;
