import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaDownload, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const UrlTable = ({ urls, deleteUrl }) => {
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
                <h4 className="mb-0">My URLs</h4>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>Original URL</th>
                            <th>Short URL</th>
                            <th>QR Code</th>
                            <th>Clicks</th>
                            <th>Status</th>
                            <th>AI Summary</th>
                            <th width="180">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {urls.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">
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

                                    <td>
                                        <img
                                            src={url.qrCode}
                                            alt="QR"
                                            width="70"
                                            className="rounded border"
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

                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteUrl(url._id)}
                                        >
                                            <FaTrash className="me-1" />
                                            Delete
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

export default UrlTable;