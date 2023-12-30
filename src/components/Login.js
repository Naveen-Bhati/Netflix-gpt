import React, { useRef, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { checkDataValidation } from "../utils/validate";
import { auth } from "../firebase";
import { addUser } from "../utils/userSlice";
import {
	TEXT_SIGN_IN,
	TEXT_SIGN_IN_NOW,
	TEXT_SIGN_UP,
	TEXT_SIGN_UP_NOW,
} from "../utils/constants";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMsg, setErrorMsg] = useState(null);
	const dispatch = useDispatch();

	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const nameRef = useRef(null);

	const toggleSignInForm = () => {
		setIsSignIn(!isSignIn);
	};

	const clickSubmitHandler = () => {
		let message = checkDataValidation(
			emailRef.current.value,
			passwordRef.current.value
		);
		setErrorMsg(message);
		if (message) return;

		//sign in logic
		if (isSignIn) {
			signInWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMsg(errorCode + "-" + errorMessage);
			});
		}

		//sign up logic
		if (!isSignIn) {
			createUserWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: nameRef.current.value,
						photoURL:
							"https://lh3.googleusercontent.com/ogw/ANLem4bUJDKMIz5OeM1tWA2lr3kTj3Nw3EQthYEv_q2b=s64-c-mo",
					})
						.then(() => {
							const { uid, displayName, email, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									displayName: displayName,
									email: email,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							console.log("error", error.message);
							setErrorMsg(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + "-" + errorMessage);
				});
		}
	};

	return (
		<div className="netflix-bg-img h-screen">
			<Header />
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-3/12 flex flex-col bg-black bg-opacity-70 mt-36 m-auto text-white p-12">
				<h1 className="font-bold text-3xl py-4">
					{isSignIn ? TEXT_SIGN_IN : TEXT_SIGN_UP}
				</h1>
				{!isSignIn && (
					<input
						ref={nameRef}
						autoComplete="false"
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 bg-gray-700 w-full "
					/>
				)}
				<input
					ref={emailRef}
					autoComplete="false"
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 bg-gray-700 w-full "
				/>
				<input
					ref={passwordRef}
					autoComplete="false"
					type="password"
					placeholder="Password"
					className="p-4 my-4 bg-gray-700 w-full "
				/>
				<p className="font-bold text-lg text-red-700 py-2">{errorMsg}</p>
				<button
					className="p-4 my-4 w-full rounded-md bg-red-700 cursor-pointer"
					onClick={clickSubmitHandler}>
					{isSignIn ? TEXT_SIGN_IN : TEXT_SIGN_UP}
				</button>
				<p
					className="font-bold text-md py-4 cursor-pointer"
					onClick={toggleSignInForm}>
					{isSignIn ? TEXT_SIGN_UP_NOW : TEXT_SIGN_IN_NOW}
				</p>
			</form>
		</div>
	);
};

export default Login;
