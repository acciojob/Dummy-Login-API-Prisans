import React, { useState } from "react";
import { userData } from "./data";

const App = () => {
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  //   const [isPasscode, setIsPasscode] = useState(false);
  //   const [error, setError] = useState(false);

  const [error, setError] = useState({
    email: "",
    password: "",
    form: "",
  });

  // console.log(userData)

  function checkUser(email, passcode) {
    console.log("calledd");

    for (let x of userData) {
      if (passcode != x.password) {
        setError((prev) => ({ ...prev, password: "Password Incorrect" }));
      }

      if (x.email === email && x.password === passcode) {
        return x;
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError({
        email: "",
        password: "",
        form: "",
      })

    let data = checkUser(email, passcode);
    setTimeout(() => {
      if (data) {
        console.log(data);
       
      } else {
        setError((prev) => ({ ...prev, form: "User not found" }));

        console.log("error");
        throw new Error("User not valid!!");
      }
    }, 3000);
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
      <p id="user-error">{error.form}</p>
      <p id="password-error">{error.password}</p>
    </div>
  );
};

export default App;
