import React from "react";
import ebg from "../images/ebg.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
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
            Create your account
          </h2>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-white/80 text-white/80 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-black"
                  placeholder="Full Name"
                />
              </div>
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
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-white/80 text-white/80 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-black"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-white/80 text-white/80 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-black"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm rounded-md text-white font-bold text-ellipsis bg-primary hover:bg-[#00090e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign up
              </button>
            </div>
            <div className="text-center text-white/60">
              <div className="text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-white/60 hover:text-white"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
