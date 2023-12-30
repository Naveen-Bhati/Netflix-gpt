import MovieCard from "./MovieCard";
import ShimmerMovieCard from "./ShimmerMovieCard";

const MoviesList = ({ title, movies }) => {
	const emptyArray = new Array(10).fill(null);
	return (
		<div className=" bg-transparent">
			<h1 className="text-3xl text-white p-2">{title}</h1>
			<div className="flex overflow-x-auto custom-scrollbar">
				{movies || title
					? movies?.map((movie) => (
							<MovieCard
								key={movie.id}
								posterPath={movie.poster_path}
								movieName={movie.title}
							/>
					  ))
					: emptyArray.map((_, index) => <ShimmerMovieCard key={index} />)}
			</div>
		</div>
	);
};

export default MoviesList;
