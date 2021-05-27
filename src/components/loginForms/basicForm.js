import React, { useState } from "react";

const BasicForm = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [option, setOption] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { userName: userName, password: password, option: option };

    // this setAllEntry is used for send the user data to backend
    setAllEntry([...allEntry, newEntry]);
    alert(`name: ${userName}, password: ${password}, option: ${option}`);
    console.log(newEntry);
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Login Form */}
          <form action="" onSubmit={submitForm} className="form">
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="usename"
              placeholder="User name"
              autoComplete="off"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required="yes"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="yes"
            />
            <div className="fadeIn box">
              <select required onChange={(e) => setOption(e.target.value)}>
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
            </div>
            <input
              type="submit"
              className="fadeIn fourth"
              defaultValue="Log In"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
