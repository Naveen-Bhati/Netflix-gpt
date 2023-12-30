import React from "react";

const GPTSearchBar = () => {
	return (
		<form className="bg-black flex w-[45%] absolute top-48 left-[25%] h-20 justify-around items-center rounded-md">
			<input
				className="w-[75%] h-[80%] px-4"
				type="text"
				placeholder="What do you want to watch today?"
			/>
			<button className="bg-red-700 text-white text-2xl font-bold w-[20%] h-[80%] rounded-md">
				Search
			</button>
		</form>
	);
};

export default GPTSearchBar;
