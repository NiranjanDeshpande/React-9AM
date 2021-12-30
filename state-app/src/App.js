import React,{useState} from "react";

function App() {

  const [msg,setMsg] = useState("Hello");
  const [num,setNum] = useState(100);
  const [bool, setBool] = useState(false);

  const myFun = ()=>{
    setMsg("Welcome");
    setNum(200);
    setBool(true);

  }

  return (
    <React.Fragment>
      <h1>{msg}</h1>
      <h1>{num}</h1>
      <h1>{JSON.stringify(bool)}</h1>

      <br></br>
      <br></br>

      <button onClick={myFun}>Click me</button>
    </React.Fragment>
  );
}

export default App;
