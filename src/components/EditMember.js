import React, { useState } from "react";
import styled from "styled-components";

export default function EditMember(props) {
  const [input, setInput] = useState({
    firstName: props.member.firstName,
    lastName: props.member.lastName,
    role: props.member.role,
    email: props.member.email
  });

  const handleChanges = e => {
    props.setObject({ ...props.member, [e.target.name]: e.target.value });
  };

  return (
    <EditForm>
      <form onSubmit={event => props.toggleEditing(event)}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.member.firstName}
          onChange={event => handleChanges(event)}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.member.lastName}
          onChange={event => handleChanges(event)}
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={props.member.role}
          onChange={event => handleChanges(event)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={props.member.email}
          onChange={event => handleChanges(event)}
        />

        <button>Save</button>
      </form>
    </EditForm>
  );
}

const EditForm = styled.div`
  width: 100%;
`;
