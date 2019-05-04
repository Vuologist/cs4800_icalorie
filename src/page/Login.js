import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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

const INITIAL_STATE = {
  email: "",
  pass: ""
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
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
                  />
                </FormGroup>
                <FormGroup style={{ paddingBottom: 15 }}>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </FormGroup>
                <Button color="primary">Continue</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Login;
