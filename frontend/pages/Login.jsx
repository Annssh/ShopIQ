import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ebg from "../images/ebg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${ebg})`,
        }}
      >
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg bg-[#0e0e0e] bg-opacity-50">
          <h2 className="text-3xl font-bold text-center text-white/80">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-white/80 text-white/80 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-black"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-white/80 text-white/80 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-black"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(
                    credentialResponse.credential
                  );
                  console.log(credentialResponseDecoded);
                }}
                onError={() => {
                  console.log("Error in Login");
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-white/80 hover:text-white"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-white/60 hover:text-white"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm rounded-md text-white font-bold text-ellipsis bg-primary hover:bg-[#00090e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign in
              </button>
            </div>

            <div className="text-center text-sm mt-4">
              <p className="text-white/60">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-white/80 hover:text-white"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
