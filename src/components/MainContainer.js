import React from "react";
import { useSelector } from "react-redux";

import TitleContainer from "./TitleContainer";
import BackgroundVideoContainer from "./BackgroundVideoContainer";

const MainContainer = () => {
	const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!moviesList) return;
	const mainMovie = moviesList[0];
	const { original_title, overview, id } = mainMovie;

	return (
		<div className="absolute top-0 left-0 w-full -z-10">
			<BackgroundVideoContainer movieId={id} />
			<TitleContainer title={original_title} overview={overview} />
		</div>
	);
};

export default MainContainer;
