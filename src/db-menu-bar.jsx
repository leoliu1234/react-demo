import React from 'react';

export default class DashboardMenuBar extends React.Component {
    render() {
        return (<div className="row">
            <div className="columns large-12">
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Download</a></li>
                        <li><a>Forums</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Documentation</a></li>
                        <li><a>About</a></li>
                        <li><a>Consulting</a></li>
                    </ul>
                </nav>
            </div>
        </div>);
    };
}