import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <p>This is a react boilerplate that includes react router, react redux, react bootstrap, react-loader-spinner, dotenv, and a build script that uploads directly to an S3 bucket</p>
        </Jumbotron>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
