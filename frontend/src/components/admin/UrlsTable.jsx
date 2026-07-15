import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    FaCopy,
    FaDownload,
    FaTrash,
    FaBan,
    FaShieldAlt,
    FaTimes
} from "react-icons/fa";
import toast from "react-hot-toast";

const UrlsTable = ({ urls = [], blockUrl, deleteUrl }) => {

    const [selectedSummary, setSelectedSummary] = useState("");
    const [showModal, setShowModal] = useState(false);

    const downloadQR = (qrCode, shortCode) => {

        const link = document.createElement("a");
        link.href = qrCode;
        link.download = `${shortCode}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };

    return (

        <div
            className="shadow-sm"
            style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "#fff"
            }}
        >

            <div
                className="px-4 py-3"
                style={{
                    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                    color: "white"
                }}
            >

                <h4 className="mb-0 fw-bold">

                    All URLs

                </h4>

            </div>

            <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">

                        <tr>

                            <th>Original URL</th>
                            <th>Owner</th>
                            <th>Short URL</th>
                            <th>QR Code</th>
                            <th>Clicks</th>
                            <th>Status</th>
                            <th>AI Security</th>
                            <th>AI Summary</th>
                            <th width="220">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            urls.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="9"
                                            className="text-center py-5"
                                        >

                                            No URLs Found

                                        </td>

                                    </tr>

                                )

                                :

                                urls.map((url) => (

                                    <tr key={url._id}>

                                        <td style={{ maxWidth: "220px" }}>

                                            <small>

                                                {url.originalUrl}

                                            </small>

                                        </td>

                                        <td>

                                            <strong>

                                                {url.user?.name || "Unknown"}

                                            </strong>

                                            <br />

                                            <small className="text-muted">

                                                {url.user?.email}

                                            </small>

                                        </td>

                                        <td>

                                            <a
                                                href={url.shortUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >

                                                {url.shortCode}

                                            </a>

                                            <CopyToClipboard
                                                text={url.shortUrl}
                                                onCopy={() =>
                                                    toast.success("Short URL Copied!")
                                                }
                                            >

                                                <button className="btn btn-outline-primary btn-sm ms-2">

                                                    <FaCopy />

                                                </button>

                                            </CopyToClipboard>

                                        </td>

                                        <td className="text-center">

                                            <img
                                                src={url.qrCode}
                                                alt="QR"
                                                width="65"
                                                className="border rounded"
                                            />

                                            <br />

                                            <button
                                                className="btn btn-success btn-sm mt-2"
                                                onClick={() =>
                                                    downloadQR(
                                                        url.qrCode,
                                                        url.shortCode
                                                    )
                                                }
                                            >

                                                <FaDownload className="me-1" />

                                                Download

                                            </button>

                                        </td>

                                        <td>

                                            <strong>

                                                {url.clicks}

                                            </strong>

                                        </td>

                                        <td>

                                            {

                                                url.isActive ?

                                                    (

                                                        <span className="badge bg-success">

                                                            Active

                                                        </span>

                                                    )

                                                    :

                                                    (

                                                        <span className="badge bg-danger">

                                                            Blocked

                                                        </span>

                                                    )

                                            }

                                        </td>

                                        <td>

                                            {

                                                url.phishingStatus === "Safe" ?

                                                    (

                                                        <span className="badge bg-success">

                                                            <FaShieldAlt className="me-1" />

                                                            Safe

                                                        </span>

                                                    )

                                                    :

                                                    url.phishingStatus === "Malicious" ?

                                                        (

                                                            <span className="badge bg-danger">

                                                                Malicious

                                                            </span>

                                                        )

                                                        :

                                                        (

                                                            <span className="badge bg-warning text-dark">

                                                                Unknown

                                                            </span>

                                                        )

                                            }

                                        </td>

                                        <td>

                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => {

                                                    setSelectedSummary(
                                                        url.summary ||
                                                        "No AI Summary Available."
                                                    );

                                                    setShowModal(true);

                                                }}
                                            >

                                                View

                                            </button>

                                        </td>

                                        <td>

                                            <button
                                                className={`btn btn-sm me-2 ${
                                                    url.isActive
                                                        ? "btn-warning"
                                                        : "btn-success"
                                                }`}
                                                onClick={() =>
                                                    blockUrl(url._id)
                                                }
                                            >

                                                <FaBan className="me-1" />

                                                {

                                                    url.isActive

                                                        ? "Block"

                                                        : "Unblock"

                                                }

                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    deleteUrl(url._id)
                                                }
                                            >

                                                <FaTrash className="me-1" />

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                        }

                    </tbody>

                </table>

            </div>
                        {/* AI Summary Modal */}

            {

                showModal && (

                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9999
                        }}
                    >

                        <div
                            className="card shadow-lg"
                            style={{
                                width: "700px",
                                maxWidth: "90%",
                                borderRadius: "18px",
                                overflow: "hidden",
                                animation: "fadeIn 0.25s ease-in-out"
                            }}
                        >

                            {/* Modal Header */}

                            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

                                <h4 className="mb-0">

                                    🤖 AI Generated Summary

                                </h4>

                                <button
                                    className="btn btn-light btn-sm"
                                    onClick={() => setShowModal(false)}
                                >

                                    <FaTimes />

                                </button>

                            </div>

                            {/* Modal Body */}

                            <div
                                className="card-body"
                                style={{
                                    maxHeight: "400px",
                                    overflowY: "auto",
                                    lineHeight: "30px",
                                    fontSize: "16px"
                                }}
                            >

                                {selectedSummary}

                            </div>

                            {/* Modal Footer */}

                            <div className="card-footer text-end">

                                <button
                                    className="btn btn-primary"
                                    onClick={() => setShowModal(false)}
                                >

                                    Close

                                </button>

                            </div>

                        </div>

                    </div>

                )

            }

        </div>

    );

};

export default UrlsTable;