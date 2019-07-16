import React, { useState } from "react";
import data from "./data/data";

import "./styles/App.css";

import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";

export default function App() {
  const [team, updateTeam] = useState(data);
  const [memberToEdit, updateMemberToEdit] = useState({});
  const [input, updateInput] = useState({});

  const handleAdd = (event, input) => {
    // console.log(input);
    event.preventDefault();
    if (
      input.firstName === "" ||
      input.lastName === "" ||
      input.role === "" ||
      input.email === ""
    ) {
      console.log("bad input");
    } else {
      updateTeam([...team, input]);
      updateInput({});
    }
  };

  const loadEditForm = (event, member) => {
    event.preventDefault();
    updateMemberToEdit(member);
    console.log("Edit this: ", member);
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
                onClick={event => loadEditForm(event, member)}
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
      <AddMember teamList={team} handleAdd={handleAdd} input={input} />
    </>
  );
}
