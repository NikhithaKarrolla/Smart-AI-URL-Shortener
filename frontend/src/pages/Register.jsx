import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaRobot,
    FaShieldAlt,
    FaChartLine
} from "react-icons/fa";

import API from "../api/axios";

const Register = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({

        name: "",
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

            await API.post(

                "/auth/register",

                form

            );

            toast.success(

                "Registration Successful"

            );

            navigate("/login");

        }

        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Registration Failed"

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

                {/* Left Side */}

                <div
                    className="col-lg-6 d-none d-lg-flex flex-column justify-content-center text-white p-5"
                    style={{
                        background:
                            "linear-gradient(135deg,#2563eb,#1d4ed8)"
                    }}
                >

                    <div
                        style={{
                            maxWidth: "500px",
                            margin: "0 auto"
                        }}
                    >

                        <FaRobot
                            size={60}
                            className="mb-4"
                        />

                        <h1 className="fw-bold mb-4">

                            Smart AI URL Shortener

                        </h1>

                        <p
                            className="lead"
                            style={{
                                lineHeight: "35px"
                            }}
                        >

                            Join our AI-powered platform and
                            shorten URLs securely with phishing
                            detection, QR code generation and
                            real-time analytics.

                        </p>

                        <div className="mt-5">

                            <div className="d-flex align-items-center mb-4">

                                <FaShieldAlt size={28} />

                                <span className="ms-3">

                                    AI Security

                                </span>

                            </div>

                            <div className="d-flex align-items-center">

                                <FaChartLine size={28} />

                                <span className="ms-3">

                                    Smart Analytics

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="col-lg-6 d-flex align-items-center justify-content-center">

                    <div
                        className="card border-0 shadow-lg"
                        style={{
                            width: "450px",
                            borderRadius: "20px"
                        }}
                    >

                        <div className="card-body p-5">

                            <h2 className="fw-bold text-center mb-2">

                                Create Account

                            </h2>

                            <p className="text-center text-muted mb-4">

                                Start your AI URL management journey

                            </p>

                            <form onSubmit={handleSubmit}>

                                {/* Name */}

                                <div className="mb-3">

                                    <label className="form-label">

                                        Full Name

                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">

                                            <FaUser />

                                        </span>

                                        <input

                                            type="text"

                                            name="name"

                                            className="form-control"

                                            placeholder="Enter your full name"

                                            value={form.name}

                                            onChange={handleChange}

                                            required

                                        />

                                    </div>

                                </div>

                                {/* Email */}

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

                                {/* Password */}

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

                                            placeholder="Create password"

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

                                                showPassword

                                                    ?

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

                                    Create Account

                                </button>

                            </form>

                            <p className="text-center mt-4 mb-0">

                                Already have an account?

                                <Link
                                    to="/login"
                                    className="ms-2 text-decoration-none fw-bold"
                                >

                                    Login

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Register;