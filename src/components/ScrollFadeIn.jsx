import React, { cloneElement, useEffect, useRef } from "react";

const ScrollFadeIn = ({ children }) => {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// when getting inside the viewport
				if (entry.isIntersecting && ref.current) {
					ref.current.classList.remove("animate-fadeout");
					ref.current.classList.add("animate-fadein");
				}
				// when stepping outside the viewport
				else {
					ref.current.classList.remove("animate-fadein");
					ref.current.classList.add("animate-fadeout");
				}
			},
			{
				threshold: 0.1,
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

export default ScrollFadeIn;
