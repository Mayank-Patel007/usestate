import './App.css';
import React,{useState} from "react";

function App() {
  const [title,setTitle]=useState(false);
  return(
    <> <div className="container">
      <button className='hidebtn' onClick={()=>setTitle(!title)}>Hide/Show</button>{title}
      {title?" ":<div className='title'><h1>Welcome to React App</h1></div>}
      </div>
    </>
  );
}

export default App;
