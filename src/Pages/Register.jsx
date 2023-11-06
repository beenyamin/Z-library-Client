
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../public/register.png"
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser , googleLogin, handleUpdateProfile} = useAuth();
    const [registerError, setRegisterError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState('');

    const location = useLocation ();
    const navigate = useNavigate ();
  

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;

        console.log(name, email, password);

        setRegisterError('');
        setSignUpSuccess('');


        if (password.length < 6) {
            toast.error('Password should be at least 6 characters!')
            return;

        }
        else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {

            toast.error(" Your password should have at Least one UpperCase & special character ")
            return
        }



        createUser(email, password)
        .then(res => {
            console.log(res)   
            handleUpdateProfile(name,image)    

        .then(res => {   
            console.log(res)  
            navigate(location?.state ? location.state : '/login' ); 
            toast.success(' Registration SuccessFully => Please Log in !')
          
            
        })
    })

        .catch(error => {
                toast.error(error.message);

        })

    }

    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success(' Google Registration Successful');
                navigate (location?.state ? location.state : '/login' );
            })
            .catch(error => {
                console.error(error)
                toast.error('Google Registration failed. Please try again.');
            })
    }









    return (

        <div className="mb-20 px-0 lg:px-24 " >

            <div className=" mt-10 flex justify-between">
                <div></div>
                <div className="mr-20">
                    <h2 className="text-gray-400"> Already An User? <span className="text-lg text-sky-400 font-semibold "> <Link to={'/login'}>Login</Link> </span></h2>
                </div>
            </div>



            <div className=' mt-0 lg:mt-6 grid lg:grid-cols-2 grid-cols-1 lg:px-10'>
                <div>
                    <img src={loginImage} className="w-96 h-96" alt="" />
                </div>

                {/* Form Start */}

                <form onSubmit={handleRegister} className="w-60  ml-10 lg:w-72">

                    <div>
                        <h2 className="text-2xl font-bold">Register Here..!</h2>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input type="text"
                            name='name'
                            placeholder="Your Name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Photo</span>
                        </label>
                        <input type="text"
                            name='image'
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email"name='email'placeholder="Your Email" className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Create Password"className="input input-bordered"
                            required />
                    </div>

                    <div className="flex space-x-3 justify-between mt-4">
                        <button type="submit" className="px-5 py-2 w-full bg-sky-400 rounded-md text-white" >Register</button>

                    </div>


                    <div className='gird grid-cols-1 mt-3 lg:grid-cols-1 '>
                        <div className="text-center">
                            <h2 className="mb-3 font-medium">Or Register With..</h2>
                        </div>
                        
                        <div className=" ml-4 lg:ml-10">

                            <Link> <button onClick={handleGoogleRegister} className=' btn btn-outline btn-info'>
                                <AiFillGoogleCircle className='w-8 h-6'></AiFillGoogleCircle></button></Link>

                            <Link> <button className='btn btn-outline btn-info'>
                                <BsFacebook className='w-8 h-6'></BsFacebook></button></Link>

                            <Link> <button className=' btn btn-outline btn-info'>
                                <AiFillLinkedin className='w-8  h-6'></AiFillLinkedin></button></Link>


                        </div>




                    </div>

                    {
            registerError && <p className="bg-indigo-600 my-5 
            font-semibold">{registerError}</p>
        }

        {

            signUpSuccess && <p className="text-indigo-600 my-5
             font-semibold">{signUpSuccess}</p>
        }



                </form>

            </div>


        </div>

    );
};

export default Register;