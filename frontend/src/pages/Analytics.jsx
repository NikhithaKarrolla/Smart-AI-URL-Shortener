import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    FaChartLine,
    FaLink,
    FaMousePointer,
    FaGlobe
} from "react-icons/fa";

import API from "../api/axios";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import BrowserChart from "../components/analytics/BrowserChart";
import DeviceChart from "../components/analytics/DeviceChart";
import CountryChart from "../components/analytics/CountryChart";
import ReferrerChart from "../components/analytics/ReferrerChart";

const Analytics = () => {

    const [data, setData] = useState(null);

    const loadAnalytics = async () => {

        try {

            const res = await API.get("/analytics/dashboard/summary");

            setData(res.data);

        }

        catch (err) {

            toast.error("Failed to load analytics");

            console.log(err);

        }

    };

    useEffect(() => {

        loadAnalytics();

    }, []);

    if (!data) {

        return (

            <h2 className="text-center mt-5">

                Loading Analytics...

            </h2>

        );

    }

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
                        maxWidth: "1500px"
                    }}
                >

                    {/* Page Heading */}

                    <div className="mb-4">

                        <h2
                            className="fw-bold"
                            style={{
                                color: "#1e293b"
                            }}
                        >

                            <FaChartLine className="me-2" />

                            Analytics Dashboard

                        </h2>

                        <p className="text-muted mb-0">

                            View detailed analytics and monitor your shortened URLs.

                        </p>

                    </div>

                    {/* Summary Cards */}

                    <div className="row g-4 mb-5">

                        <div className="col-lg-4">

                            <div
                                className="text-white shadow-lg"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                    borderRadius: "18px",
                                    padding: "25px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <small>Total URLs</small>

                                        <h2 className="fw-bold mt-2">

                                            {data.summary.totalUrls}

                                        </h2>

                                    </div>

                                    <FaLink size={34} />

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div
                                className="text-white shadow-lg"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#16a34a,#15803d)",
                                    borderRadius: "18px",
                                    padding: "25px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <small>Total Clicks</small>

                                        <h2 className="fw-bold mt-2">

                                            {data.summary.totalClicks}

                                        </h2>

                                    </div>

                                    <FaMousePointer size={34} />

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div
                                className="text-white shadow-lg"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#ea580c,#c2410c)",
                                    borderRadius: "18px",
                                    padding: "25px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <small>Analytics Records</small>

                                        <h2 className="fw-bold mt-2">

                                            {data.summary.totalAnalyticsRecords}

                                        </h2>

                                    </div>

                                    <FaGlobe size={34} />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Charts */}

                    <div className="row g-4">

                        <div className="col-lg-6">

                            <div
                                className="card shadow-sm border-0"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div className="card-body">

                                    <h5 className="fw-bold mb-3">

                                        🌐 Browser Usage

                                    </h5>

                                    <BrowserChart
                                        browsers={data.browsers}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div
                                className="card shadow-sm border-0"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div className="card-body">

                                    <h5 className="fw-bold mb-3">

                                        💻 Device Usage

                                    </h5>

                                    <DeviceChart
                                        devices={data.devices}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div
                                className="card shadow-sm border-0"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div className="card-body">

                                    <h5 className="fw-bold mb-3">

                                        🌍 Country Analytics

                                    </h5>

                                    <CountryChart
                                        countries={data.countries}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div
                                className="card shadow-sm border-0"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div className="card-body">

                                    <h5 className="fw-bold mb-3">

                                        🔗 Referrer Sources

                                    </h5>

                                    <ReferrerChart
                                        referrers={data.referrers}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Analytics;