import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../public/Computer login-bro.png"
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, googleLogin } = useAuth(); 
    const navigate = useNavigate();
 
    const handleLogin = async (e) => {

        e.preventDefault();
        const toastId = toast.loading('Logging in ...');
    
        try {
          await login(email, password);
          toast.success('Logged in', { id: toastId });
          navigate('/');
        } catch (error) {
          toast.error(error.message, { id: toastId });
        }

    }

    const handleGoogleLogin = async () => {
        const toastId = toast.loading('Logging in ...');
    
        try {
          await googleLogin(email, password);
          toast.success('Logged in', { id: toastId }); 
          navigate('/');
        } catch (error) {
          toast.error(error.message, { id: toastId });
        }
      };

      
    return (

        <div className="mb-20 px-0 lg:px-24">

            <div className=" mt-10 flex justify-between">
                <div></div>
                <div className="mr-20">
                    <h2 className="text-gray-400"> New Here? <span className="text-lg text-sky-400 font-semibold "> <Link to={'/register'}>Register</Link> </span></h2>
                </div>
            </div>


            <div className=' mt-0 lg:mt-6 grid lg:grid-cols-2 grid-cols-1 lg:px-10'>
                <div>
                    <img src={loginImage} className="w-96 h-96" alt="" />
                </div>

                {/* Form Start */}

        <form onSubmit={handleLogin} className="w-60 space-y-3 ml-10 lg:w-72">

            <div>

                <h2 className="text-2xl font-semibold">Welcome Back ..!</h2>
                <p className="text-gray-400 ">Login to continue</p>

            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text dark:text-white">Email</span>
                </label>
                <input type="email"
                 name='email'
                 placeholder="Your Email" 
                 className="input input-bordered"
                 required 
                 onBlur={(e) => setEmail(e.target.value)}

                
                />
            </div>



            <div className="form-control">
                <label className="label">
                    <span className="label-text dark:text-white">Password</span>
                </label>
                <input type="password"
                  name='password'
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required 
                  onBlur={(e) => setPassword(e.target.value)}

                />

            </div>

            <div className="flex space-x-3 justify-between mt-4">
                <button type="submit" className="px-5 py-2 bg-sky-400 rounded-full text-white" >Log in</button>
                <p className="lg:mt-2 text-gray-300">Forget Password</p>
            </div>



            <div className='gird grid-cols-1 lg:grid-cols-1 '>

                <div className="text-center">
                    <h2 className="mb-3 font-medium">Log in With</h2>

                </div>

                <div className=" ml-4 lg:ml-10">

    <Link> <button onClick={handleGoogleLogin }  className=' btn btn-outline btn-info'>
    <AiFillGoogleCircle className='w-8 h-6'></AiFillGoogleCircle></button></Link>

    <Link> <button className='btn btn-outline btn-info'>
    <BsFacebook className='w-8 h-6'></BsFacebook></button></Link>

    <Link> <button className=' btn btn-outline btn-info'>
    <AiFillLinkedin className='w-8  h-6'></AiFillLinkedin></button></Link>

    
             
             
                </div>


 

            </div>



        </form>

            </div>


        </div>
    );
};

export default Login;