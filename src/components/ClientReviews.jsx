import React from "react";
import { IoIosExit } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../assets/clientImage/1.png";
import img2 from "../assets/clientImage/2.png";
import img3 from "../assets/clientImage/3.png";
import img4 from "../assets/clientImage/4.png";
import img5 from "../assets/clientImage/5.png";

const ClientReviews = () => {
	const clientReviews = [
		{
			id: 1,
			stars: 5,
			desc: "DeshIT-BD brings the kind of speed and adaptability every startup dreams of. They understand how to balance rapid execution with long-term scalability, which is rare in a tech partner. From idea to implementation, their team has been reliable, resourceful, and deeply committed to our success. DeshIT-BD isnt just a development team—theyre an extension of our startup..",
			clientName: "Woody Klemetson",
			clientzDesignation: "Founder and CEO at AskElephant",
			clientzImage: img1,
		},
		{
			id: 2,
			stars: 4,
			desc: "Working with DeshIT-BD has been transformative for our organization. Their team doesnt just deliver technology—they understand our vision and help bring it to life with precision and care. What sets them apart is their dedication, professionalism, and ability to translate complex ideas into solutions that truly make a difference. DeshIT-BD is a partner you can trust to elevate your projects from concept to success.",
			clientName: "Stacy Duty",
			clientzDesignation: "Founder at The WeighPay Group",
			clientzImage: img2,
		},
		{
			id: 3,
			stars: 3,
			desc: "Collaborating with DeshIT-BD has been an inspiring experience. Their team combines technical excellence with a creative approach that brings ideas to life in ways I didnt imagine possible.They are more than developers—they are true partners who listen, innovate, and deliver with precision. For anyone seeking a team that can turn vision into reality, DeshIT-BD is unmatched..",
			clientName: "Lauren Messemer",
			clientzDesignation:
				"Founder & Lead Developer at Mesmerize Software Studio",
			clientzImage: img3,
		},
		{
			id: 4,
			stars: 4,
			desc: "Brings the kind of speed and adaptability every startup dreams of. They understand how to balance rapid execution with long-term scalability, which is rare in a tech partner. From idea to implementation, their team has been reliable, resourceful, and deeply committed to our success. DeshIT-BD isnt just a development team—theyre an extension of our startup..",
			clientName: "Wooda Klemetson",
			clientzDesignation: "Co-Founder and CEO at AskElephant",
			clientzImage: img4,
		},
		{
			id: 5,
			stars: 5,
			desc: "Kind of speed and adaptability every startup dreams of. They understand how to balance rapid execution with long-term scalability, which is rare in a tech partner. From idea to implementation, their team has been reliable, resourceful, and deeply committed to our success. DeshIT-BD isnt just a development team—theyre an extension of our startup..",
			clientName: "Shahir Sizanski",
			clientzDesignation: "CEO at Sizan & Co",
			clientzImage: img5,
		},
	];

	return (
		<div className="mt-24 px-[5vw] md:px-[8vw] lg:px-[10vw]">
			<p className="text-white text-[28px] font-[600] flex items-center gap-3 mb-8">
				<span className="text-black">
					<IoIosExit className="w-12 h-12" />
				</span>{" "}
				Client Reviews
			</p>

			<div>
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent>
						{clientReviews.map((item) => (
							<CarouselItem
								key={item.id}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<Card className="bg-[#4C4C4C3B]/80 text-white border border-gray-400/60 h-full flex flex-col justify-between">
									{/* CARD HEADER */}
									<CardHeader>
										<div className="flex flex-col space-y-5">
											<FaQuoteRight className="text-[#B94A5B] text-2xl" />

											<div className="flex">
												{Array.from(
													{ length: 5 },
													(_, i) =>
														i < item.stars ? (
															<FaStar
																key={i}
																className="text-[#B94A5B] size-6"
															/>
														) : (
															<FaRegStar
																key={i}
																className="text-gray-500 size-6"
															/>
														)
												)}
											</div>
										</div>
									</CardHeader>

									{/* CARD CONTENT */}
									<CardContent className="text-[#FFFFFF] font-[400] text-sm leading-relaxed px-4">
										{item.desc}
									</CardContent>

									{/* CARD FOOTER */}
									<CardFooter>
										<div className="flex items-center gap-3">
											<img
												src={item.clientzImage}
												className="w-12 h-12 rounded-full object-cover border-2 border-[#B94A5B]"
											/>

											<div>
												<p className="text-white font-[700]">
													{item.clientName}
												</p>

												<p className="text-gray-400 font-[400]">
													{item.clientzDesignation}
												</p>
											</div>
										</div>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className=" text-white border-gray-600 bg-gradient-to-b from-[#F94A5B] to-[#6A4FFF] cursor-pointer hover:scale-110 transition-all duration-200 -bottom-1/2" />
					<CarouselNext className="text-white border-gray-600 bg-gradient-to-b from-[#F94A5B] to-[#6A4FFF] cursor-pointer hover:scale-110 transition-all duration-200" />
				</Carousel>
			</div>
		</div>
	);
};

export default ClientReviews;
