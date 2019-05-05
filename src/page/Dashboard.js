import React, { Component } from "react";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ProfileCard name="Anthony" progress={34} notes={["ipsum", "ipsum"]} />
      </React.Fragment>
    );
  }
}

export default Dashboard;
