import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

const Navbar = () => {

    return (

        <nav
            className="navbar navbar-expand-lg sticky-top shadow-sm"
            style={{
                background: "#ffffff",
                padding: "15px 0"
            }}
        >

            <div className="container">

                <Link
                    className="navbar-brand d-flex align-items-center fw-bold"
                    to="/"
                    style={{
                        fontSize: "1.6rem",
                        color: "#2563eb"
                    }}
                >

                    <div
                        className="me-2"
                        style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "12px",
                            background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >

                        <FaRobot size={22} />

                    </div>

                    Smart AI URL

                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item me-3">

                            <a
                                href="#features"
                                className="nav-link fw-semibold"
                                style={{ color: "#475569" }}
                            >

                                Features

                            </a>

                        </li>

                        <li className="nav-item me-3">

                            <a
                                href="#about"
                                className="nav-link fw-semibold"
                                style={{ color: "#475569" }}
                            >

                                About

                            </a>

                        </li>

                        <li className="nav-item me-3">

                            <Link
                                to="/login"
                                className="btn btn-outline-primary px-4"
                                style={{
                                    borderRadius: "12px"
                                }}
                            >

                                Login

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                to="/register"
                                className="btn px-4 text-white"
                                style={{
                                    borderRadius: "12px",
                                    background:
                                        "linear-gradient(135deg,#2563eb,#1d4ed8)"
                                }}
                            >

                                Get Started

                            </Link>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

};

export default Navbar;