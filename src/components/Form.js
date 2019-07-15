import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: ""
  });
  console.log(props);

  useEffect(() => {
    setMember(props.memberToEdit);
  }, [props.memberToEdit]);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={event => props.handleSubmit(event, member)}>
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
