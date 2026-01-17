import React, { useState } from "react";
import { userData } from "./data";

const App = () => {
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isPasscode, setIsPasscode] = useState(false);
  const [error,setError] = useState(false)

  // console.log(userData)

   function checkUser(email, passcode) {
    console.log("calledd");

    for (let x of userData) {
        
      if(passcode != x.password){
        setIsPasscode(true)
      }  

      if (x.email === email && x.password === passcode) {
        return x;
      } 
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

   
      let data = checkUser(email, passcode);
      setTimeout(() => {
        if(data){
            console.log(data)
        }else{
            setError(true)
            console.log("error")
            throw new Error("User not valid!!")
        }
      },3000)
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          placeholder="enter email"
          id="input-email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          value={passcode}
          type="password"
          placeholder="enter password"
          id="input-password"
          onChange={(e) => setPasscode(e.target.value)}
        />

        <button id="submit-form-btn">submit</button>
      </form>
       <p id="user-error">{error ? "User not found" : ""}</p>
      {isPasscode && <p id="password-error">Password Incorrect</p>}
    </div>
  );
};

export default App;
