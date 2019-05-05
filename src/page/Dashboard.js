import React, { Component } from "react";
import { Alert, Container } from "reactstrap";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

import { withFirebase } from "../components/Firebase";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true,
      users: null
    };
    this.firebase = this.props.firebase;
  }

  componentDidMount() {
    let username = this.props.location.pathname.split("/", 3)[2];
    let clients = [];
    this.unsubscribe = this.firebase
      .getClients(username)
      .then(snapshot =>
        snapshot
          .data()
          .clients.forEach(client => clients.push(this.getClientInfo(client)))
      );
    console.log("clients", clients);
  }

  getClientInfo = client => {
    let userInfo = {};
    this.firebase
      .getClient(client)
      .then(snapshot => console.log(snapshot.data()));
    console.log("userInfo", userInfo);
    return userInfo;
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  alertDismiss = () => {
    this.setState({ alertVisible: false });
  };

  renderIsLoading = () => (
    <div>
      <p>Loading...</p>
    </div>
  );

  renderContent = () => {};

  render() {
    const { alertVisible } = this.state;
    const user = this.props.location.pathname.split("/", 3)[2];
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
            Welcome {user} , who shall we fix up today?!?! 😈
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

export default withFirebase(Dashboard);
