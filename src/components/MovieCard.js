import { URL_IMG_TMDB_MOVIE_CARD } from "../utils/constants";

const MovieCard = ({ movieName, posterPath }) => {
	return (
		<div className="mt-4 text-white mr-2 border-white rounded-xl min-w-[250px]">
			<img
				className=" object-cover"
				src={URL_IMG_TMDB_MOVIE_CARD + posterPath}
				alt={movieName}
			/>
		</div>
	);
};

export default MovieCard;
