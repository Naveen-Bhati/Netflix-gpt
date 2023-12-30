// {
// import { useDispatch } from "react-redux";
// import {
// 	HEADERS_TMDB_OPTIONS,
// 	TEXT_CATEGORY_NOW_PLAYING,
// 	TEXT_CATEGORY_POPULAR,
// 	TEXT_CATEGORY_TOP_RATED,
// 	TEXT_CATEGORY_UPCOMING,
// } from "../utils/constants";
// import {
// 	addNowPlayingMovies,
// 	addPopularMovies,
// 	addTopRatedMovies,
// 	addUpcomingMovies,
// } from "../utils/moviesSlice";

// const useMovieListByCategory = async (category) => {
// 	const dispatch = useDispatch();
// 	let URL;
// 	if (category === TEXT_CATEGORY_NOW_PLAYING) {
// 		URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
// 	}
// 	if (category === TEXT_CATEGORY_POPULAR) {
// 		URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
// 	}
// 	if (category === TEXT_CATEGORY_TOP_RATED) {
// 		URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
// 	}
// 	if (category === TEXT_CATEGORY_UPCOMING) {
// 		URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
// 	}
// 	const data = await fetch(URL, HEADERS_TMDB_OPTIONS);
// 	const dataJson = await data.json();
// 	if (category === TEXT_CATEGORY_NOW_PLAYING) {
// 		dispatch(addNowPlayingMovies(dataJson.results));
// 	}
// 	if (category === TEXT_CATEGORY_POPULAR) {
// 		dispatch(addPopularMovies(dataJson.results));
// 	}
// 	if (category === TEXT_CATEGORY_TOP_RATED) {
// 		dispatch(addTopRatedMovies(dataJson.results));
// 	}
// 	if (category === TEXT_CATEGORY_UPCOMING) {
// 		dispatch(addUpcomingMovies(dataJson.results));
// 	}
// };
// }
//Shortened code
import { useDispatch, useSelector } from "react-redux";
import {
	HEADERS_TMDB_OPTIONS,
	TEXT_CATEGORY_NOW_PLAYING,
	TEXT_CATEGORY_POPULAR,
	TEXT_CATEGORY_TOP_RATED,
	TEXT_CATEGORY_UPCOMING,
} from "../utils/constants";
import {
	addNowPlayingMovies,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
} from "../utils/moviesSlice";

const categoryToUrlMap = {
	[TEXT_CATEGORY_NOW_PLAYING]:
		"https://api.themoviedb.org/3/movie/now_playing?page=1",
	[TEXT_CATEGORY_POPULAR]:
		"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
	[TEXT_CATEGORY_TOP_RATED]:
		"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
	[TEXT_CATEGORY_UPCOMING]:
		"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

const categoryToActionMap = {
	[TEXT_CATEGORY_NOW_PLAYING]: addNowPlayingMovies,
	[TEXT_CATEGORY_POPULAR]: addPopularMovies,
	[TEXT_CATEGORY_TOP_RATED]: addTopRatedMovies,
	[TEXT_CATEGORY_UPCOMING]: addUpcomingMovies,
};

const useMovieListByCategory = async (category) => {
	const dispatch = useDispatch();
	const URL = categoryToUrlMap[category];
	const action = categoryToActionMap[category];

	if (!URL || !action) {
		console.error("Invalid category:", category);
		return;
	}
	const { nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies } =
		useSelector((store) => store.movies);
	if (nowPlayingMovies && upcomingMovies && topRatedMovies && popularMovies)
		return;

	const data = await fetch(URL, HEADERS_TMDB_OPTIONS);
	const dataJson = await data.json();
	dispatch(action(dataJson.results));
};

export default useMovieListByCategory;
