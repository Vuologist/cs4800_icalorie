import React, { Component } from "react";
import { Alert, Container } from "reactstrap";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true
    };
    this.firebase = this.props.firebase;
  }

  alertDismiss = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    const { alertVisible } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Container fluid={true}>
          <Alert
            color="success"
            isOpen={alertVisible}
            toggle={this.alertDismiss}
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            Welcome , who shall we get fit today?!?!
          </Alert>
          <ProfileCard
            name="Anthony"
            progress={34}
            notes={["ipsum", "ipsum"]}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
