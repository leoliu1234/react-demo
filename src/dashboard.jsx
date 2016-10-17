import React from 'react';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    <div className="columns large-3">
                        <img src="/react-demo/images/logo.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="columns large-12">
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Download</li>
                                <li>Store</li>
                                <li>Forums</li>
                                <li>Blog</li>
                                <li>Demos</li>
                                <li>Documentation</li>
                                <li>About</li>
                                <li>Hosting</li>
                                <li>Consulting</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}