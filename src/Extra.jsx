
import loginImage from '../../assets/images/login/login.svg'
import { BsFacebook} from 'react-icons/bs';
import { AiFillLinkedin} from 'react-icons/ai';
import { AiFillGoogleCircle} from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';



const Login = () => {

  const { signIn } = useContext(AuthContext);
  const location = useLocation ();
  const navigate = useNavigate ();
  console.log(location);

  const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;


      signIn(email, password)
          .then(result => {
              const loggedInUser = result.user;
              console.log(loggedInUser);
              const user = {email};
            

           //  get jwt access tokens
          axios.post ('https://car-dorctor-server-v1.vercel.app/jwt', user, 
          {
            withCredentials: true
          })
          .then (res => {
            console.log(res.data);
            if (res.data.success) {
              navigate (location?.state ? location?.state : '/')

              
            }
          })

          })
          .catch(error => console.log(error));
  }


    return (
        <div>


            <div className='my-20 grid lg:grid-cols-2 grid-cols-1 lg:px-10 '>

                <div className='' >

                    <img src={loginImage} className='w-96' alt="" />
                </div>

                <div className='lg:px-10  lg:mr-9  '>

     <form onSubmit={handleLogin} className="card-body rounded-lg  bg-gray-200">
      
        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="Email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="text-white bg-red-500 w-full text-lg font-medium px-4 py-2 rounded-lg">Login</button>
        </div>

        
        <p className='text-center dark:text-black text-lg font-medium my-3'>Or Sign up With</p>
        
        <div className='flex items-center space-x-3 justify-center '>
       
          <Link> <button className='btn btn-outline btn-error'><BsFacebook className='w-8 h-6'></BsFacebook></button></Link>
          <Link>  <button className=' btn btn-outline btn-error'><AiFillLinkedin className='w-8  h-6'></AiFillLinkedin></button></Link>
          <Link> <button  className=' btn btn-outline btn-error'><AiFillGoogleCircle className='w-8 h-6'></AiFillGoogleCircle></button></Link>

         
           

        </div>

        <p className='text-center dark:text-black  text-lg font-medium '>Don't Have an account? <Link to={'/register'} className='text-red-500'>Sign up</Link></p>


      </form>



                </div>



            </div>



        </div>
    );
};

export default Login;