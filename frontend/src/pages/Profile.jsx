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

                    <div className="row justify-content-center">

                        <div className="col-lg-8">

                            <div className="card shadow border-0">

                                <div className="card-body p-5">

                                    <div className="text-center">

                                        <img

                                            src={`https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff&size=150`}

                                            className="rounded-circle shadow"

                                            alt="avatar"

                                        />

                                        <h2 className="mt-4">

                                            {user?.name}

                                        </h2>

                                        <span className="badge bg-primary">

                                            {user?.role?.toUpperCase()}

                                        </span>

                                    </div>

                                    <hr className="my-4"/>

                                    <div className="row">

                                        <div className="col-md-6">

                                            <h6>Email</h6>

                                            <p>{user?.email}</p>

                                        </div>

                                        <div className="col-md-6">

                                            <h6>Role</h6>

                                            <p>{user?.role}</p>

                                        </div>

                                        <div className="col-md-6">

                                            <h6>Account ID</h6>

                                            <p>{user?._id}</p>

                                        </div>

                                        <div className="col-md-6">

                                            <h6>Member Since</h6>

                                            <p>

                                                {

                                                    user?.createdAt

                                                    ?

                                                    new Date(user.createdAt).toLocaleDateString()

                                                    :

                                                    "N/A"

                                                }

                                            </p>

                                        </div>

                                    </div>

                                    <button

                                        className="btn btn-danger w-100 mt-4"

                                        onClick={logout}

                                    >

                                        Logout

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;