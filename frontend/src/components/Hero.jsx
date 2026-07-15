import { Link } from "react-router-dom";
import {
    FaRobot,
    FaShieldAlt,
    FaChartLine,
    FaQrcode,
    FaArrowRight
} from "react-icons/fa";

const Hero = () => {

    return (

        <section
            style={{
                background: "linear-gradient(135deg,#eff6ff,#ffffff)",
                padding: "90px 0 70px 0",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center"
            }}
        >

            <div className="container">

                <div className="row align-items-center">

                    {/* Left */}

                    <div className="col-lg-6">

                        <span
                            className="badge bg-primary px-3 py-2 mb-3"
                            style={{
                                fontSize: "15px"
                            }}
                        >

                            🤖 AI Powered URL Management

                        </span>

                        <h1
                            className="fw-bold mb-4"
                            style={{
                                fontSize: "3.7rem",
                                color: "#0f172a",
                                lineHeight: "1.2"
                            }}
                        >

                            Smart AI

                            <br />

                            URL Shortener

                        </h1>

                        <p
                            className="lead text-muted mb-4"
                            style={{
                                lineHeight: "34px"
                            }}
                        >

                            Create secure short links using AI-powered
                            phishing detection, webpage summaries,
                            QR codes and real-time analytics.

                        </p>

                        <div className="mb-5">

                            <Link
                                to="/register"
                                className="btn text-white btn-lg me-3 px-4"
                                style={{
                                    borderRadius: "12px",
                                    background:
                                        "linear-gradient(135deg,#2563eb,#1d4ed8)"
                                }}
                            >

                                Get Started

                                <FaArrowRight className="ms-2" />

                            </Link>

                            <Link
                                to="/login"
                                className="btn btn-outline-primary btn-lg px-4"
                                style={{
                                    borderRadius: "12px"
                                }}
                            >

                                Login

                            </Link>

                        </div>

                        {/* Statistics */}

                        <div className="row text-center">

                            <div className="col-4">

                                <h2
                                    className="fw-bold text-primary"
                                >

                                    500+

                                </h2>

                                <small>

                                    URLs Shortened

                                </small>

                            </div>

                            <div className="col-4">

                                <h2
                                    className="fw-bold text-success"
                                >

                                    25K+

                                </h2>

                                <small>

                                    Clicks Tracked

                                </small>

                            </div>

                            <div className="col-4">

                                <h2
                                    className="fw-bold text-danger"
                                >

                                    99%

                                </h2>

                                <small>

                                    Safe Detection

                                </small>

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="col-lg-6">

                        <div
                            className="shadow-lg"
                            style={{
                                background: "#fff",
                                borderRadius: "25px",
                                padding: "40px"
                            }}
                        >

                            <div className="row g-4">

                                <div className="col-6">

                                    <div
                                        className="text-center p-4 shadow-sm rounded"
                                    >

                                        <FaShieldAlt
                                            size={45}
                                            className="text-success mb-3"
                                        />

                                        <h5>

                                            AI Security

                                        </h5>

                                        <small className="text-muted">

                                            Detect malicious URLs before sharing.

                                        </small>

                                    </div>

                                </div>

                                <div className="col-6">

                                    <div
                                        className="text-center p-4 shadow-sm rounded"
                                    >

                                        <FaRobot
                                            size={45}
                                            className="text-primary mb-3"
                                        />

                                        <h5>

                                            AI Summary

                                        </h5>

                                        <small className="text-muted">

                                            Instantly summarize webpages.

                                        </small>

                                    </div>

                                </div>

                                <div className="col-6">

                                    <div
                                        className="text-center p-4 shadow-sm rounded"
                                    >

                                        <FaChartLine
                                            size={45}
                                            className="text-warning mb-3"
                                        />

                                        <h5>

                                            Analytics

                                        </h5>

                                        <small className="text-muted">

                                            Monitor every click in real-time.

                                        </small>

                                    </div>

                                </div>

                                <div className="col-6">

                                    <div
                                        className="text-center p-4 shadow-sm rounded"
                                    >

                                        <FaQrcode
                                            size={45}
                                            className="text-danger mb-3"
                                        />

                                        <h5>

                                            QR Codes

                                        </h5>

                                        <small className="text-muted">

                                            Download QR codes instantly.

                                        </small>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Hero;