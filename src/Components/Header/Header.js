import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlelogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a href="/" className=" normal-case text-xl">
            <b>NOTE NIYE NAW</b>
          </a>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">{user?.displayName}</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user?.email ? (
                  <button onClick={handlelogout} className="btn btn-ghost">
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
