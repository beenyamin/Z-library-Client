
import { Link } from "react-router-dom";
import loginImage from "../../public/register.png"
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';

const Register = () => {
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

                <form className="w-60  ml-10 lg:w-72">

                    <div>
                        <h2 className="text-2xl font-bold">Register Here..!</h2>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Photo</span>
                        </label>
                        <input type="text" name='Photo' placeholder="Your Photo" className="input input-bordered" required />
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Create Password"
                            className="input input-bordered" required />

                    </div>

                    <div className="flex space-x-3 justify-between mt-4">
                        <button className="px-5 py-2 w-full bg-sky-400 rounded-md text-white" >Register</button>

                    </div>


                    <div className='gird grid-cols-1 mt-3 lg:grid-cols-1 '>

                        <div className="text-center">
                            <h2 className="mb-3 font-medium">Or Register With..</h2>
                        </div>
                        <div className=" ml-4 lg:ml-10">

                        <Link> <button className=' btn btn-outline btn-info'>
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

export default Register;