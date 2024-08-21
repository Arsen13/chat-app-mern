import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signUp } = useSignUp();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-700">
                    Sign Up
                    <span className="text-sky-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2" htmlFor="fullName">
                            <span className="text-base label-text text-gray-800">Full name</span>
                        </label>
                        <input 
                            id="fullName"
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full input input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2" htmlFor="username">
                            <span className="text-base label-text text-gray-800">Username</span>
                        </label>
                        <input 
                            id="username"
                            type="text"
                            placeholder="johndoe"
                            className="w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2" htmlFor="password">
                            <span className="text-base label-text text-gray-800">Password</span>
                        </label>
                        <input 
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2" htmlFor="confirmPassword">
                            <span className="text-base label-text text-gray-800">Confirm password</span>
                        </label>
                        <input 
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link 
                        to={'/login'}
                        className="text-sm hover:text-blue-300 mt-2 inline-block text-gray-800"
                    >
                        Already have an account?
                    </Link>
                    
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;