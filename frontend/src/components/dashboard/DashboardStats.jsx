const DashboardStats = ({ stats }) => {

    const cards=[

        {

            title:"URLs",

            value:stats.totalUrls,

            color:"primary"

        },

        {

            title:"Clicks",

            value:stats.totalClicks,

            color:"success"

        },

        {

            title:"Safe URLs",

            value:stats.safeUrls,

            color:"info"

        },

        {

            title:"Blocked",

            value:stats.blockedUrls,

            color:"danger"

        }

    ];

    return(

        <div className="row mb-4">

            {

                cards.map(card=>(

                    <div

                        className="col-md-3"

                        key={card.title}

                    >

                        <div

                            className={`card border-0 shadow bg-${card.color} text-white`}

                        >

                            <div className="card-body">

                                <h6>

                                    {card.title}

                                </h6>

                                <h2>

                                    {card.value}

                                </h2>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};

export default DashboardStats;