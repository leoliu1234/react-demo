import React from 'react';
import DashboardMenuBar from './db-menu-bar';
import DashboardImageList from './db-image-list';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    <div className="columns large-3">
                        <img src="/react-demo/images/logo.png" />
                    </div>
                </div>
                <DashboardMenuBar />
                <div className="row content">
                    <div className="columns large-12">
                        <div className="panel">
                            <header>Good Idea?</header>
                            <div className="mod-body">
                                mojoPortal is free open source web content management software for running your website.
                                Very user friendy,no knowledge of HTML required to create and edit content.
                                Easily create accessible, standards compliant, mobile friendly web pages & content right from your web browser.
                                Easy web design with Artisteer or CSS.
                                Free community support & paid professional support available.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row content">
                    <div className="columns large-6">
                        <div className="panel">
                            <header>Left Here?</header>
                            <div className="mod-body">
                                mojoPortal is free open source web content management software for running your website.
                                Very user friendy,no knowledge of HTML required to create and edit content.
                                Easily create accessible, standards compliant, mobile friendly web pages & content right from your web browser.
                                Easy web design with Artisteer or CSS.
                                Free community support & paid professional support available.
                            </div>
                        </div>
                    </div>
                    <div className="columns large-6">
                        <div className="panel">
                            <header>Right Here?</header>
                            <div className="mod-body">
                                mojoPortal is free open source web content management software for running your website.
                                Very user friendy,no knowledge of HTML required to create and edit content.
                                Easily create accessible, standards compliant, mobile friendly web pages & content right from your web browser.
                                Easy web design with Artisteer or CSS.
                                Free community support & paid professional support available.
                            </div>
                        </div>
                    </div>
                </div>
                <DashboardImageList/>
            </div>
        );
    }
}