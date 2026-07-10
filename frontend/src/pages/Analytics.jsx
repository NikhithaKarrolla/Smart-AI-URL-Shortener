import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

    if (!data)
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

                <div className="container py-4">

                    <h2 className="mb-4">

                        Analytics Dashboard

                    </h2>

                    {/* Summary Cards */}

                    <div className="row mb-5">

                        <div className="col-md-4">

                            <div className="card shadow text-center p-4">

                                <h5>Total URLs</h5>

                                <h2>

                                    {data.summary.totalUrls}

                                </h2>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card shadow text-center p-4">

                                <h5>Total Clicks</h5>

                                <h2>

                                    {data.summary.totalClicks}

                                </h2>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card shadow text-center p-4">

                                <h5>Analytics Records</h5>

                                <h2>

                                    {data.summary.totalAnalyticsRecords}

                                </h2>

                            </div>

                        </div>

                    </div>

                    {/* Charts */}

                    <div className="row g-4">

                        <div className="col-lg-6">

                            <BrowserChart

                                browsers={data.browsers}

                            />

                        </div>

                        <div className="col-lg-6">

                            <DeviceChart

                                devices={data.devices}

                            />

                        </div>

                        <div className="col-lg-6">

                            <CountryChart

                                countries={data.countries}

                            />

                        </div>

                        <div className="col-lg-6">

                            <ReferrerChart

                                referrers={data.referrers}

                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Analytics;