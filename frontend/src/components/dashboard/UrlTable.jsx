import { FaTrash, FaExternalLinkAlt } from "react-icons/fa";

const UrlTable = ({ urls, deleteUrl }) => {

    return (

        <div className="card shadow">

            <div className="card-header">

                <h4>My URLs</h4>

            </div>

            <div className="table-responsive">

                <table className="table table-hover align-middle">

                    <thead>

                        <tr>

                            <th>Original URL</th>

                            <th>Short URL</th>

                            <th>QR</th>

                            <th>Category</th>

                            <th>Status</th>

                            <th>Clicks</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            urls.length === 0 ?

                            (

                                <tr>

                                    <td

                                        colSpan="7"

                                        className="text-center"

                                    >

                                        No URLs Yet

                                    </td>

                                </tr>

                            )

                            :

                            urls.map(url => (

                                <tr key={url._id}>

                                    <td>

                                        <small>

                                            {url.originalUrl}

                                        </small>

                                    </td>

                                    <td>

                                        <a

                                            href={url.shortUrl}

                                            target="_blank"

                                            rel="noreferrer"

                                        >

                                            {url.shortCode}

                                            <FaExternalLinkAlt

                                                className="ms-2"

                                            />

                                        </a>

                                    </td>

                                    <td>

                                        <img

                                            src={url.qrCode}

                                            width="70"

                                            alt="QR"

                                        />

                                    </td>

                                    <td>

                                        {url.category}

                                    </td>

                                    <td>

                                        <span

                                            className={`badge ${

                                                url.phishingStatus === "Safe"

                                                ?

                                                "bg-success"

                                                :

                                                "bg-warning"

                                            }`}

                                        >

                                            {url.phishingStatus}

                                        </span>

                                    </td>

                                    <td>

                                        {url.clicks}

                                    </td>

                                    <td>

                                        <button

                                            className="btn btn-danger btn-sm"

                                            onClick={() =>

                                                deleteUrl(url._id)

                                            }

                                        >

                                            <FaTrash />

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default UrlTable;