import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button } from "reactstrap";

const INITIAL_STATE = {
    email: "",
    pass: ""
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }

    render() {
        return <Button color="danger">Danger!</Button>
    }

}

export default Login;