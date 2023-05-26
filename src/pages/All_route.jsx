import React from "react";
import { Route, Routes } from "react-router-dom";



import Home from "./Home/Home";
import Second_Hand_Cars from "./Second Hand Cars/Second_Hand_Cars";
import New_cars_page from "./New cars/New_cars_page";
import Sign_Up from "./signup/Sign_Up";
import Sign_In from "./signin/Sign_In";
import SecondHandCarSinglePage from "../components/Submit form for Second hand car/SecondHandCarSinglePage";
import Singlepage from "../components/submit new car form/Singlepage";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/secondHandCars"
          element={
    
              <Second_Hand_Cars />
       
          }
        ></Route>

     

        <Route
          path="/newCars"
          element={
           
              <New_cars_page />
       
          }
        ></Route>

        


        <Route path="/secondHandSinglePage" element={<SecondHandCarSinglePage />}></Route>
        <Route path="/newCarSinglePage" element={<Singlepage />}></Route>


        <Route path="/userLogin" element={<Sign_In />}></Route>
        <Route path="/userSignup" element={<Sign_Up />}></Route>
      </Routes>
    </div>
  );
}

export default All_route;
