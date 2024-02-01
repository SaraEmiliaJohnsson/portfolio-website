import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

// Create a Redux store using `configureStore`
export const store = configureStore({
	// The `reducer` field is an object that holds all the reducers for the store
	reducer: {
		// Register the `themeReducer` under the "theme" key in the store
		theme: themeReducer,
	},
});
