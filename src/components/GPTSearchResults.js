import React from "react";
import MoviesList from "./MoviesList";

const GPTSearchResults = () => {
	return (
		<div className="absolute top-96 left-6 custom-scrollbar overflow-x-auto flex-wrap">
			<MoviesList />
		</div>
	);
};

export default GPTSearchResults;
