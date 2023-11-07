import { Link, NavLink } from "react-router-dom";
import navImage from "../../public/logo.webp"
import { useTheme } from "../Hooks/useTheme";
import { BiSun} from 'react-icons/bi';
import { HiOutlineMoon} from 'react-icons/hi';
import { BiLogInCircle} from 'react-icons/bi';
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";



const Navbar = () => {

  const  {changeTheme , mode} = useTheme()
  const { user, logOut } = useAuth();

  const logOutBtn = () => {
    logOut()

      .then(() => {
        toast.success('Successfully Logout')
      }).catch((error) => {
        toast.error(error)
      });
  }



  return (
    <div>

      <div className="navbar  ">

        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'btn btn-sm btn-info text-white' : 'btn btn-ghost btn-sm'
                }

              >
                Home
              </NavLink>

              <NavLink
                to="/addBook"
                className={({ isActive }) =>
                  isActive ? 'btn btn-info btn-sm text-white' : 'btn btn-ghost btn-sm'
                }
              >
                Add Book
              </NavLink>
              <NavLink
                to="/allBooks"
                className={({ isActive }) =>
                  isActive ? 'btn btn-info btn-sm text-white' : 'btn btn-ghost btn-sm'
                }
              >
                All Books
              </NavLink>


              <NavLink
                to="/borrowedBooks"
                className={({ isActive }) =>
                  isActive ? 'btn btn-info btn-sm text-white' : 'btn btn-ghost btn-sm'
                }
              >
                Borrowed Book
              </NavLink>

            </ul>
          </div>
        </div>





        <div className="navbar-center">

          <img src={navImage} className="w-28 mr-10 lg:mr-0" alt="" />


          <div className="  ml-60 hidden lg:block items-center space-x-5">
            {/* Navbar menu content here */}

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? ' text-sky-400 font-bold' : ' font-bold dark:text-white text-black hover:text-pink-400 '
              }

            >
              Home
            </NavLink>

            <NavLink
              to="/addBook"
              className={({ isActive }) =>
                isActive ? 'text-sky-400 font-bold' : ' font-bold dark:text-white text-black hover:text-pink-400'
              }
            >
              Add Book
            </NavLink>
            <NavLink
              to="/allBooks"
              className={({ isActive }) =>
                isActive ? 'text-sky-400 font-bold' : ' font-bold dark:text-white text-black hover:text-pink-400'
              }
            >
              All Books
            </NavLink>


            <NavLink
              to="/borrowedBooks"
              className={({ isActive }) =>
                isActive ? 'text-sky-400 font-bold' : ' font-bold dark:text-white text-black hover:text-pink-400'
              }
            >
              Borrowed Book
            </NavLink>


          </div>



        </div>

        {/* <div className="navbar-end"> */}




        <div className="navbar-end">

        <div className="">

<button onClick={changeTheme} className=" bg-sky-400 px-2 mr-1 lg:mr-3 py-2 rounded-full ">    
{ mode === "dark" ?  <BiSun className="w-6 h-5 "></BiSun> :

<HiOutlineMoon className="w-6 text-white h-5">
  </HiOutlineMoon> }
  </button> 


</div>





          {
            user?.email ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />

                </div>
                <span>{user.displayName}</span>

              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-200 rounded-box w-60">
                <li>
                  <button className="btn btn-sm  btn-info">{user.email}</button>

                </li>
                <li>
                  <button className="btn btn-sm border-spacing-1 mt-3  "
                    onClick={logOutBtn}
                  >Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to={'/login'}> <button className="btn btn-info 
                btn-sm text-white "> 
                <BiLogInCircle className="lg:h-5 lg:w-5 hidden lg:block"></BiLogInCircle>
                Login </button></Link>
          }
        </div>






        {/* </div> */}
      </div>

    </div>

  );
};

export default Navbar;