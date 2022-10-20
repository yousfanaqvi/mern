import logo from './logo.svg';
import './App.css';
import React,{useEffect} from "react";
import axios from "axios"
function App() {

  const x="";
  React.useEffect(() => {
   
    axios.get(`/api/test`).then(res => {
          console.log(res);
          x=res;
    })
        
      }
   );

  return (
    <div className="App">
     <h1>
hello{x}
     </h1>
    </div>
  );
}

export default App;
