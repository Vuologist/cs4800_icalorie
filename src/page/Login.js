import React, { Component } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardBody,
  Container,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Row,
  Col
} from "reactstrap";

import { withFirebase } from "../components/Firebase";
import * as ROUTES from "../constants/routes";

const INITIAL_STATE = {
  email: "",
  pass: "",
  error: null
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, pass } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, pass)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      });
  };

  onChange = e => {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, pass, error } = this.state;
    return (
      <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody style={{ padding: 50 }}>
              <CardTitle
                style={{ fontWeight: "bold", fontSize: 36, paddingBottom: 15 }}
              >
                iCalorie Login
              </CardTitle>
              <Form>
                <FormGroup style={{ paddingBottom: 15 }}>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup style={{ paddingBottom: 15 }}>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="pass"
                    id="password"
                    placeholder="password"
                    value={pass}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Button onClick={this.onSubmit} color="primary">
                  Continue
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

const LoginPage = withRouter(withFirebase(Login));
export default LoginPage;
