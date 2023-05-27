import React, { useEffect, useState } from 'react'
import "./Admin.css";
import axios from 'axios';
import Admin_Inventry from './Admin_Inventry';
import Asmin_Add_New_Car from './Asmin_Add_New_Car';

function DealerAdmin() {
    const [data, setdata] = useState()


    let All="all"
    const getPost = async () => {
        try {
          const res = await axios(`https://serverside-qga2.vercel.app/dealers/${All}/${All}/${All}`);
          setdata(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getPost()
      }, [data])
      

  return (
    <div>
          <p style={{
        color: "rgb(220, 20, 60)",
        fontFamily:"inherit",
        fontSize:"50px",
        marginBottom:"30px"

      }}> <b> Dealer Admin Panel</b> </p>

<Asmin_Add_New_Car/>

<div id='secondcarssInventry'>

{data?.map((el, index) => {
    
    return <Admin_Inventry key={index} data={el} />;
})}
</div>


      
    </div>
  )
}

export default DealerAdmin
