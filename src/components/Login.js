import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const toggleSignInForm = () => {
		setIsSignIn(!isSignIn);
	};
	return (
		<div className="netflix-bg-img h-[968px]">
			<Header />
			<form className="w-3/12 flex flex-col bg-black bg-opacity-70 mt-36 m-auto text-white p-12">
				<h1 className="font-bold text-3xl py-4">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignIn && (
					<input
						autoComplete="false"
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 bg-gray-700 w-full "
					/>
				)}
				<input
					autoComplete="false"
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 bg-gray-700 w-full "
				/>
				<input
					autoComplete="false"
					type="Password"
					placeholder="password"
					className="p-4 my-4 bg-gray-700 w-full "
				/>
				<button className="p-4 my-4 w-full rounded-md bg-red-700 cursor-pointer">
					{isSignIn ? "Sign In" : "Sign Up"}
				</button>
				<p className="font-bold text-md py-4" onClick={toggleSignInForm}>
					{isSignIn
						? "New to Netflix? Sign Up now"
						: "Already registered? Sign in now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
