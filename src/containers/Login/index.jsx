import React, { Component } from "react";

import FormField from "../../components/FormField";

import "./style.scss";
import ButtonForm from "../../components/ButtonForm";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleOnChange = (field, name) => this.setState({ [field]: name });

  render() {
    return (
      <div className="card-form-login">
        <div className="box-form-login">
          <h2>Access your account.</h2>
          <form id="form-login">
            <FormField
              fieldTitle="Username"
              fieldClassname="input-login"
              onChangeField={this.handleOnChange}
              fieldName="username"
              fieldType="text"
              divClass="div-input-login"
            />

            <FormField
              fieldTitle="Password"
              fieldClassname="input-login"
              onChangeField={this.handleOnChange}
              fieldType="password"
              fieldName="username"
              divClass="div-input-login"
            />
            <ButtonForm text="Sign In" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
