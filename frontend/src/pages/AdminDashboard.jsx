import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "../api/axios";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import AdminStats from "../components/admin/AdminStats";
import UsersTable from "../components/admin/UsersTable";
import UrlsTable from "../components/admin/UrlsTable";
    
import Loader from "../components/common/Loader";

const AdminDashboard = () => {

    const [dashboard, setDashboard] = useState({
        totalUsers: 0,
        totalUrls: 0,
        totalClicks: 0,
        safeUrls: 0
    });

    const [users, setUsers] = useState([]);
    const [urls, setUrls] = useState([]);

    const [loading, setLoading] = useState(true);

    const [userSearch, setUserSearch] = useState("");
    const [urlSearch, setUrlSearch] = useState("");

    // ===========================
    // Load Dashboard
    // ===========================

    const loadDashboard = async () => {

        try {

            setLoading(true);

            const dashboardRes = await API.get("/admin/dashboard");
            const usersRes = await API.get("/admin/users");
            const urlsRes = await API.get("/admin/urls");

            setDashboard(
                dashboardRes.data.dashboard
            );

            setUsers(
                usersRes.data.users
            );

            setUrls(
                urlsRes.data.urls
            );

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to load Admin Dashboard");

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadDashboard();

    }, []);

    // ===========================
    // Change User Role
    // ===========================

    const changeRole = async (id) => {

        try {

            await API.put(`/admin/user/${id}`);

            toast.success("Role Updated");

            loadDashboard();

        }

        catch (err) {

            console.log(err);

            toast.error("Unable to update role");

        }

    };

    // ===========================
    // Block / Unblock URL
    // ===========================

    const blockUrl = async (id) => {

        try {

            await API.patch(`/admin/block/${id}`);

            toast.success("URL Status Updated");

            loadDashboard();

        }

        catch (err) {

            console.log(err);

            toast.error("Operation Failed");

        }

    };

    // ===========================
    // Delete URL
    // ===========================

    const deleteUrl = async (id) => {

        if (!window.confirm("Delete this URL?"))
            return;

        try {

            await API.delete(`/admin/url/${id}`);

            toast.success("URL Deleted");

            loadDashboard();

        }

        catch (err) {

            console.log(err);

            toast.error("Delete Failed");

        }

    };

    // ===========================
    // Search Filters
    // ===========================

    const filteredUsers = users.filter(user =>

        user.name
            .toLowerCase()
            .includes(userSearch.toLowerCase())

        ||

        user.email
            .toLowerCase()
            .includes(userSearch.toLowerCase())

    );

    const filteredUrls = urls.filter(url =>

        url.originalUrl
            .toLowerCase()
            .includes(urlSearch.toLowerCase())

        ||

        url.shortCode
            .toLowerCase()
            .includes(urlSearch.toLowerCase())

    );

    if (loading) {

        return <Loader />;

    }
console.log("AdminDashboard blockUrl:", blockUrl);
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

                <div className="container py-4">

                    <h2 className="mb-4">

                        Admin Dashboard

                    </h2>

                    <AdminStats
                        dashboard={dashboard}
                    />

                    {/* Users */}

                    <div className="card shadow mb-4">

                        <div className="card-header bg-primary text-white">

                            <h5 className="mb-0">

                                Users

                            </h5>

                        </div>

                        <div className="card-body">

                            <input
                                className="form-control mb-3"
                                placeholder="Search Users..."
                                value={userSearch}
                                onChange={(e)=>
                                    setUserSearch(e.target.value)
                                }
                            />

                            <UsersTable
                                users={filteredUsers}
                                changeRole={changeRole}
                            />

                        </div>

                    </div>

                    {/* URLs */}

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">

                            <h5 className="mb-0">

                                URL Management

                            </h5>

                        </div>

                        <div className="card-body">

                            <input
                                className="form-control mb-3"
                                placeholder="Search URLs..."
                                value={urlSearch}
                                onChange={(e)=>
                                    setUrlSearch(e.target.value)
                                }
                            />

                            <UrlsTable
                                urls={filteredUrls}
                                blockUrl={blockUrl}
                                deleteUrl={deleteUrl}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AdminDashboard;