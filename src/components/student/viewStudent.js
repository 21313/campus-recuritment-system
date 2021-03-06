import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';

class ViewStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewStudent : []
        }
    }
componentDidMount(){
    firebase.database().ref('user').orderByChild('typeOfUser').equalTo('student').once('value').then(snapshot=>{
      const refRoot = snapshot.val();
      console.log(refRoot);
        let student = [];
      for(let key in refRoot){
        student.push(refRoot[key]);
      }
      console.log(student)
      this.setState({viewStudent : student})
    })
      }
  render() {
      return(
        firebase.auth().currentUser ? (
      <div>
          <NavBarSignOut />
        <center><h1>Student List</h1></center>
         {this.state.viewStudent.map((data , index) => (
             <div key={index} className="container">
    <table className="table">
        <thead >
      <tr>
        <th>Name</th>
        <th>Email</th>   
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.uName}</td>
        <td>{data.uEmail}</td>
      </tr>
    </tbody>
  </table>
    
</div>      ))}
   <Link to="company" className="btn btn-primary">
    Go Back company Panel
  </Link>
      </div>
        ) : (<div>{browserHistory.push("login")}</div>)
      );
  }
}
export default ViewStudent;
