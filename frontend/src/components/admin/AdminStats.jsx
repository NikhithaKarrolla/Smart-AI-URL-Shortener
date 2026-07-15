import {
    FaUsers,
    FaLink,
    FaMousePointer,
    FaShieldAlt,
    FaExclamationTriangle
} from "react-icons/fa";

const AdminStats = ({ dashboard }) => {

    const cards = [

        {
            title: "Total Users",
            value: dashboard.totalUsers,
            icon: <FaUsers size={30} />,
            bg: "linear-gradient(135deg,#2563eb,#1d4ed8)"
        },

        {
            title: "Total URLs",
            value: dashboard.totalUrls,
            icon: <FaLink size={30} />,
            bg: "linear-gradient(135deg,#16a34a,#15803d)"
        },

        {
            title: "Total Clicks",
            value: dashboard.totalClicks,
            icon: <FaMousePointer size={30} />,
            bg: "linear-gradient(135deg,#ea580c,#c2410c)"
        },

        {
            title: "Safe URLs",
            value: dashboard.safeUrls,
            icon: <FaShieldAlt size={30} />,
            bg: "linear-gradient(135deg,#0891b2,#0e7490)"
        }

    ];

    return (

        <div className="row g-4 mb-4">

            {

                cards.map((card) => (

                    <div
                        className="col-xl-3 col-md-6"
                        key={card.title}
                    >

                        <div
                            className="text-white shadow-lg h-100"
                            style={{
                                background: card.bg,
                                borderRadius: "20px",
                                padding: "25px",
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                            onMouseEnter={(e) => {

                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow =
                                    "0 20px 40px rgba(0,0,0,.18)";

                            }}
                            onMouseLeave={(e) => {

                                e.currentTarget.style.transform = "translateY(0px)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(0,0,0,.12)";

                            }}
                        >

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <small
                                        style={{
                                            opacity: ".9",
                                            letterSpacing: "1px"
                                        }}
                                    >

                                        {card.title}

                                    </small>

                                    <h2
                                        className="fw-bold mt-3 mb-0"
                                        style={{
                                            fontSize: "2.3rem"
                                        }}
                                    >

                                        {card.value}

                                    </h2>

                                </div>

                                <div
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "18px",
                                        background: "rgba(255,255,255,.18)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >

                                    {card.icon}

                                </div>

                            </div>

                        </div>

                    </div>

                ))

            }

            {/* Security Alert Card */}

            <div className="col-xl-12">

                <div
                    className="shadow-sm"
                    style={{
                        background: "#fff3cd",
                        borderLeft: "6px solid #f59e0b",
                        borderRadius: "18px",
                        padding: "20px"
                    }}
                >

                    <div className="d-flex align-items-center">

                        <FaExclamationTriangle
                            className="text-warning me-3"
                            size={28}
                        />

                        <div>

                            <h5 className="mb-1">

                                AI Security Monitor

                            </h5>

                            <small>

                                Monitor suspicious URLs, malicious links and user activities from the dashboard.

                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AdminStats;