import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-700">
                    Sign Up
                    <span className="text-sky-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2" for="fullName">
                            <span className="text-base label-text text-gray-800">Full name</span>
                        </label>
                        <input 
                            id="fullName"
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <div>
                        <label className="label p-2" for="username">
                            <span className="text-base label-text text-gray-800">Username</span>
                        </label>
                        <input 
                            id="username"
                            type="text"
                            placeholder="johndoe"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <div>
                        <label className="label p-2" for="password">
                            <span className="text-base label-text text-gray-800">Password</span>
                        </label>
                        <input 
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <div>
                        <label className="label p-2" for="confirmPassword">
                            <span className="text-base label-text text-gray-800">Confirm password</span>
                        </label>
                        <input 
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <GenderCheckBox />

                    <a 
                        href="#"
                        className="text-sm hover:text-blue-300 mt-2 inline-block text-gray-800"
                    >
                        Already have an account?
                    </a>
                    
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;