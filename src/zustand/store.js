import axios from "axios";
import { create } from "zustand";

const useGlobalStore = create((set) => {
  const savedState = JSON.parse(localStorage.getItem("myAppGlobalState")) || {};

  return {
    storedName: savedState.name || "",
    storedDate: savedState.date || "",
    storedPhone: savedState.phone || "",

    fetchDataById: async (id) => {
      try {
        const response = await axios.get(`http://localhost:5000/yeet/${id}`);
        const fetchedData = response.data;

        set({
          storedName: fetchedData.name,
          storedDate: fetchedData.date,
          storedPhone: fetchedData.phone,
        });

        // Updates local storage with the latest values
        localStorage.setItem(
          "myAppGlobalState",
          JSON.stringify({
            name: fetchedData.name,
            date: fetchedData.date,
            phone: fetchedData.phone,
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  };
});

export default useGlobalStore;
