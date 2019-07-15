import React, { useState } from "react";
import data from "./data/data";

import "./styles/App.css";

import Form from "./components/Form";

export default function App() {
  const [team, updateTeam] = useState(data);
  const [memberToEdit, updateMemberToEdit] = useState({ name: "" });

  const handleSubmit = (event, member) => {
    event.preventDefault();
    updateTeam([...team, member]);
  };

  const editMember = member => {
    console.log("Edit this member: ", member);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
          {team.map(member => {
            return (
              <tr
                key={member.email}
                onClick={event => updateMemberToEdit(member)}
              >
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.role}</td>
                <td>{member.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Form
        teamList={team}
        handleSubmit={handleSubmit}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
    </>
  );
}
