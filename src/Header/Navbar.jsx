import { NavLink } from "react-router-dom";
import Image from "../../public/FB_IMG_1683207138728.jpg"
import navImage from "../../public/logo.webp"



const Navbar = () => {

  return (
    <div>

      <div className="navbar ">

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

          <img src={navImage} className="w-28" alt="" />


          <div className="  ml-48 hidden lg:block items-center gap-2">
            {/* Navbar menu content here */}

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'btn btn-info btn-sm text-white' : 'btn btn-ghost btn-sm'
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

          
          </div>



        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>



          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={Image} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              <li><a>Logout</a></li>
            </ul>
          </div>


        </div>
      </div>

    </div>

  );
};

export default Navbar;