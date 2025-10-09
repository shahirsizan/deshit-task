import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ProjectCard = ({ project, idx }) => {
	// 1. Motion Values to track mouse position
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// 2. Map mouse position (0-width, 0-height) to a rotation range (-5 to 5 degrees)
	// The 'rotateX' and 'rotateY' properties are 3D rotations, creating the tilt effect.
	const rotateX = useTransform(y, [0, 100], [10, -5]);
	const rotateY = useTransform(x, [0, 100], [-5, 10]);

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
			key={idx}
			className="fadeInAnimation flex flex-col gap-2 md:gap-3 p-4 lg:p-6 rounded-2xl bg-[#11111F]/60 hover:border-1 hover:border-white hover:border-l-gray-600/80 hover:border-b-gray-600/80 shadow-[3px_3px_5px_3px_rgba(0,0,0,0.3)]"
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
			{/* IMAGE */}
			<div className="w-full h-64 p-2 bg-white rounded-4xl overflow-hidden mb-5">
				<img
					src={project.image}
					className="w-full h-64 object-contain"
				/>
			</div>

			<p className="font-[600] text-xl md:text-2xl text-white">
				{project.name}
			</p>

			<p className="font-[400] text-md md:text-lg text-[#8b8989]">
				{project.desc}
			</p>

			<div className="flex-1"></div>

			<button className="w-fit flex items-center text-[#B94A5B] text-sm md:text-md cursor-pointer">
				Click to Visit <IoIosArrowForward className="text-[#B94A5B]" />
			</button>
		</motion.div>
	);
};

export default ProjectCard;
