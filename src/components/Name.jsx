import React from "react";
import useGlobalStore from "../zustand/store";

const Name = () => {
  const { storedName, storedDate, storedPhone } = useGlobalStore();

  return (
    <div>
      <h1>This is name component , i still have those data on refersh </h1>
      <div>
        <h1>User Information</h1>
        <p>Name: {storedName}</p>
        <p>Date: {storedDate}</p>
        <p>Phone: {storedPhone}</p>
      </div>
    </div>
  );
};

export default Name;
