import React from 'react';
import {Link, hashHistory} from 'react-router';

export default class UserLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        //alert(`UserName:${this.refs.userName.value}, Password:${this.refs.password.value}`);
        e.preventDefault();
        hashHistory.push('/Dashboard');
    }

    render() {
        return (
            <div id="login">
                <div className="mod-header">
                    <h1>User Login</h1>
                </div>
                <div className="mod-body">
                    <form action="#">
                        <div className="row">
                            <div className="large-12 columns">
                                <input type = "text" placeholder="User Name" ref="userName"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 columns">
                                <input placeholder="Password" type="password" ref="password"/>
                            </div>
                        </div>
                        <div className="buttons">
                            <a className="button blue" onClick={this.handleSubmit.bind(this) }>Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}