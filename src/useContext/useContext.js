import { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleLogo = () => {   // This is function to toggle logo
    setShow(!show);
  };

  if (showNavbar) {     // This is to toggle background overflow
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible'; 
  }

  const handleShowNavbar = () => {  // This is function to toggle navbar
    setShowNavbar(!showNavbar);
  };

  return <AppContext.Provider value={{
    show,
    showNavbar,
    setShowNavbar,
    toggleLogo,
    handleShowNavbar
  }}>{children}</AppContext.Provider>;
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
