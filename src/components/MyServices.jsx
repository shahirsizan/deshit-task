import React from "react";
import { IoIosExit } from "react-icons/io";
import service1image from "../assets/service1image.png";
import service2image from "../assets/service2image.png";
import service3image from "../assets/service3image.png";
import service4image from "../assets/service4image.png";
import service5image from "../assets/service5image.png";
import service6image from "../assets/service6image.png";
import { FaArrowRight } from "react-icons/fa";

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
			className="mt-24 flex flex-col gap-4 px-[5vw] md:px-[8vw] lg:px-[10vw]"
		>
			<p className="text-white flex items-center gap-3">
				<span className="text-black">
					<IoIosExit className="w-8 h-8" />
				</span>{" "}
				My Services
			</p>

			<p className="text-white">
				I am a highly experienced Full-Stack Mobile App Developer with
				over seven years in the industry. I specialize in Flutter for
				mobile development and Node.js for backend solutions. With a
				deep understanding of scalable architectures, I have
				successfully delivered 40+ high-performance applications across
				various industries, ensuring seamless user experiences and
				efficient backend systems.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services.map((service, idx) => {
					return (
						<div
							key={idx}
							className="space-y-4 p-3 rounded-xl text-white bg-[#11111F] hover:bg-gradient-to-b hover:from-[#B94A5B] hover:via-[#6A4FFF] hover:to-[#6A4FFF]"
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
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MyServices;
