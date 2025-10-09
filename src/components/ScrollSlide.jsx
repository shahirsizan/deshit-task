import React, { cloneElement, useEffect, useRef } from "react";

const ScrollSlide = ({ children }) => {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// when getting inside the viewport
				if (entry.isIntersecting && ref.current) {
					ref.current.classList.remove("animate-slideOut");
					ref.current.classList.add("animate-slideIn");
				}
				// when stepping outside the viewport
				else {
					ref.current.classList.remove("animate-slideIn");
					ref.current.classList.add("animate-slideOut");
				}
			},
			{
				threshold: 0.2,
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
			return () => observer.disconnect();
		}
	}, []);

	// return (
	// 	<div ref={ref} className="opacity-0">
	// 		{children}
	// 	</div>
	// );

	// Clone the child and attach ref + class directly to it
	return cloneElement(children, {
		ref,
		className: `${children.props.className || ""} opacity-0`,
	});
};

export default ScrollSlide;
