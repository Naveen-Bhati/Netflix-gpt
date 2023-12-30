import { createSlice } from "@reduxjs/toolkit";

const GPTSLice = createSlice({
	name: "gpt",
	initialState: {
		showGPTSearch: false,
	},
	reducers: {
		showGPTSearchHandler: (state) => {
			state.showGPTSearch = !state.showGPTSearch;
		},
	},
});

export const { showGPTSearchHandler } = GPTSLice.actions;
export default GPTSLice.reducer;
