import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function AddMember(props) {
  const [input, setInput] = useState({});

  useEffect(() => {
    setInput({
      firstName: "",
      lastName: "",
      role: "",
      email: ""
    });
  }, [props.input]);

  const handleChanges = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2>Add Team Member</h2>
      <AddForm onSubmit={event => props.handleAdd(event, input)}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={input.firstName}
          onChange={event => handleChanges(event)}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={input.lastName}
          onChange={event => handleChanges(event)}
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={input.role}
          onChange={event => handleChanges(event)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={event => handleChanges(event)}
        />

        <button>Submit</button>
      </AddForm>
    </>
  );
}

const AddForm = styled.form``;
