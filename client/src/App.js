import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ContainerHome from "./components/ContainerHome/ContainerHome";
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { iecho } from "./redux/actions/index";


function App() {
  
  const dispatch = useDispatch();

  // Take the state from the store
  const allEchoes = useSelector(state => state.echoes);

  // Set the state with the user's input
  const [echo, setEcho] = useState('');

  useEffect(() => {
    dispatch(iecho(echo));
  }, [dispatch, echo]);

  return (
    <div className="App">
      <NavBar setEcho={setEcho}/>
      <div>
        <ContainerHome allEchoes={allEchoes && allEchoes}/>
      </div>
    </div>
  );
}

export default App;
