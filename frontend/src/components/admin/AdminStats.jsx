import {
    FaUsers,
    FaLink,
    FaMousePointer,
    FaShieldAlt
} from "react-icons/fa";

const AdminStats = ({ dashboard }) => {

    const cards = [

        {
            title: "Users",
            value: dashboard.totalUsers,
            color: "primary",
            icon: <FaUsers size={28} />
        },

        {
            title: "URLs",
            value: dashboard.totalUrls,
            color: "success",
            icon: <FaLink size={28} />
        },

        {
            title: "Clicks",
            value: dashboard.totalClicks,
            color: "warning",
            icon: <FaMousePointer size={28} />
        },

        {
            title: "Safe URLs",
            value: dashboard.safeUrls,
            color: "info",
            icon: <FaShieldAlt size={28} />
        }

    ];

    return (

        <div className="row mb-4">

            {

                cards.map(card => (

                    <div
                        className="col-lg-3 col-md-6 mb-3"
                        key={card.title}
                    >

                        <div className={`card bg-${card.color} text-white shadow border-0`}>

                            <div className="card-body d-flex justify-content-between align-items-center">

                                <div>

                                    <h6>{card.title}</h6>

                                    <h2>{card.value}</h2>

                                </div>

                                {card.icon}

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};

export default AdminStats;