import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";
import {
	EXTRA_PARAMS_YOUTUBE_VIDEO,
	URL_YOUTUBE_EMBEDDED,
} from "../utils/constants";

const BackgroundVideoContainer = ({ movieId }) => {
	useMovieTrailer(movieId);
	const movieTrailer = useSelector((store) => store.movies.movieTrailer);

	return (
		<div className="absolute h-screen ">
			<iframe
				className="h-screen w-screen aspect-video "
				src={
					URL_YOUTUBE_EMBEDDED + movieTrailer?.key + EXTRA_PARAMS_YOUTUBE_VIDEO
				}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
		</div>
	);
};

export default BackgroundVideoContainer;
