/* eslint-disable react/no-unescaped-entities */
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const Login = () => {
    const {signInUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [loginError, setLoginError] =useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('login', email, password);

        // error reset
        setLoginError('')
        setSuccess('')

        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            toast("Login Successfully")
            setSuccess('Login Successfully')
        })
        .catch(error =>{
            setLoginError(error.message)
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            toast("Google Login Successfully")
            setSuccess('Login Successfully')

        })
        .catch(error => {
            setLoginError(error.message)
        })
    }
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            console.log(result.user)
            toast("Github Login Successfully")
            setSuccess('Login Successfully')


        })
        .catch(error => {
            setLoginError(error.message)
        })
    }

    return (
        <div className="">
            <section className=" dark:bg-gray-900">
            <ToastContainer />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="/favicon.png" alt="logo" />
                        CozyNest
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account 
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button type="submit" className="w-full text-white bg-[#23BE0A] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ri">Login</button>
                                <div className="divider">OR</div>
                            </form>
                                <div className="flex justify-center space-x-8">
                                    <button onClick={handleGoogleSignIn}><img className="w-10" src="google.png" alt="" /></button>
                                    <button onClick={handleGithubSignIn}><img className="w-10" src="github.png" alt="" /></button>
                                </div>
                                {
                                    loginError && <p className="text-red-700">{loginError}</p>
                                }
                                                                {
                                    success && <p className="text-green-500">{success}</p>
                                }
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account yet? <Link to='/register' className="font-medium text-primary-600 hover:underline  tex text-[#23BE0A]"><button>Sign up now.</button></Link>
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;