import React, { useState } from "react";
import data from "./data";

import "./App.css";

function App() {
  const [teamList, updateTeamList] = useState(data);
  console.log(data);

  return <div className="App" />;
}

export default App;
