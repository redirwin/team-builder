import React, { useState } from "react";
import data from "./data/data";

import "./styles/App.css";

import Form from "./components/Form";

export default function App() {
  const [teamList, updateTeamList] = useState(data);
  console.log("Team List: ", teamList);

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
          {data.map(member => {
            return (
              <tr key={member.email}>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.role}</td>
                <td>{member.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Form />
    </>
  );
}
