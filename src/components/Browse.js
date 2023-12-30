import Header from "./Header";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import GPTContainer from "./GPTContainer";
import { useSelector } from "react-redux";
const Browse = () => {
	const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
	return (
		<>
			<Header className="w-full" />
			{showGPTSearch ? (
				<GPTContainer />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</>
	);
};

export default Browse;
