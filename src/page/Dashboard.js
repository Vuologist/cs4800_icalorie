import React, { Component } from "react";
import { Alert } from "reactstrap";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

import { withFirebase } from "../components/Firebase";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true,
      clientName: [],
      clientDetails: [],
      loading: true
    };
    this.firebase = this.props.firebase;
  }

  componentDidMount() {
    // get current login's username
    let username = this.props.location.pathname.split("/", 3)[2];
    // get nutritionists client list and store in clients
    this.unsubscribe = this.firebase.getClients(username).onSnapshot(snapshot =>
      snapshot.data().clients.forEach(client => {
        this.setState(state => {
          const clientName = [...state.clientName, client];
          return { clientName };
        });
        this.setClientInfo(client);
      })
    );
    this.setState({ loading: false });
  }

  setClientInfo = client => {
    this.unsubscribe1 = this.firebase.getClient(client).onSnapshot(snapshot =>
      this.setState(state => {
        const clientDetails = [...state.clientDetails, snapshot.data()];
        return { clientDetails };
      })
    );
  };

  componentWillUnmount() {
    this.unsubscribe();
    this.unsubscribe1();
  }

  alertDismiss = () => {
    this.setState({ alertVisible: false });
  };

  renderIsLoading = () => (
    <div>
      <p>Loading...</p>
    </div>
  );

  renderContent = () => {
    const user = this.props.location.pathname.split("/", 3)[2];
    const { alertVisible, clientDetails, clientName } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div style={{ paddingRight: 15, paddingLeft: 15 }}>
          <Alert
            color="success"
            isOpen={alertVisible}
            toggle={this.alertDismiss}
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            Welcome {user}, who shall we fix up today?!?! 😈
          </Alert>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {clientDetails.map((user, index) => (
              <div
                style={{ width: "25%", display: "inline-block", margin: 20 }}
              >
                <ProfileCard
                  key={"card" + index}
                  name={clientName[index]}
                  progress={clientDetails[index].progress}
                  notes={clientDetails[index].notes}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { loading } = this.state;

    return loading ? this.renderIsLoading() : this.renderContent();
  }
}

export default withFirebase(Dashboard);
