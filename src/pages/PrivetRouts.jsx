import React from "react";
import { Navigate } from "react-router-dom";

function PrivetRouts({ children }) {
  // get user
  let userId = localStorage.getItem("id");
  // console.log(ass,"asasas")

  const add = () => {
    if (userId === null) {
      return false;
    } else if (userId !== "") {
      return true;
    }
  };

  let isAuthenticated = add();

  if (isAuthenticated) {
    return children;
  } else {
    alert("Please Login frist.") 

    return <Navigate to="/userLogin" />;
  }
  
}

export default PrivetRouts;
