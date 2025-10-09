import { toast } from "react-toastify";


const getStoredApp = () => {
  const storedAppsSTR = localStorage.getItem("installed");
  if (storedAppsSTR) {
    return JSON.parse(storedAppsSTR);
  } 
  else {
    return [];
  }
};


const addToAppDB = (id) => {
  const storedAppData = getStoredApp();
  const numericId = parseInt(id); 

  if (storedAppData.includes(numericId)) {
    toast.warning("⚠️ App already installed!");
  } else {
    storedAppData.push(numericId);
    const data =JSON.stringify(storedAppData)
    localStorage.setItem("installed", data);
    toast.success("✅ Installed Successfully");
  }
};

export { addToAppDB, getStoredApp };