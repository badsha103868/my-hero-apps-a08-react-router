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

// storage a add korar jonno
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

// storage theka remove korar jonno new function

const removeFromStoredApp =(id)=>{
  const storedAppData = getStoredApp();
  const remaining = storedAppData.filter(appId => appId !== id)
  const remainingData = JSON.stringify(remaining)
  localStorage.setItem("installed", remainingData)
}

export { addToAppDB, getStoredApp,  removeFromStoredApp};