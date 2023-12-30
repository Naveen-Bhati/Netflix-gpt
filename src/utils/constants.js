export const NETFLIX_LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const TEXT_SIGN_OUT = "Sign Out";
export const TEXT_SIGN_IN = "Sign In";
export const TEXT_SIGN_UP = "Sign Up";
export const TEXT_SIGN_UP_NOW = "New to Netflix? Sign Up now";
export const TEXT_SIGN_IN_NOW = "Already registered? Sign In now";
export const TEXT_PLAY = "Play";
export const TEXT_MORE_INFO = "More Info";
export const TEXT_SEARCH = "Search";
export const TEXT_BROWSE = "Browse";
export const URL_YOUTUBE_EMBEDDED = "https://www.youtube.com/embed/";
export const EXTRA_PARAMS_YOUTUBE_VIDEO = "?autoplay=1&controls=0&rel=0&mute=1";
export const URL_IMG_TMDB_MOVIE_CARD = "https://image.tmdb.org/t/p/w500/";

export const TEXT_CATEGORY_NOW_PLAYING = "Now Playing";
export const TEXT_CATEGORY_POPULAR = "Popular Movies";
export const TEXT_CATEGORY_TOP_RATED = "Top Rated Movies";
export const TEXT_CATEGORY_UPCOMING = "Upcoming Movies";

export const HEADERS_TMDB_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN}`,
	},
};
