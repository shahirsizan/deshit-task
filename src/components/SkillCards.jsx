import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

const SkillCards = () => {
	// 1. Motion Values to track mouse position
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// 2. Map mouse position (0-width, 0-height) to a rotation range (-5 to 5 degrees)
	// The 'rotateX' and 'rotateY' properties are 3D rotations, creating the tilt effect.
	const rotateX = useTransform(y, [0, 100], [8, -5]);
	const rotateY = useTransform(x, [0, 100], [-5, 8]);

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

	return (
		<motion.div
			className="md:w-1/2 bg-[#303030] flex flex-wrap gap-3 md:gap-4 p-3 py-4 md:p-4 md:py-5 rounded-xl border-2 border-white/20 shadow-[3px_3px_5px_3px_rgba(0,0,0,0.3)]"
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
			{skills.map((skill, idx) => {
				return (
					<div key={idx} className="flex items-center justify-center">
						<img
							src={skill.image}
							className="w-10 md:w-12 lg:w-14 rounded-2xl overflow-hidden"
						/>
					</div>
				);
			})}
		</motion.div>
	);
};

export default SkillCards;
