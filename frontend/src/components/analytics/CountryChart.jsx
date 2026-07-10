import {

    Bar

} from "react-chartjs-2";

import {

    Chart as ChartJS,

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

} from "chart.js";

ChartJS.register(

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

);

const CountryChart = ({ countries }) => {

    const data = {

        labels: Object.keys(countries),

        datasets: [

            {

                label: "Clicks",

                data: Object.values(countries),
                backgroundColor: [
            "#2563eb",
            "#10b981",
            "#f59e0b",
            "#ef4444",
            "#8b5cf6",
            "#06b6d4",
            "#ec4899"
        ]

            }

        ]

    };

    return (

        <div className="card shadow p-4">

            <h4>Countries</h4>

            <Bar data={data} />

        </div>

    );

};

export default CountryChart;