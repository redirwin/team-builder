import React, { useState } from "react";
import EditMember from "./EditMember";

export default function DisplayMember(props) {
  const [editing, updateEditing] = useState(false);
  const [object, setObject] = useState(props.member);

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
        <span>{object.firstName}</span>
        <span>{object.lastName}</span>
        <span>{object.role}</span>
        <span>{object.email}</span>
      </div>
      <div style={editing === false ? { display: "none" } : { display: "" }}>
        <EditMember
          member={object}
          setObject={setObject}
          toggleEditing={toggleEditing}
        />
      </div>
    </>
  );
}
