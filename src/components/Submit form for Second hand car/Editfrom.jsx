import React, { useEffect, useRef, useState } from "react";
import { FormLabel, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import "./CarSubmitform.css";
import moment from "moment/moment";

let Second_hand_car_id = localStorage.getItem("Second_hand_car_id");

const initState = {
  model_name: "",
  year_model: "",
  original_paint: "",
  img: "",
  km_run: "",
  major_scratches: "",
  number_of_accidents_reported: "",
  number_of_previous_buyers: "",
  registration_place: "",
  description: "",
  mileage: Number,
  price: Number,
};

function  Editfrom({post_Id}) {
  const [image, setimage] = useState("");
  const [formData, setFormData] = useState(initState);







  // edit

  const result = Object.entries(formData)
    .filter(([key, value]) => value !== "")
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  const handle_post_submiting_from = async () => {
    try {
      let res = await axios.put(
        `https://serverside-qga2.vercel.app/dealers/${post_Id}`,
        result
      );
      console.log(res);

      alert(res.data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
          
              </label>
              {image && (
                <div className="shareImgContainer">
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    style={{
                      width: "50px",
                      borderRadius: "50px",
                    }}
                  />
                  <CloseIcon
                    className="shareCancelImg"
                    onClick={() => setimage("")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="shareHr" />

        <div className="input_form">

  

          <Input
            placeholder={"Model Name"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, model_name: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Year Model"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, year_model: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Original Paint"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, original_paint: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Price"}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Milage"}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, mileage: e.target.value })
            }
            required
          />

          <Input
            placeholder={"km run"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, km_run: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Major Scratches"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, major_scratches: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Major number of accidents reported"}
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                number_of_accidents_reported: e.target.value,
              })
            }
            required
          />

          <Input
            placeholder={"Number of previous buyers"}
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                number_of_previous_buyers: e.target.value,
              })
            }
            required
          />

          <Input
            placeholder={"Registration Place"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, registration_place: e.target.value })
            }
            required
          />
          

          <button className="shareButton" onClick={handle_post_submiting_from}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editfrom;
