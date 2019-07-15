import React, { useState } from "react";

export default function Form(props) {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: ""
  });
  console.log(member);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.firstName);
    console.log(member.role);
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={member.firstName}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={member.lastName}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={member.role}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        First Name:
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={event => handleChange(event)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
