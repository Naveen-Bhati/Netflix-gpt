import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import {
	TEXT_CATEGORY_NOW_PLAYING,
	TEXT_CATEGORY_POPULAR,
	TEXT_CATEGORY_TOP_RATED,
	TEXT_CATEGORY_UPCOMING,
} from "../utils/constants";
import useMovieListByCategory from "../hooks/useMovieListByCategory";

const SecondaryContainer = () => {
	const { nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies } =
		useSelector((store) => store.movies);
	useMovieListByCategory(TEXT_CATEGORY_NOW_PLAYING);
	useMovieListByCategory(TEXT_CATEGORY_POPULAR);
	useMovieListByCategory(TEXT_CATEGORY_TOP_RATED);
	useMovieListByCategory(TEXT_CATEGORY_UPCOMING);
	return (
		<div className="absolute top-3/4 left-0 pl-12 text-white bg-black w-screen">
			<MoviesList title={TEXT_CATEGORY_NOW_PLAYING} movies={nowPlayingMovies} />
			<MoviesList title={TEXT_CATEGORY_POPULAR} movies={popularMovies} />
			<MoviesList title={TEXT_CATEGORY_TOP_RATED} movies={topRatedMovies} />
			<MoviesList title={TEXT_CATEGORY_UPCOMING} movies={upcomingMovies} />
		</div>
	);
};

export default SecondaryContainer;
