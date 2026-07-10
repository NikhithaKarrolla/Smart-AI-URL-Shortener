import {

    Doughnut

} from "react-chartjs-2";

import {

    Chart as ChartJS,

    ArcElement,

    Tooltip,

    Legend

} from "chart.js";

ChartJS.register(

    ArcElement,

    Tooltip,

    Legend

);

const DeviceChart = ({ devices }) => {

    const data = {

        labels: Object.keys(devices),

        datasets: [

            {

                data: Object.values(devices),
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

            <h4>Devices</h4>

            <Doughnut data={data} />

        </div>

    );

};

export default DeviceChart;