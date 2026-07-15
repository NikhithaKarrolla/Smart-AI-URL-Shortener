import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaRobot,
    FaHeart
} from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <footer
            id="about"
            style={{
                background: "#0f172a",
                color: "#fff",
                marginTop: "80px"
            }}
        >

            <div className="container py-5">

                <div className="row">

                    {/* Logo */}

                    <div className="col-lg-4 mb-4">

                        <div className="d-flex align-items-center mb-3">

                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "12px",
                                    background:
                                        "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >

                                <FaRobot size={24} />

                            </div>

                            <h3 className="ms-3 mb-0 fw-bold">

                                Smart AI URL

                            </h3>

                        </div>

                        <p
                            className="text-light"
                            style={{
                                lineHeight: "30px"
                            }}
                        >

                            AI-powered URL shortening platform with
                            phishing detection, intelligent webpage
                            summaries, QR code generation and
                            real-time analytics.

                        </p>

                    </div>

                    {/* Features */}

                    <div className="col-lg-4 mb-4">

                        <h5 className="fw-bold mb-3">

                            Features

                        </h5>

                        <p>🔗 URL Shortening</p>

                        <p>🛡 AI Phishing Detection</p>

                        <p>🤖 AI Summary</p>

                        <p>📊 Analytics Dashboard</p>

                        <p>👑 Admin Panel</p>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-4 mb-4">

                        <h5 className="fw-bold mb-3">

                            Connect

                        </h5>

                        <div className="d-flex gap-3 mb-3">

                            <a
                                href="https://github.com/NikhithaKarrolla"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white fs-3"
                            >

                                <FaGithub />

                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white fs-3"
                            >

                                <FaLinkedin />

                            </a>

                            <a
                                href="mailto:yourmail@gmail.com"
                                className="text-white fs-3"
                            >

                                <FaEnvelope />

                            </a>

                        </div>

                        <p className="text-light">

                            Smart, Secure and AI-driven URL Management.

                        </p>

                    </div>

                </div>

                <hr
                    style={{
                        borderColor: "#334155"
                    }}
                />

                <div className="d-flex justify-content-between align-items-center flex-wrap">

                    <small>

                        © {year} Smart AI URL Shortener. All Rights Reserved.

                    </small>

                    <small>

                        Built with

                        <FaHeart
                            className="mx-2 text-danger"
                        />

                        using React, Node.js & AI

                    </small>

                </div>

            </div>

        </footer>

    );

};

export default Footer;