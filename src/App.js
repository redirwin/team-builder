import React, { useState } from "react";
import data from "./data/data";
import styled from "styled-components";

import "./styles/App.css";

import DisplayMember from "./components/DisplayMember";
import AddMember from "./components/AddMember";

export default function App() {
  const [team, updateTeam] = useState(data);
  const [input, updateInput] = useState({});

  console.log(team);

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

  return (
    <DisplayContainter>
      <AddMember teamList={team} handleAdd={handleAdd} input={input} />

      <div>
        <h2>Manage Members</h2>
        <div className="table-head">
          <span>First Name</span>
          <span>Last Name</span>
          <span>Role</span>
          <span>Email</span>
          <span>Edit</span>
        </div>

        {team.map(member => {
          return <DisplayMember member={member} />;
        })}
      </div>
    </DisplayContainter>
  );
}

const DisplayContainter = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  .table-head {
    width: 100%;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    color: white;
    background-color: grey;
    font-weight: 700;
    span {
      text-align: center;
      width: 100%;
    }
  }
`;
