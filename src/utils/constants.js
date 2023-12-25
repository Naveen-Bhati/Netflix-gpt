export const NETFLIX_LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const TEXT_SIGN_OUT = "Sign Out";
export const TEXT_SIGN_IN = "Sign In";
export const TEXT_SIGN_UP = "Sign Up";
export const TEXT_SIGN_UP_NOW = "New to Netflix? Sign Up now";
export const TEXT_SIGN_IN_NOW = "Already registered? Sign In now";

export const HEADERS_TMDB_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN}`,
	},
};
