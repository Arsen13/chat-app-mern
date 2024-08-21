import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-sky-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2" for="username">
                            <span className="text-base label-text text-gray-800">Username</span>
                        </label>
                        <input 
                            id="username"
                            type="text" 
                            placeholder="Enter username" 
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

                    <Link to={'/signup'} className="text-sm hover:text-blue-300 mt-2 inline-block text-gray-800">
                        {"Don't"} have an account?    
                    </Link> 

                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;