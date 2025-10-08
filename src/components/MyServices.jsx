import React from "react";
import { IoIosExit } from "react-icons/io";
import service1image from "../assets/service1image.png";
import service2image from "../assets/service2image.png";
import service3image from "../assets/service3image.png";
import service4image from "../assets/service4image.png";
import service5image from "../assets/service5image.png";
import service6image from "../assets/service6image.png";
import { IoIosArrowForward } from "react-icons/io";

import ServiceCard from "./ServiceCard";

const MyServices = () => {
	const services = [
		{
			id: 1,
			name: "Web Application",
			desc: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
			image: service1image,
		},
		{
			id: 2,
			name: "Web Development",
			desc: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
			image: service2image,
		},
		{
			id: 3,
			name: "App Development",
			desc: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
			image: service3image,
		},
		{
			id: 4,
			name: "Database Management",
			desc: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
			image: service4image,
		},
		{
			id: 5,
			name: "Data Analysis",
			desc: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
			image: service5image,
		},
		{
			id: 6,
			name: "Web Design",
			desc: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
			image: service6image,
		},
	];

	return (
		<div
			id="service"
			className="mt-24 scroll-mt-12 flex flex-col gap-4 px-[5vw] md:px-[8vw] lg:px-[10vw]"
		>
			<p className="text-white text-4xl font-[600] flex items-center gap-3">
				<span className="text-black">
					<IoIosArrowForward className="w-14 h-14 text-white" />
				</span>{" "}
				My Services
			</p>

			<p className="text-[#DBB9B9BA] px-5">
				I am a highly experienced Full-Stack Mobile App Developer with
				over seven years in the industry. I specialize in Flutter for
				mobile development and Node.js for backend solutions. With a
				deep understanding of scalable architectures, I have
				successfully delivered 40+ high-performance applications across
				various industries, ensuring seamless user experiences and
				efficient backend systems.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, idx) => {
					return <ServiceCard service={service} idx={idx} />;
				})}
			</div>
		</div>
	);
};

export default MyServices;
