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

    const loadData = async () => {

        try {

            const dashboardRes =
                await API.get("/admin/dashboard");

            const usersRes =
                await API.get("/admin/users");

            const urlsRes =
                await API.get("/admin/urls");

            setDashboard(dashboardRes.data.dashboard);

            setUsers(usersRes.data.users);

            setUrls(urlsRes.data.urls);

        }

        catch (err) {

            console.log(err);

            toast.error("Unable to load admin dashboard.");

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadData();

    }, []);

    const changeRole = async (id) => {

        try {

            await API.put(`/admin/user/${id}`);

            toast.success("Role Updated");

            loadData();

        }

        catch {

            toast.error("Failed");

        }

    };

    const blockUrl = async (id) => {

        try {

            await API.patch(`/admin/block/${id}`);

            toast.success("Status Updated");

            loadData();

        }

        catch {

            toast.error("Failed");

        }

    };

    const deleteUrl = async (id) => {

        if (!window.confirm("Delete this URL?"))
            return;

        try {

            await API.delete(`/admin/url/${id}`);

            toast.success("URL Deleted");

            loadData();

        }

        catch {

            toast.error("Delete Failed");

        }

    };

    if (loading)
        return <Loader />;

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

                    <UsersTable
                        users={users}
                        changeRole={changeRole}
                    />

                    <UrlsTable
                        urls={urls}
                        blockUrl={blockUrl}
                        deleteUrl={deleteUrl}
                    />

                </div>

            </div>

        </div>

    );

};

export default AdminDashboard;