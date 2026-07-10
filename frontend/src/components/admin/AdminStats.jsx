const AdminStats = ({ dashboard }) => {

    return (

        <div className="row mb-4">

            <div className="col-md-3">

                <div className="card shadow text-center p-3">

                    <h5>Users</h5>

                    <h2>{dashboard.totalUsers}</h2>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card shadow text-center p-3">

                    <h5>URLs</h5>

                    <h2>{dashboard.totalUrls}</h2>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card shadow text-center p-3">

                    <h5>Clicks</h5>

                    <h2>{dashboard.totalClicks}</h2>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card shadow text-center p-3">

                    <h5>Safe URLs</h5>

                    <h2>{dashboard.safeUrls}</h2>

                </div>

            </div>

        </div>

    );

};

export default AdminStats;