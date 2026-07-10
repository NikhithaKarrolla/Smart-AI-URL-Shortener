import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "../api/axios";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import DashboardStats from "../components/dashboard/DashboardStats";
import CreateUrlForm from "../components/dashboard/CreateUrlForm";
import UrlTable from "../components/dashboard/UrlTable";

const Dashboard = () => {

    const [urls, setUrls] = useState([]);

    const [stats, setStats] = useState({

        totalUrls: 0,

        totalClicks: 0,

        safeUrls: 0,

        blockedUrls: 0

    });

    const [loading, setLoading] = useState(true);

    // ==============================
    // Load Dashboard Data
    // ==============================

    const loadDashboard = async () => {

        try {

            const urlRes = await API.get("/url/myurls");

            const analyticsRes = await API.get("/analytics/dashboard/summary");

            const urlList = urlRes.data.data;

            setUrls(urlList);

            setStats({

                totalUrls: analyticsRes.data.summary.totalUrls,

                totalClicks: analyticsRes.data.summary.totalClicks,

                safeUrls: urlList.filter(

                    url => url.phishingStatus === "Safe"

                ).length,

                blockedUrls: urlList.filter(

                    url => !url.isActive

                ).length

            });

        }

        catch (err) {

            toast.error("Failed to load dashboard");

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadDashboard();

    }, []);

    // ==============================
    // Create URL
    // ==============================

    const createUrl = async (data) => {

        try {

            await API.post("/url/shorten", data);

            toast.success("Short URL Created");

            loadDashboard();

        }

        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Failed"

            );

        }

    };

    // ==============================
    // Delete URL
    // ==============================

    const deleteUrl = async (id) => {

        if (!window.confirm("Delete this URL?"))

            return;

        try {

            await API.delete(`/url/${id}`);

            toast.success("Deleted Successfully");

            loadDashboard();

        }

        catch (err) {

            toast.error("Delete Failed");

        }

    };

    if (loading)

        return <h2 className="text-center mt-5">Loading...</h2>;

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

                <div className="container">

                    <DashboardStats

                        stats={stats}

                    />

                    <CreateUrlForm

                        createUrl={createUrl}

                    />

                    <UrlTable

                        urls={urls}

                        deleteUrl={deleteUrl}

                    />

                </div>

            </div>

        </div>

    );

};

export default Dashboard;