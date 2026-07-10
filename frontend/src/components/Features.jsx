import {
  FaShieldAlt,
  FaQrcode,
  FaChartLine,
  FaRobot
} from "react-icons/fa";

const Features = () => {
  return (

    <section className="container py-5">

      <div className="row g-4">

        <div className="col-md-3">

          <div className="feature-card">

            <FaShieldAlt className="icon" />

            <h4>AI Security</h4>

            <p>
              Detect phishing links before shortening.
            </p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="feature-card">

            <FaRobot className="icon" />

            <h4>AI Summary</h4>

            <p>
              Automatically summarize webpages.
            </p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="feature-card">

            <FaQrcode className="icon" />

            <h4>QR Code</h4>

            <p>
              Instantly generate QR codes.
            </p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="feature-card">

            <FaChartLine className="icon" />

            <h4>Analytics</h4>

            <p>
              Browser, device and click analytics.
            </p>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Features;