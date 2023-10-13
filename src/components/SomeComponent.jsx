import React, { useEffect, useState } from "react";
import useGlobalStore from "../zustand/store";
import { useNavigate } from "react-router-dom";

const SomeComponent = () => {
  const {
    storedName,
    storedDate,
    storedPhone,
    fetchDataById,
    clearLocalStorage,
  } = useGlobalStore();
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  //   useEffect(() => {
  //     fetchDataById(input);
  //   }, []);

  const handleNavigate = () => {
    navigate("/name");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataById(input);
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleClearLocalStroage = () => {
    clearLocalStorage();
  };

  // State variables to store input values
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  // State variable to determine which input field's functionality to execute
  const [activeInput, setActiveInput] = useState(null);

  // Function to handle form submission
  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (activeInput === "input1") {
      // Perform the desired action for input1 here
      alert(`Input 1 Value: ${input1}`);
      // Reset the input field
      setInput1("");
    } else if (activeInput === "input2") {
      // Perform the desired action for input2 here
      alert(`Input 2 Value: ${input2}`);
      // Reset the input field
      setInput2("");
    }
    // Reset the activeInput
    setActiveInput(null);
  };

  return (
    <div>
      <div>
        <form onClick={handleSubmit}>
          <input
            type="text"
            placeholder="id"
            onChange={handleOnChange}
            value={input}
          />
          <button type="submit">submit</button>
        </form>

        {/* multi input -- dif funtions */}

        <form onSubmit={handleSubmit2}>
          <label>
            Input 1:
            <input
              type="text"
              value={input1}
              onChange={(e) => {
                setActiveInput("input1");
                setInput1(e.target.value);
              }}
            />
          </label>
          <label>
            Input 2:
            <input
              type="text"
              value={input2}
              onChange={(e) => {
                setActiveInput("input2");
                setInput2(e.target.value);
              }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>User Information</h1>
        <p onClick={handleNavigate}>Name: {storedName}</p>
        <p>Date: {storedDate}</p>
        <p>Phone: {storedPhone}</p>
        <div>
          <button type="button" onClick={handleClearLocalStroage}>
            clear local
          </button>
        </div>
      </div>
    </div>
  );
};

export default SomeComponent;
