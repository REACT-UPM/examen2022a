import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import './App.css';

const SERVER1 = "https://api.npoint.io/ff1f1c968f8bb2ae2e0d";

function App() {
  const [miLista, setMiLista] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(SERVER1);
        const data = await response.json();         
        //console.log(data);
        setConfig(data);
        //console.log("SETDATA!!---------------");
			} catch(e) {
        console.log(e);
			}
    }
    fetchData();
  }, []);

  async function callServer(){
    try {
      const response = await fetch(config.server);
      const data = await response.json();         
      console.log(data.todos);
      setMiLista(data.todos);
    } catch(e) {
      console.log(e);
    }
  }

  function toggle(index){
    const newMyList = [...miLista];
    newMyList[index].completed = !newMyList[index].completed;
    setMiLista(newMyList);
  }

  return (
    <div id="main">
 				<h2>Examen 2022</h2>
				{config && <button onClick={()=>callServer()}>LLAMAR SERVER</button>}
        {miLista && <TodoList numitems={config.numitems} lista={miLista} myUserId={config.myUserId} toggle={toggle}/>}	
			</div>
  );
}

export default App;
