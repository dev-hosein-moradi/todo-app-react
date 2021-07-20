import React, { useState } from "react";
import "./InfoDay.css"

function InfoDay() {

    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    };
    setInterval(updateTime, 1000);

    const nowDate = new Date();
    var month = nowDate.getUTCMonth() + 1;
    var day = nowDate.getUTCDate();
    var year = nowDate.getUTCFullYear();

    return (
        <div>
            <div class="clock-container">

                <div className="date">
                    <h5>{year}/{month}/{day}</h5>
                </div>
                <div className="time">
                    <h5>{time}</h5>
                </div>

            </div>
        </div>
    )
};

export default InfoDay;