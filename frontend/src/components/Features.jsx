import {
    FaShieldAlt,
    FaQrcode,
    FaChartLine,
    FaRobot,
    FaLink,
    FaUserShield,
    FaCopy,
    FaGlobe,
    FaLock,
    FaChartPie
} from "react-icons/fa";

const Features = () => {

    const features = [

        {
            icon: <FaShieldAlt size={45} className="text-success" />,
            title: "AI Phishing Detection",
            description:
                "Detect malicious and suspicious URLs before shortening them using AI-powered security."
        },

        {
            icon: <FaRobot size={45} className="text-primary" />,
            title: "AI Webpage Summary",
            description:
                "Automatically generate concise webpage summaries before visiting a website."
        },

        {
            icon: <FaLink size={45} className="text-info" />,
            title: "Custom URL Shortening",
            description:
                "Create branded short links with custom aliases for easy sharing."
        },

        {
            icon: <FaQrcode size={45} className="text-danger" />,
            title: "QR Code Generator",
            description:
                "Generate and download QR codes instantly for every shortened URL."
        },

        {
            icon: <FaChartLine size={45} className="text-warning" />,
            title: "Real-Time Analytics",
            description:
                "Track clicks, browser, country, device and referrer statistics in real time."
        },

        {
            icon: <FaChartPie size={45} className="text-secondary" />,
            title: "Interactive Dashboard",
            description:
                "Visual dashboards with charts, statistics and complete URL management."
        },

        {
            icon: <FaUserShield size={45} className="text-dark" />,
            title: "Admin Dashboard",
            description:
                "Manage users, block/unblock URLs, monitor security and control the platform."
        },

        {
            icon: <FaLock size={45} className="text-success" />,
            title: "Secure Authentication",
            description:
                "JWT-based authentication with protected routes and role-based authorization."
        },

        {
            icon: <FaCopy size={45} className="text-primary" />,
            title: "One Click Copy",
            description:
                "Copy shortened URLs instantly with a single click for quick sharing."
        },

        {
            icon: <FaGlobe size={45} className="text-info" />,
            title: "Global URL Monitoring",
            description:
                "Monitor traffic from different countries, browsers and devices worldwide."
        }

    ];

    return (

        <section
            id="features"
            className="py-5"
            style={{
                background: "#f8fafc"
            }}
        >

            <div className="container">

                <div className="text-center mb-5">

                    <h2
                        className="fw-bold"
                        style={{
                            color: "#1e293b"
                        }}
                    >

                        Powerful Features

                    </h2>

                    <p
                        className="text-muted fs-5"
                        style={{
                            maxWidth: "750px",
                            margin: "auto"
                        }}
                    >

                        Everything you need to securely shorten URLs,
                        analyze traffic, detect phishing attempts,
                        generate QR codes and manage links using AI.

                    </p>

                </div>

                <div className="row g-4">

                    {

                        features.map((feature, index) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                            >

                                <div
                                    className="card border-0 shadow-sm h-100"
                                    style={{
                                        borderRadius: "18px",
                                        transition: "0.3s",
                                        cursor: "pointer"
                                    }}
                                    onMouseEnter={(e) => {

                                        e.currentTarget.style.transform =
                                            "translateY(-8px)";

                                        e.currentTarget.style.boxShadow =
                                            "0 20px 40px rgba(0,0,0,.12)";

                                    }}
                                    onMouseLeave={(e) => {

                                        e.currentTarget.style.transform =
                                            "translateY(0px)";

                                        e.currentTarget.style.boxShadow =
                                            "0 10px 20px rgba(0,0,0,.08)";

                                    }}
                                >

                                    <div className="card-body text-center p-5">

                                        <div className="mb-4">

                                            {feature.icon}

                                        </div>

                                        <h4 className="fw-bold mb-3">

                                            {feature.title}

                                        </h4>

                                        <p
                                            className="text-muted"
                                            style={{
                                                lineHeight: "28px"
                                            }}
                                        >

                                            {feature.description}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

};

export default Features;