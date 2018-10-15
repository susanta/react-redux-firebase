import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
  }
  handleChanage = (e) => {
    //   console.log(e);
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    //   console.log(e);
    e.preventDefault();
    // console.log(this.state);
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign Up</h5>
              <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" onChange={this.handleChanage} />
              </div>
              <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" onChange={this.handleChanage} />
              </div>
              <div className="input-field">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" id="firstName" onChange={this.handleChanage} />
              </div>
              <div className="input-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName" id="lastName" onChange={this.handleChanage} />
              </div>
              <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">Sign up</button>
              </div>
              <div className="red-text center">
                  { authError ? <p>{ authError }</p> : null }
              </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
