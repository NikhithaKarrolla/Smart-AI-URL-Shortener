import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaDownload, FaTrash, FaBan } from "react-icons/fa";
import toast from "react-hot-toast";

const UrlsTable = ({ urls = [], blockUrl, deleteUrl }) => {
    const downloadQR = (qrCode, shortCode) => {
        const link = document.createElement("a");
        link.href = qrCode;
        link.download = `${shortCode}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="card shadow">
            <div className="card-header bg-primary text-white">
                <h4 className="mb-0">All URLs</h4>
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
                            <th width="220">Actions</th>
                            <th>AI Summary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {urls.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="text-center py-4">
                                    No URLs Found
                                </td>
                            </tr>
                        ) : (
                            urls.map((url) => (
                                <tr key={url._id}>
                                    <td>
                                        <small>{url.originalUrl}</small>
                                    </td>

                                    <td>
                                        <strong>{url.user?.name || "Unknown"}</strong>
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
                                            width="70"
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
                                        <strong>{url.clicks}</strong>
                                    </td>

                                    <td>
                                        {url.isActive ? (
                                            <span className="badge bg-success">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="badge bg-danger">
                                                Blocked
                                            </span>
                                        )}
                                    </td>

                                    <td>
                                        <button
                                            className={`btn btn-sm me-2 ${
                                                url.isActive
                                                    ? "btn-warning"
                                                    : "btn-success"
                                            }`}
                                            onClick={() => blockUrl(url._id)}
                                        >
                                            <FaBan className="me-1" />
                                            {url.isActive
                                                ? "Block"
                                                : "Unblock"}
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

                                    <td>
                                        <button
                                            className="btn btn-info btn-sm"
                                            onClick={() =>
                                                alert(
                                                    url.summary ||
                                                        "No AI Summary Available."
                                                )
                                            }
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UrlsTable;