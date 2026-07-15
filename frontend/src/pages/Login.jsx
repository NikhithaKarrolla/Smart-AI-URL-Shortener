import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaRobot,
    FaShieldAlt,
    FaChartLine
} from "react-icons/fa";

import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", form);

            login(
                res.data.token,
                res.data.user
            );

            toast.success("Login Successful");

            navigate("/dashboard");

        }

        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div
            className="container-fluid"
            style={{
                minHeight: "100vh",
                background: "#f8fafc"
            }}
        >

            <div className="row min-vh-100">

                {/* Left */}

                <div
                    className="col-lg-6 d-none d-lg-flex flex-column justify-content-center text-white p-5"
                    style={{
                        background:
                            "linear-gradient(135deg,#2563eb,#1d4ed8)"
                    }}
                >

                    <div style={{ maxWidth: "500px", margin: "0 auto" }}>

                        <FaRobot size={60} className="mb-4" />

                        <h1 className="fw-bold mb-4">

                            Smart AI URL Shortener

                        </h1>

                        <p
                            className="lead"
                            style={{
                                lineHeight: "35px"
                            }}
                        >

                            Secure your URLs with AI-powered phishing detection,
                            QR code generation and real-time analytics.

                        </p>

                        <div className="mt-5">

                            <div className="d-flex align-items-center mb-4">

                                <FaShieldAlt size={28} />

                                <span className="ms-3">

                                    AI Phishing Detection

                                </span>

                            </div>

                            <div className="d-flex align-items-center mb-4">

                                <FaChartLine size={28} />

                                <span className="ms-3">

                                    Real-Time Analytics

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="col-lg-6 d-flex align-items-center justify-content-center">

                    <div
                        className="card border-0 shadow-lg"
                        style={{
                            width: "430px",
                            borderRadius: "20px"
                        }}
                    >

                        <div className="card-body p-5">

                            <h2 className="fw-bold text-center mb-2">

                                Welcome Back

                            </h2>

                            <p className="text-center text-muted mb-4">

                                Login to your account

                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">

                                            <FaEnvelope />

                                        </span>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">

                                            <FaLock />

                                        </span>

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                        >

                                            {

                                                showPassword ?

                                                    <FaEyeSlash />

                                                    :

                                                    <FaEye />

                                            }

                                        </button>

                                    </div>

                                </div>

                                <button
                                    className="btn btn-primary w-100 py-2"
                                >

                                    Login

                                </button>

                            </form>

                            <p className="text-center mt-4 mb-0">

                                Don't have an account?

                                <Link
                                    to="/register"
                                    className="ms-2 text-decoration-none fw-bold"
                                >

                                    Register

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Login;