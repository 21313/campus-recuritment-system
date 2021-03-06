import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            error: null,
        }
    }

    SignUp(ev) {
        ev.preventDefault();
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var name = this.refs.name.value;
        console.log(email);
        console.log(password);
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password).catch((error) => {
            this.setState({ error: error.message })
        }).then(() => {
            firebase.auth().currentUser.updateProfile({
                displayName: name
            }); console.log(firebase.auth().currentUser);
            browserHistory.push("/login");
            var rootRef = firebase.database().ref("user" + "/" + firebase.auth().currentUser.uid).set({
                uName: name,
                uEmail: email,
                uPassword: password,
                typeOfUser: this.state.user
            });
        });

    }
    setUser(event) {
        this.setState({
            user: event.target.value
        });
    }
    render() {
        return (
            <div>
                <center> <h1>SignUp</h1> </center>
                <div className="container">
                    <form onSubmit={this.SignUp.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="text">Enter Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Name" ref="name" /> <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" placeholder="Email" ref="email" /> <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password:</label>
                            <input type="password" className="form-control" ref="password" placeholder="password" /> <br />
                        </div>

                        <input className="btn btn-primary" type="submit" value="SignUp" />
                        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
                        <div className="radio" onChange={this.setUser.bind(this)}>
                            <label><input type="radio" value="student" name="user" />Student</label> <br />
                            <label><input type="radio" value="company" name="user" />Company</label> <br />

                        </div>

                    </form>
                </div>
            </div>

        );
    }
}
export default SignUp;