import {
    
    FaEnvelope,
    FaShieldAlt,
    FaIdBadge,
    FaCalendarAlt,
    FaCheckCircle,
    FaSignOutAlt
} from "react-icons/fa";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { useAuth } from "../context/AuthContext";

const Profile = () => {

    const { user, logout } = useAuth();

    return (

        <div className="d-flex">

            <Sidebar />

            <div
                className="flex-grow-1"
                style={{
                    marginLeft: "250px",
                    background: "#f5f7fb",
                    minHeight: "100vh"
                }}
            >

                <Navbar />

                <div
                    className="container-fluid py-4 px-4"
                    style={{
                        maxWidth: "1200px"
                    }}
                >

                    {/* Heading */}

                    <div className="mb-4">

                        <h2
                            className="fw-bold"
                            style={{
                                color: "#1e293b"
                            }}
                        >

                            👤 My Profile

                        </h2>

                        <p className="text-muted">

                            Manage your account information.

                        </p>

                    </div>

                    <div className="card shadow-lg border-0">

                        {/* Top Section */}

                        <div
                            className="text-center text-white p-5"
                            style={{
                                background:
                                    "linear-gradient(135deg,#2563eb,#1d4ed8)"
                            }}
                        >

                            <img
                                src={`https://ui-avatars.com/api/?name=${user?.name}&background=ffffff&color=2563eb&size=180`}
                                alt="avatar"
                                className="rounded-circle shadow mb-3"
                            />

                            <h2 className="fw-bold">

                                {user?.name}

                            </h2>

                            <span
                                className={`badge px-4 py-2 fs-6 ${
                                    user?.role === "admin"
                                        ? "bg-warning text-dark"
                                        : "bg-light text-dark"
                                }`}
                            >

                                {user?.role?.toUpperCase()}

                            </span>

                        </div>

                        {/* Details */}

                        <div className="card-body p-5">

                            <div className="row g-4">

                                <div className="col-md-6">

                                    <div className="card border-0 shadow-sm h-100">

                                        <div className="card-body">

                                            <FaEnvelope
                                                size={22}
                                                className="text-primary mb-2"
                                            />

                                            <h6>Email</h6>

                                            <p className="mb-0">

                                                {user?.email}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="card border-0 shadow-sm h-100">

                                        <div className="card-body">

                                            <FaShieldAlt
                                                size={22}
                                                className="text-success mb-2"
                                            />

                                            <h6>Role</h6>

                                            <p className="mb-0">

                                                {user?.role}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="card border-0 shadow-sm h-100">

                                        <div className="card-body">

                                            <FaIdBadge
                                                size={22}
                                                className="text-warning mb-2"
                                            />

                                            <h6>Account ID</h6>

                                            <small>

                                                {user?._id}

                                            </small>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="card border-0 shadow-sm h-100">

                                        <div className="card-body">

                                            <FaCalendarAlt
                                                size={22}
                                                className="text-danger mb-2"
                                            />

                                            <h6>Member Since</h6>

                                            <p>

                                                {

                                                    user?.createdAt

                                                        ?

                                                        new Date(
                                                            user.createdAt
                                                        ).toLocaleDateString()

                                                        :

                                                        "N/A"

                                                }

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-12">

                                    <div className="card border-0 shadow-sm">

                                        <div className="card-body d-flex align-items-center">

                                            <FaCheckCircle
                                                size={25}
                                                className="text-success me-3"
                                            />

                                            <div>

                                                <h6 className="mb-1">

                                                    Account Status

                                                </h6>

                                                <span className="badge bg-success">

                                                    Active

                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <button
                                className="btn btn-danger btn-lg w-100 mt-5"
                                onClick={logout}
                            >

                                <FaSignOutAlt className="me-2" />

                                Logout

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;