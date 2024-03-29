import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import UserModal from './userModal';

class Home extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="container" style={{ marginTop: '20vh' }}>
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Welcome {JSON.parse(localStorage.getItem('user')).name}</h5>
              <p className="card-text">Email :{JSON.parse(localStorage.getItem('user')).email}</p>
              {/* <UserModal /> */}
            </div>
          </div>
        </div >
      )
    }
    else {
      return (
        <div style={{ marginTop: '20vh' }}>
          <h2>Please login to see inside <Link to="/login">Login</Link></h2>
          <h3>If you are new please register here <Link to="/register">Sign Up</Link></h3>
        </div >
      )
    }
  }
}

const mapStateToProps = state => {
  if (state.auth.loggedIn && state.auth.user) {
    let userData = JSON.parse(state.auth.user);
    return {
      name: userData.name,
      email: userData.email,
      loggedIn: state.auth.loggedIn
    };
  }
  else {
    return {};
  }
};
export default connect(mapStateToProps)(Home);
