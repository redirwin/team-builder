import React, { useState } from "react";
import EditMember from "./EditMember";
import styled from "styled-components";

export default function DisplayMember(props) {
  const [editing, updateEditing] = useState(false);
  const [object, setObject] = useState(props.member);

  const toggleEditing = event => {
    event.preventDefault();
    updateEditing(!editing);
  };
  return (
    <MembersContainer>
      <div
        className="display-row"
        style={editing === true ? { display: "none" } : { display: "" }}
        key={props.member.email}
        onClick={event => toggleEditing(event)}
      >
        <span>{object.firstName}</span>
        <span>{object.lastName}</span>
        <span>{object.role}</span>
        <span>{object.email}</span>
        <button className="edit" onClick={event => toggleEditing(event)}>
          Edit
        </button>
      </div>
      <div
        className="edit-row"
        style={editing === false ? { display: "none" } : { display: "" }}
      >
        <EditMember
          member={object}
          setObject={setObject}
          toggleEditing={toggleEditing}
        />
      </div>
    </MembersContainer>
  );
}

const MembersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;

  .display-row,
  .edit-row {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      width: 100%;
      text-align: left;
    }
    button.edit {
      text-align: center;
      width: 100%;
    }
  }
`;
