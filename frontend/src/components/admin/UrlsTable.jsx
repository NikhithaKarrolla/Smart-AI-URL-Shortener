const UrlsTable = ({ urls, blockUrl, deleteUrl }) => {

    return (

        <div className="card shadow">

            <div className="card-header">

                <h4>All URLs</h4>

            </div>

            <table className="table">

                <thead>

                    <tr>

                        <th>Original URL</th>

                        <th>Owner</th>

                        <th>Clicks</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        urls.map(url=>(

                            <tr key={url._id}>

                                <td>

                                    {url.originalUrl}

                                </td>

                                <td>

                                    {url.user?.name}

                                </td>

                                <td>

                                    {url.clicks}

                                </td>

                                <td>

                                    {

                                        url.isActive

                                        ?

                                        <span className="badge bg-success">

                                            Active

                                        </span>

                                        :

                                        <span className="badge bg-danger">

                                            Blocked

                                        </span>

                                    }

                                </td>

                                <td>

                                    <button

                                        className="btn btn-warning btn-sm me-2"

                                        onClick={()=>blockUrl(url._id)}

                                    >

                                        {

                                            url.isActive

                                            ?

                                            "Block"

                                            :

                                            "Unblock"

                                        }

                                    </button>

                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={()=>deleteUrl(url._id)}

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default UrlsTable;