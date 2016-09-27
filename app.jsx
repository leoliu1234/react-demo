import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';
import UserLogin from './src/user-login';
import Dashboard from './src/dashboard';
import TopBar from './src/top-bar';
import SlideBar from './src/slide-bar';

class App extends React.Component {
    render() {

        return (
            <div>
                <TopBar/>
                <SlideBar/>
                <div id="wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/UserLogin" component={UserLogin}/>
            <Route path="/Dashboard" component={Dashboard}/>
        </Route>
    </Router>,
    document.getElementById("main")
);