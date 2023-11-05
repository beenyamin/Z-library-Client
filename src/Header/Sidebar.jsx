import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2">
        {/* Navbar menu content here */}
        <NavLink
          to="/addBook"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary ' : 'btn btn-ghost '
          }
        >
          Add Book
        </NavLink>
        <NavLink
          to="/allBook"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary ' : 'btn btn-ghost '
          }
        >
         All Book
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary ' : 'btn btn-ghost '
          }
        >
          Login
        </NavLink>
      </div>
    );
};

export default Sidebar;