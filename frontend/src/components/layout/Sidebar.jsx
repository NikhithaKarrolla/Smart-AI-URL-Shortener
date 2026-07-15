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
      className="text-white d-flex flex-column justify-content-between shadow-lg"
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        background: "linear-gradient(180deg,#0f172a,#1e3a8a)",
        padding: "25px 18px"
      }}
    >

      {/* Logo */}

      <div>

        <div className="text-center mb-5">

          <h2 className="fw-bold mb-1">
            🔗 Smart AI
          </h2>

          <small className="text-light opacity-75">
            URL Shortener
          </small>

        </div>

        {/* Navigation */}

        <ul className="nav flex-column">

          <li className="nav-item mb-3">

            <Link
              to="/dashboard"
              className={`nav-link rounded-3 px-3 py-3 ${
                location.pathname === "/dashboard"
                  ? "bg-white text-primary fw-bold shadow"
                  : "text-white"
              }`}
            >
              <FaHome className="me-3" />
              Dashboard
            </Link>

          </li>

          <li className="nav-item mb-3">

            <Link
              to="/analytics"
              className={`nav-link rounded-3 px-3 py-3 ${
                location.pathname === "/analytics"
                  ? "bg-white text-primary fw-bold shadow"
                  : "text-white"
              }`}
            >
              <FaChartBar className="me-3" />
              Analytics
            </Link>

          </li>

          <li className="nav-item mb-3">

            <Link
              to="/profile"
              className={`nav-link rounded-3 px-3 py-3 ${
                location.pathname === "/profile"
                  ? "bg-white text-primary fw-bold shadow"
                  : "text-white"
              }`}
            >
              <FaUser className="me-3" />
              Profile
            </Link>

          </li>

          {

            user?.role === "admin" && (

              <li className="nav-item mb-3">

                <Link
                  to="/admin"
                  className={`nav-link rounded-3 px-3 py-3 ${
                    location.pathname === "/admin"
                      ? "bg-warning text-dark fw-bold shadow"
                      : "text-warning"
                  }`}
                >
                  <FaUserShield className="me-3" />
                  Admin Panel
                </Link>

              </li>

            )

          }

        </ul>

      </div>

      {/* Bottom Section */}

      <div>

        <div
          className="rounded-4 p-3 mb-3 text-center"
          style={{
            background: "rgba(255,255,255,0.12)"
          }}
        >

          <div
            className="rounded-circle bg-white text-primary fw-bold mx-auto mb-2"
            style={{
              width: "55px",
              height: "55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px"
            }}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h6 className="mb-1">
            {user?.name}
          </h6>

          <small className="text-light">
            {user?.role?.toUpperCase()}
          </small>

        </div>

        <button
          className="btn btn-danger w-100 rounded-3 py-2 fw-semibold"
          onClick={logout}
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>

      </div>

    </div>

  );

};

export default Sidebar;