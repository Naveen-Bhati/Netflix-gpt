import React from "react";

const TitleContainer = ({ title, overview }) => {
	return (
		<div className="absolute pl-16 pt-80 w-screen h-screen text-white bg-gradient-to-r from-black">
			<h1 className="text-6xl font-bold w-1/2">{title}</h1>
			<p className="w-1/4 pt-4">{overview}</p>
			<div className="flex pt-4">
				<button className="p-4 px-12 bg-white text-gray-500 text-xl rounded-md flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="24"
						fill="none"
						id="play">
						<path
							fill="#000"
							d="M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259Z"></path>
					</svg>
					<p>Play</p>
				</button>
				<button className="ml-4 p-4 px-10 bg-gray-500 text-white text-xl rounded-md flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="24"
						id="info">
						<g fill="#231f20" data-name="Layer 2">
							<path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"></path>
							<path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"></path>
						</g>
					</svg>
					<p>More Info</p>
				</button>
			</div>
		</div>
	);
};

export default TitleContainer;
