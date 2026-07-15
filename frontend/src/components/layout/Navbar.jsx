import { useAuth } from "../../context/AuthContext";
import {
  FaBell,
  FaUserCircle
} from "react-icons/fa";

const Navbar = () => {

  const { user } = useAuth();

  const getGreeting = () => {

    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";

  };

  return (

    <div
      className="shadow-sm d-flex justify-content-between align-items-center px-4 py-3 mb-4"
      style={{
        background: "#ffffff",
        borderRadius: "15px",
        margin: "20px",
        border: "1px solid #e5e7eb"
      }}
    >

      {/* Left */}

      <div>

        <h4
          className="fw-bold mb-1"
          style={{ color: "#1e293b" }}
        >
          {getGreeting()}, {user?.name} 👋
        </h4>

        <small
          style={{
            color: "#64748b"
          }}
        >
          Welcome back to Smart AI URL Shortener
        </small>

      </div>

      {/* Right */}

      <div className="d-flex align-items-center">

        {/* Notification */}

        <div
          className="me-4 position-relative"
          style={{
            cursor: "pointer"
          }}
        >

          <FaBell
            size={22}
            color="#475569"
          />

          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "9px",
              height: "9px",
              background: "#ef4444",
              borderRadius: "50%"
            }}
          ></span>

        </div>

        {/* Profile */}

        <div
          className="d-flex align-items-center px-3 py-2"
          style={{
            background: "#f8fafc",
            borderRadius: "12px"
          }}
        >

          <FaUserCircle
            size={40}
            color="#2563eb"
          />

          <div className="ms-3">

            <h6 className="mb-0 fw-bold">

              {user?.name}

            </h6>

            <small
              className={
                user?.role === "admin"
                  ? "text-danger fw-bold"
                  : "text-primary fw-bold"
              }
            >

              {user?.role?.toUpperCase()}

            </small>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Navbar;