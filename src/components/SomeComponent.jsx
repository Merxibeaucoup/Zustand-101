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
