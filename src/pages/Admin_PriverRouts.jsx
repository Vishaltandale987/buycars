
import { Navigate } from 'react-router-dom';

function Admin_PriverRouts({ children }) {


  let user_role = localStorage.getItem("role");

   

   
      if (user_role === "dealer") {
        return children;
      } else {
          alert("You are not a Dealer.") 
          
          return <Navigate to="/" />;
      }
 
}

export default Admin_PriverRouts
