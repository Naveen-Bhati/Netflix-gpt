import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, displayName, email, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						displayName: displayName,
						email: email,
						photoURL: photoURL,
					})
				);

				// ...
			} else {
				// User is signed out
				// ...
				dispatch(removeUser());
			}
		});
	}, [dispatch]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
