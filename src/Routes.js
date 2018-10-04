import React, { Component } from 'react';
import SignIn from './containers/signIn/signIn';
import SignUp from './containers/signUp/signUp';
import * as firebase from 'firebase';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import NavBar from './components/navBar/navBar';
import Main from './components/main/main';
import Student from './components/student/student';
import Company from './components/company/company';
import Admin from './components/admin/admin';
import PostJob from './components/jobs list/postJob';
import ViewJob from './components/jobs list/viewJob';
import ViewCompany from './components/company/viewCompany';
import CreateCV from './components/student/createCv';
import ViewStudent from './components/student/viewStudent';
import ViewJobByCompany from './components/jobs list/viewJobByComp';
import MyJobs from './components/jobs list/myJobs';
import MyProfile from './components/student/myProfile';
import Candidiate from './components/student/interestedStudent';
import ViewDeleteCompany from './components/admin/view-del-cmp';
import ViewDeleteStudent from './components/admin/view-del-std';
import Home from './components/home';
import firebaseConfig from './firebaseConfig';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class Routes extends Component {
    render() {
        return (
            <div style={
                {
                    background: '#eee',
                    minHeight: 1000
                }
            }>
                <Router history={browserHistory}>
                    <Route path="/" component={NavBar}>
                        <IndexRoute component={Home} />
                        <Route path="login" component={SignIn} />
                        <Route path="signup" component={SignUp} />
                    </Route >
                    <Route path="student" component={Student} />
                    <Route path="company" component={Company} />
                    <Route path="admin" component={Admin} />
                    <Route path="postjob" component={PostJob} />
                    <Route path="viewjobs" component={ViewJob} />
                    <Route path="viewcompany" component={ViewCompany} />
                    <Route path="createcv" component={CreateCV} />
                    <Route path="viewStudent" component={ViewStudent} />
                    <Route path="viewjobsbycompany" component={ViewJobByCompany} />
                    {/* viewjobsbycompany admin ke lye use hoga                    */}
                    <Route path="myjobs" component={MyJobs} />
                    <Route path="myProfile" component={MyProfile} />
                    <Route path="cv" component={Candidiate} />
                    <Route path="viewdelstd" component={ViewDeleteStudent} />
                    <Route path="viewdelcmp" component={ViewDeleteCompany} />


                </Router>
            </div>
        );
    }
}


export default Routes;