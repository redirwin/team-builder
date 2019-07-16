import React, { useState } from "react";
import EditMember from "./EditMember";

export default function DisplayMember(props) {
  const [editing, updateEditing] = useState(false);

  const toggleEditing = event => {
    event.preventDefault();
    updateEditing(!editing);
  };
  return (
    <>
      <div
        style={editing === true ? { display: "none" } : { display: "" }}
        key={props.member.email}
        onClick={event => toggleEditing(event)}
      >
        <span>{props.member.firstName}</span>
        <span>{props.member.lastName}</span>
        <span>{props.member.role}</span>
        <span>{props.member.email}</span>
      </div>
      <div style={editing === false ? { display: "none" } : { display: "" }}>
        <EditMember
          member={props.member}
          toggleEditing={toggleEditing}
          handleEdit={props.handleEdit}
        />
      </div>
    </>
  );
}
