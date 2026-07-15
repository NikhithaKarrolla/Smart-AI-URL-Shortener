import {
  FaLink,
  FaMousePointer,
  FaShieldAlt,
  FaBan
} from "react-icons/fa";

const DashboardStats = ({ stats }) => {

  const cards = [
    {
      title: "Total URLs",
      value: stats.totalUrls,
      icon: <FaLink size={28} />,
      bg: "linear-gradient(135deg,#2563eb,#1d4ed8)"
    },
    {
      title: "Total Clicks",
      value: stats.totalClicks,
      icon: <FaMousePointer size={28} />,
      bg: "linear-gradient(135deg,#16a34a,#15803d)"
    },
    {
      title: "Safe URLs",
      value: stats.safeUrls,
      icon: <FaShieldAlt size={28} />,
      bg: "linear-gradient(135deg,#0891b2,#0e7490)"
    },
    {
      title: "Blocked URLs",
      value: stats.blockedUrls,
      icon: <FaBan size={28} />,
      bg: "linear-gradient(135deg,#dc2626,#b91c1c)"
    }
  ];

  return (

    <div className="row g-4 mb-4">

      {

        cards.map((card) => (

          <div
            className="col-lg-3 col-md-6"
            key={card.title}
          >

            <div
              className="shadow-lg h-100 text-white"
              style={{
                background: card.bg,
                borderRadius: "20px",
                padding: "25px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <small
                    style={{
                      opacity: 0.9,
                      letterSpacing: "1px"
                    }}
                  >
                    {card.title}
                  </small>

                  <h2
                    className="fw-bold mt-3 mb-0"
                    style={{
                      fontSize: "2.2rem"
                    }}
                  >
                    {card.value}
                  </h2>

                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    width: "65px",
                    height: "65px",
                    borderRadius: "18px",
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

    </div>

  );

};

export default DashboardStats;