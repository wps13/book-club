import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FormField from "../../components/FormField";
import ButtonForm from "../../components/ButtonForm";

import { onChangeData, signupRequest } from "../../store/actions";

import "./style.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  signupUser = e => {
    e.preventDefault();
    const {
      signup,
      username,
      email,
      fullName,
      password,
      confirmPassword,
    } = this.props;
    signup({ username, email, fullName, password, confirmPassword });
  };

  render() {
    const { onChange } = this.props;
    return (
      <div className="card-form-signup">
        <div className="box-form-signup">
          <h2>Register your account.</h2>
          <form id="form-signup" onSubmit={this.signupUser}>
            <FormField
              fieldTitle="Full Name"
              fieldClassname="input-signup"
              onChangeField={onChange}
              fieldName="fullName"
              fieldType="text"
              divClass="div-input-signup"
            />
            <FormField
              fieldTitle="Username"
              fieldClassname="input-signup"
              onChangeField={onChange}
              fieldName="username"
              fieldType="text"
              divClass="div-input-signup"
            />
            <FormField
              fieldName="email"
              fieldClassname="input-signup"
              onChangeField={onChange}
              fieldType="email"
              fieldTitle="Email"
              divClass="div-input-signup"
            />
            <FormField
              fieldTitle="Password"
              fieldClassname="input-signup"
              onChangeField={onChange}
              fieldType="password"
              fieldName="username"
              divClass="div-input-signup"
            />
            <FormField
              fieldTitle="Confirm Password"
              fieldName="confirmPassword"
              fieldClassname="input-signup"
              divClass="div-input-signup"
              fieldType="password"
              onChangeField={onChange}
            />
            <ButtonForm text="Join" />
            <Link to="/login">
              <p>Already here? Sign In</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(onChangeData(data)),
  signup: data => dispatch(signupRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
