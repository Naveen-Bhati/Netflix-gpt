import { useEffect } from "react";
import { HEADERS_TMDB_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getMovieById = async (movieId) => {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
				HEADERS_TMDB_OPTIONS
			);
			const jsonData = await data.json();
			const allTrailers = jsonData.results.filter(
				(movie) => movie.type === "Trailer"
			);
			const trailer = allTrailers.length ? allTrailers[0] : jsonData.results[0];
			dispatch(addMovieTrailer(trailer));
		};

		getMovieById(movieId);
	}, [movieId, dispatch]);
};

export default useMovieTrailer;
