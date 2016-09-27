import React from 'react';
import {Link} from 'react-router';

export default class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-title"><Link to="/Dashboard">Dashboard</Link></div>
                <div>
                    <div className="top-bar-left">
                        <Link to="/UserLogin">Login</Link>
                    </div>
                    <div className="top-bar-right">ok</div>
                </div>
            </div>
        );
    }
}