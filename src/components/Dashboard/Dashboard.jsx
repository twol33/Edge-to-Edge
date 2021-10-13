import React from "react";
import {HashRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';

function Dashboard() {
    return(
        <div>
            <button>Status</button>
            <button>Bio</button>
            <button>Friends</button>
            <button>Weather</button>
            <button>Park</button>
            <button>Free Ride</button>
            <button>All Mountain</button>
            <button>Back Country</button>
        </div>
    )
}
export default Dashboard;