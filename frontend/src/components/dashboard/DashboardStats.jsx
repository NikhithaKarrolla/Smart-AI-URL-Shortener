const DashboardStats = ({ stats }) => {

    return (

        <div className="row mb-4">

            <div className="col-md-3">

                <div className="card shadow p-3">

                    <h5>Total URLs</h5>

                    <h2>{stats.totalUrls}</h2>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card shadow p-3">

                    <h5>Total Clicks</h5>

                    <h2>{stats.totalClicks}</h2>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card shadow p-3">

                    <h5>Safe URLs</h5>

                    <h2>{stats.safeUrls}</h2>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card shadow p-3">

                    <h5>Blocked URLs</h5>

                    <h2>{stats.blockedUrls}</h2>

                </div>

            </div>

        </div>

    );

};

export default DashboardStats;