import React, { useState } from "react";
import data from "./data/data";

import "./styles/App.css";

import Form from "./components/Form";

function App() {
  const [teamList, updateTeamList] = useState(data);
  console.log("Team List: ", teamList);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
