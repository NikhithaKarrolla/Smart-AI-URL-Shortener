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

                <div className="container py-5">

                    <div
                        className="card shadow mx-auto"
                        style={{ maxWidth: "650px" }}
                    >

                        <div className="card-body">

                            <div className="text-center mb-4">

                                <img
                                    src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff&size=120"
                                    alt="Profile"
                                    className="rounded-circle"
                                />

                                <h2 className="mt-3">

                                    {user?.name}

                                </h2>

                                <span className="badge bg-primary">

                                    {user?.role}

                                </span>

                            </div>

                            <hr />

                            <div className="mb-3">

                                <strong>Email</strong>

                                <p>{user?.email}</p>

                            </div>

                            <div className="mb-3">

                                <strong>Role</strong>

                                <p>{user?.role}</p>

                            </div>

                            <button
                                className="btn btn-danger w-100 mt-3"
                                onClick={logout}
                            >

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