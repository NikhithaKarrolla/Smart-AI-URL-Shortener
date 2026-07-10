import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
  FaUserShield
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

  const location = useLocation();

  const { user, logout } = useAuth();

  return (

    <div
      className="bg-dark text-white vh-100 p-3"
      style={{
        width: "250px",
        position: "fixed"
      }}
    >

      <h3 className="mb-5 fw-bold">

        🔗 Smart AI

      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">

          <Link
            to="/dashboard"
            className={`nav-link text-white ${
              location.pathname === "/dashboard"
                ? "fw-bold"
                : ""
            }`}
          >

            <FaHome className="me-2" />

            Dashboard

          </Link>

        </li>

        <li className="nav-item mb-3">

          <Link
            to="/analytics"
            className="nav-link text-white"
          >

            <FaChartBar className="me-2" />

            Analytics

          </Link>

        </li>

        <li className="nav-item mb-3">

          <Link
            to="/profile"
            className="nav-link text-white"
          >

            <FaUser className="me-2" />

            Profile

          </Link>

        </li>

        {

          user?.role === "admin" &&

          <li className="nav-item mb-3">

            <Link
              to="/admin"
              className="nav-link text-warning"
            >

              <FaUserShield className="me-2" />

              Admin

            </Link>

          </li>

        }

      </ul>

      <button
        className="btn btn-danger mt-5 w-100"
        onClick={logout}
      >

        <FaSignOutAlt />

        {" "}Logout

      </button>

    </div>

  );

};

export default Sidebar;