import React, { Component } from "react";

import { connect } from "react-redux";

import FormField from "../../components/FormField";
import ButtonForm from "../../components/ButtonForm";

import "./style.scss";

import { onChangeData, loginRequest } from "../../store/actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loginSubmit = e => {
    const { login, username, password } = this.props;
    e.preventDefault();
    login({ username, password });
  };

  render() {
    const { onChange } = this.props;
    return (
      <div className="card-form-login">
        <div className="box-form-login">
          <h2>Access your account.</h2>
          <form id="form-login" onSubmit={this.loginSubmit}>
            <FormField
              fieldTitle="Username"
              fieldClassname="input-login"
              onChangeField={onChange}
              fieldName="username"
              fieldType="text"
              divClass="div-input-login"
            />

            <FormField
              fieldTitle="Password"
              fieldClassname="input-login"
              onChangeField={onChange}
              fieldType="password"
              fieldName="password"
              divClass="div-input-login"
            />
            <ButtonForm text="Sign In" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(onChangeData(data)),
  login: data => dispatch(loginRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
