import React, { useEffect } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResults from "./GPTSearchResults";
import main from "../utils/openai";

const GPTContainer = () => {
	return (
		<div className="netflix-bg-img overflow-x-hidden h-screen w-screen absolute top-0 left-0 -z-10">
			<GPTSearchBar />
			<GPTSearchResults />
		</div>
	);
};

export default GPTContainer;
