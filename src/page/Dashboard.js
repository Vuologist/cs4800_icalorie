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

import Header from "../components/Header";

const INITIAL_STATE = {};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>hello</div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
