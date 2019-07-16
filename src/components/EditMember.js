import React, { useState } from "react";

export default function EditMember(props) {
  const [input, setInput] = useState({
    firstName: props.member.firstName,
    lastName: props.member.lastName,
    role: props.member.role,
    email: props.member.email
  });

  const handleChanges = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div onClick={e => props.handleEdit(e)}>
      <form onSubmit={event => props.handleAdd(event, input)}>
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

        <button>Save</button>
      </form>
    </div>
  );
}
