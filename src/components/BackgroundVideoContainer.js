import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideoContainer = ({ movieId }) => {
	useMovieTrailer(movieId);
	const movieTrailer = useSelector((store) => store.movies.movieTrailer);

	return (
		<div className="absolute h-screen ">
			<iframe
				className="h-screen w-screen aspect-video "
				src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
		</div>
	);
};

export default BackgroundVideoContainer;
