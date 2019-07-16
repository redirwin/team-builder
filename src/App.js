import React, { useState } from "react";
import data from "./data/data";

import "./styles/App.css";

import DisplayMember from "./components/DisplayMember";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";

export default function App() {
  const [team, updateTeam] = useState(data);
  const [input, updateInput] = useState({});

  const handleAdd = (event, input) => {
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

  const handleEdit = (event, input) => {
    event.preventDefault();
    console.log("Editing This: ", input);
  };

  return (
    <>
      <AddMember teamList={team} handleAdd={handleAdd} input={input} />
      <div>
        <div>
          <span>First Name</span>
          <span>Last Name</span>
          <span>Role</span>
          <span>Email</span>
        </div>
        {team.map(member => {
          return <DisplayMember member={member} handleEdit={handleEdit} />;
        })}
      </div>
    </>
  );
}
