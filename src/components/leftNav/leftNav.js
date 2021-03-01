import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./leftNav.scss";

function LeftNav(props) {
    const { url } = useRouteMatch();
    return (
        <div className="leftNav">
            <Link to={`${url}/company`}>Company</Link>
            <Link to={`${url}/jobs`}>Jobs</Link>
            <Link to={`${url}/jobs/edit`}>Jobs Edit</Link>
        </div>
    );
}

export default LeftNav;
