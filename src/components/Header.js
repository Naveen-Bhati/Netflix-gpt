import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";
import {
	NETFLIX_LOGO,
	TEXT_SIGN_OUT,
	TEXT_SEARCH,
	TEXT_BROWSE,
} from "../utils/constants";
import { showGPTSearchHandler } from "../utils/GPTSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);

	const signOutHandler = () => {
		signOut(auth).catch((error) => {});
	};
	const searchHandler = () => {
		dispatch(showGPTSearchHandler(showGPTSearch));
	};

	useEffect(() => {
		//here onAuthStateChangeed function will return a function called unsubscribe acc to firebase docs
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						displayName: displayName,
						email: email,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe(); //this will unsubscribe when component will unmount
	}, [navigate, dispatch]);

	return (
		<div className="py-2 px-8 bg-gradient-to-b from-black flex justify-between z-10 ">
			<div className="">
				<img className="w-44" src={NETFLIX_LOGO} alt="Logo" />
			</div>
			{user && (
				<div className="flex justify-around w-1/6 items-center ">
					<button
						className="text-white font-bold text-lg bg-red-700 px-6 py-2 rounded-md cursor-pointer hover:scale-105 ease-in-out"
						onClick={searchHandler}>
						{showGPTSearch ? TEXT_BROWSE : TEXT_SEARCH}
					</button>
					<img
						className="w-12 h-12 rounded-full"
						src={user.photoURL}
						alt="userIcon"
					/>
					<button
						className="text-white font-bold text-lg"
						onClick={signOutHandler}>
						{TEXT_SIGN_OUT}
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
