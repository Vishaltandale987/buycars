import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Second_Hand_Cars from "./Second Hand Cars/Second_Hand_Cars";
import New_cars_page from "./New cars/New_cars_page";
import Sign_Up from "./signup/Sign_Up";
import Sign_In from "./signin/Sign_In";
import SecondHandCarSinglePage from "../components/Submit form for Second hand car/SecondHandCarSinglePage";
import Singlepage from "../components/submit new car form/Singlepage";
import DealerAdmin from "./Dealer Admin/DealerAdmin";
import PrivetRouts from "./PrivetRouts";
import Admin_PriverRouts from "./Admin_PriverRouts";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/secondHandCars"
          element={
            <PrivetRouts>
              <Second_Hand_Cars />
            </PrivetRouts>
          }
        ></Route>

        <Route
          path="/newCars"
          element={
            <PrivetRouts>
              <New_cars_page />
            </PrivetRouts>
          }
        ></Route>

        <Route
          path="/dealeradmin"
          element={
            // <PrivetRouts>
              <Admin_PriverRouts>
                <DealerAdmin />
              </Admin_PriverRouts>
            // </PrivetRouts>
          }
        ></Route>

        <Route
          path="/secondHandSinglePage"
          element={<SecondHandCarSinglePage />}
        ></Route>
        <Route path="/newCarSinglePage" element={<Singlepage />}></Route>

        <Route path="/userLogin" element={<Sign_In />}></Route>
        <Route path="/userSignup" element={<Sign_Up />}></Route>
      </Routes>
    </div>
  );
}

export default All_route;
