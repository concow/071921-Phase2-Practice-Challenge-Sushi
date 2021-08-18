import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  //const [image, setImage] = useState('');

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(json => setSushi(json));
    //.then(json => console.log(json));
  }, []);

  return (
    <div className="app">
      <SushiContainer sushi={sushi}/>
      <Table />
    </div>
  );
}

export default App;
