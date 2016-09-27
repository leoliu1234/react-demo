import React from 'react';
import {Link} from 'react-router';

export default class SlideBar extends React.Component {
    render() {
        return (
            <div className="slide-bar">
                <ul>
                    <li><Link to="/UserLogin">UserLogin</Link></li>
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                </ul>
            </div>
        );
    }
}