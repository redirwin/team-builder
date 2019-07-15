import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: ""
  });

  useEffect(() => {
    setInput(props.memberToEdit);
  }, [props.memberToEdit]);

  const handleChanges = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={event => props.handleSubmit(event, input, props.memberToEdit)}
    >
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={event => handleChanges(event)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={event => handleChanges(event)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={input.role}
          onChange={event => handleChanges(event)}
        />
      </label>
      <label>
        First Name:
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={event => handleChanges(event)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
