import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🔗 Smart AI URL
        </Link>

        <div>
          <Link to="/login" className="btn btn-outline-light me-2">
            Login
          </Link>

          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;