import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, Progress } from "reactstrap";

const ProfileCard = ({ name, progress, notes }) => (
  <Card>
    <div
      style={{
        minHeight: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
      }}
    >
      <FontAwesomeIcon icon={faUserCircle} size="6x" />
      <h2 style={{ fontWeight: "bold" }}>{name}</h2>
      <hr style={{ width: "100%" }} />
      <Progress style={{ width: "95%" }} value={progress} />
      <hr style={{ width: "100%" }} />
      <h3>Notes</h3>
      <ul>
        {notes.map((i, index) => (
          <li key={"note" + index}>{i}</li>
        ))}
      </ul>
    </div>
  </Card>
);
export default ProfileCard;
