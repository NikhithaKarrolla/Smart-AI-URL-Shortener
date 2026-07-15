import { useState } from "react";
import { FaLink, FaMagic, FaRocket } from "react-icons/fa";

const CreateUrlForm = ({ createUrl }) => {

    const [originalUrl, setOriginalUrl] = useState("");
    const [customAlias, setCustomAlias] = useState("");

    const submit = (e) => {

        e.preventDefault();

        createUrl({
            originalUrl,
            customAlias
        });

        setOriginalUrl("");
        setCustomAlias("");
    };

    return (

        <div
            className="shadow-lg mb-4"
            style={{
                borderRadius: "20px",
                background: "#fff",
                overflow: "hidden"
            }}
        >

            {/* Header */}

            <div
                style={{
                    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                    color: "white",
                    padding: "20px 30px"
                }}
            >

                <h3 className="mb-1 fw-bold">
                    <FaRocket className="me-2" />
                    Create Smart URL
                </h3>

                <small>
                    Generate secure AI-powered short URLs with custom aliases.
                </small>

            </div>

            {/* Form */}

            <div className="p-4">

                <form onSubmit={submit}>

                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Original URL
                        </label>

                        <div className="input-group">

                            <span className="input-group-text bg-white">
                                <FaLink />
                            </span>

                            <input
                                type="url"
                                required
                                className="form-control"
                                placeholder="https://example.com"
                                value={originalUrl}
                                onChange={(e) =>
                                    setOriginalUrl(e.target.value)
                                }
                                style={{
                                    height: "50px"
                                }}
                            />

                        </div>

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Custom Alias
                        </label>

                        <div className="input-group">

                            <span className="input-group-text bg-white">
                                <FaMagic />
                            </span>

                            <input
                                className="form-control"
                                placeholder="Optional custom alias"
                                value={customAlias}
                                onChange={(e) =>
                                    setCustomAlias(e.target.value)
                                }
                                style={{
                                    height: "50px"
                                }}
                            />

                        </div>

                    </div>

                    <button
                        className="btn btn-primary w-100 fw-bold"
                        style={{
                            height: "50px",
                            borderRadius: "12px",
                            fontSize: "16px"
                        }}
                    >

                        <FaRocket className="me-2" />

                        Generate Smart URL

                    </button>

                </form>

            </div>

        </div>

    );

};

export default CreateUrlForm;