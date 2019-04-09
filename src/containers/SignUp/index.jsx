import React, { Component } from "react";

import { Link } from "react-router-dom";

import FormField from "../../components/FormField";
import ButtonForm from "../../components/ButtonForm";

import "./style.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleOnChange = (field, name) => this.setState({ [field]: name });

  render() {
    return (
      <div className="card-form-signup">
        <div className="box-form-signup">
          <h2>Register your account.</h2>
          <form id="form-signup">
            <FormField
              fieldTitle="Full Name"
              fieldClassname="input-signup"
              onChangeField={this.handleOnChange}
              fieldName="fullName"
              fieldType="text"
              divClass="div-input-signup"
            />
            <FormField
              fieldTitle="Username"
              fieldClassname="input-signup"
              onChangeField={this.handleOnChange}
              fieldName="username"
              fieldType="text"
              divClass="div-input-signup"
            />
            <FormField
              fieldName="email"
              fieldClassname="input-signup"
              onChangeField={this.handleOnChange}
              fieldType="email"
              fieldTitle="Email"
              divClass="div-input-signup"
            />
            <FormField
              fieldTitle="Password"
              fieldClassname="input-signup"
              onChangeField={this.handleOnChange}
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
              onChangeField={this.handleOnChange}
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

export default SignUp;
