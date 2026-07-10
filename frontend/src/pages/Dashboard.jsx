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
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const [stats, setStats] = useState({
        totalUrls: 0,
        totalClicks: 0,
        safeUrls: 0,
        blockedUrls: 0
    });

    // ==============================
    // Load Dashboard
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

            console.log(err);

            toast.error("Failed to load dashboard");

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

                "Failed to create URL"

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

        catch {

            toast.error("Delete Failed");

        }

    };

    // ==============================
    // Search + Filter
    // ==============================

    const filteredUrls = urls.filter((url) => {

        const matchSearch =

            url.originalUrl
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            url.shortCode
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchStatus =

            statusFilter === "All"

            ||

            url.phishingStatus === statusFilter;

        return matchSearch && matchStatus;

    });

    // ==============================
    // Pagination
    // ==============================

    const totalPages = Math.ceil(filteredUrls.length / rowsPerPage);

    const paginatedUrls = filteredUrls.slice(

        (currentPage - 1) * rowsPerPage,

        currentPage * rowsPerPage

    );

    if (loading) {

        return (

            <h2 className="text-center mt-5">

                Loading...

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

                <div className="container py-4">

                    <DashboardStats stats={stats} />

                    <CreateUrlForm createUrl={createUrl} />

                    {/* Search + Filter */}

                    <div className="card shadow mb-4">

                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-8">

                                    <input
                                        className="form-control"
                                        placeholder="Search Original URL or Short Code..."
                                        value={search}
                                        onChange={(e) => {

                                            setSearch(e.target.value);

                                            setCurrentPage(1);

                                        }}
                                    />

                                </div>

                                <div className="col-md-4">

                                    <select
                                        className="form-select"
                                        value={statusFilter}
                                        onChange={(e) => {

                                            setStatusFilter(e.target.value);

                                            setCurrentPage(1);

                                        }}
                                    >

                                        <option>All</option>

                                        <option>Safe</option>

                                        <option>Unknown</option>

                                        <option>Malicious</option>

                                    </select>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* URL Table */}

                    <UrlTable

                        urls={paginatedUrls}

                        deleteUrl={deleteUrl}

                    />

                    {/* Pagination */}

                    <div className="d-flex justify-content-center align-items-center mt-4">

                        <button
                            className="btn btn-secondary me-3"
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage(currentPage - 1)
                            }
                        >

                            Previous

                        </button>

                        <span>

                            Page {currentPage} of {totalPages || 1}

                        </span>

                        <button
                            className="btn btn-secondary ms-3"
                            disabled={
                                currentPage === totalPages ||
                                totalPages === 0
                            }
                            onClick={() =>
                                setCurrentPage(currentPage + 1)
                            }
                        >

                            Next

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Dashboard;