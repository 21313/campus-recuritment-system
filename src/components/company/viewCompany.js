
import React from "react"
import * as firebase from 'firebase';
import NavBarSignOut from '../navBar/navBarSignOut';
import {Link,browserHistory} from 'react-router';



class ViewCompany extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewCompany : []
        }
    }
    componentDidMount(){
        const refRoot = firebase.database().ref('user').orderByChild('typeOfUser').equalTo('company').once('value',snapshot=>{
            var userObj = snapshot.val();
            console.log(userObj)
            if(userObj === null){
                alert("There is no Record Of Company in our Database");
                browserHistory.push('admin');
            }
            else{
             let vm = this;
             let obj = [];
                Object.keys(userObj).forEach(function (key) {
                 obj = userObj[key]
                 obj.id = key
            vm.state.viewCompany.push(obj)
            vm.setState({ viewCompany: vm.state.viewCompany})
                });
    }
            console.log(this.state.viewCompany);
        })
    }
    render(){
        return  firebase.auth().currentUser ? (
            <div>
                <NavBarSignOut />
               <center> <h1>Vicancies</h1> </center>
                 {this.state.viewCompany.map((data , index) => (
                         <div key={index} className="container">
    <table className="table">
        <thead >
      <tr>
        <th>Company Name</th>   
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
 <Link to="student" className="btn btn-primary">
    Go Back student Panel
  </Link>
            </div>
        ) : ( <div>{browserHistory.push('login')}</div> )
    }
}
export default ViewCompany;