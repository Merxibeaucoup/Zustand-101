import axios from "axios";
import { create } from "zustand";

const useGlobalStore = create((set) => {
  // if no saved data initialize to empty object
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

    clearLocalStorage: () => {
      // Clears the stored data from local storage
      localStorage.removeItem("myAppGlobalState");
      set({
        storedName: "",
        storedDate: "",
        storedPhone: "",
      });
    },
  };
});

export default useGlobalStore;
