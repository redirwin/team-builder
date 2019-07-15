import React, {useState} from 'react';
import data from "./data"

import './App.css';


function App() {
  const [teamList, updateTeamList] = useState(data);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
