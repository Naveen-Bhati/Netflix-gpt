import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HEADERS_TMDB_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getNowPlayingMoviesList = async () => {
			const data = await fetch(
				"https://api.themoviedb.org/3/movie/now_playing?page=1",
				HEADERS_TMDB_OPTIONS
			);
			const dataJson = await data.json();
			console.log("movies---", dataJson.results);
			dispatch(addNowPlayingMovies(dataJson.results));
		};
		getNowPlayingMoviesList();
	}, [dispatch]);
};

export default useNowPlayingMovies;
