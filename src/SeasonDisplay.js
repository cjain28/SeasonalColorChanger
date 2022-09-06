import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
    'summer': {
        tert: "Let's hit the beach",
        icon: "sun"
    },
    'winter': {
        tert: 'Burr, it is chilly!',
        icon: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { tert, icon } = seasonConfig[season];
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${icon} icon`} />
        <h1>{tert}</h1>
        <i className={`icon-right massive ${icon} icon`} />
    </div>
};

export default SeasonDisplay;