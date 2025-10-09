import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ServiceCard = ({ service, idx }) => {
	// 1. Motion Values to track mouse position
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// 2. Map mouse position (0-width, 0-height) to a rotation range (-5 to 5 degrees)
	// The 'rotateX' and 'rotateY' properties are 3D rotations, creating the tilt effect.
	const rotateX = useTransform(y, [0, 100], [10, -4]);
	const rotateY = useTransform(x, [0, 100], [-4, 10]);

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
		<div>
			<motion.div
				key={idx}
				className="space-y-4 max-sm:px-2 max-sm:py-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center sm:p-6 rounded-xl text-white bg-[#11111F]/80 
							hover:bg-gradient-to-b hover:from-[#B94A5B] hover:via-[#6A4FFF] hover:to-[#6A4FFF] 
							shadow-[5px_5px_5px_-3px_rgba(0,0,0,0.5)] hover:border-1 hover:border-white hover:border-l-gray-600/80 hover:border-b-gray-600/80"
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
				transition={{ type: "inertia", delay: 1, duration: 3 }}
				whileHover={{ scale: 1 }} // You can still use simple hover effects
			>
				<div className="w-20 h-20 p-2 rounded-2xl overflow-hidden bg-gradient-to-b from-[#B94A5B] to-[#6A4FFF]">
					<img src={service.image} className="w-full" />
				</div>

				<p>{service.name}</p>

				<p>{service.desc}</p>

				<button className="flex items-center">
					Learn more
					<span>
						<FaArrowRight />
					</span>
				</button>
			</motion.div>
		</div>
	);
};

export default ServiceCard;
