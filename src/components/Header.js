import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};

	return (
		<div className="py-2 px-8 bg-gradient-to-b from-black flex justify-between">
			<div className="">
				<img
					className="w-44"
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="Logo"
				/>
			</div>
			{user && (
				<div className="flex justify-around w-1/12 items-center">
					<img className="w-12 h-12" src={user.photoURL} alt="userIcon" />
					<button
						className="text-white font-bold text-lg"
						onClick={signOutHandler}>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
