import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero text-center">

      <div className="container">

        <h1 className="display-3 fw-bold mb-4">
          Smart AI URL Shortener
        </h1>

        <p className="lead mb-4">
          Shorten URLs securely using AI-powered phishing detection,
          QR codes, intelligent classification and real-time analytics.
        </p>

        <Link to="/register" className="btn btn-primary btn-lg me-3">
          Get Started
        </Link>

        <Link to="/login" className="btn btn-outline-light btn-lg">
          Login
        </Link>

      </div>

    </section>
  );
};

export default Hero;