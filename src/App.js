import './App.css';
import React,{useState} from "react";

function App() {
  const [title,setTitle]=useState(false);
  return(
    <>
      <button onClick={()=>setTitle(!title)}>Hide/Show</button>{title}
      {title?" ":"welcome to react app"}
    
    </>
  );
}

export default App;
