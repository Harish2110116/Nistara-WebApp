// import React, { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
// import "./App.css";

// import MainDash from "./components/MainDash/MainDash";
// import RightSide from "./components/RightSide/RightSide";
// import Sidebar from "./components/Sidebar";
// import OrdersMainDash from "./components/Orders/OrdersMainDash";
// import OrdersRightSide from "./components/Orders/OrdersRightSide";
// import EarlyWarningsMainDash from "./components/EarlyWarnings/MainDash";
// import AdminLogin from './components/AdminLogin';
// import AdminSignup from './components/AdminSignup';


// function App() {
//   // Example orders data
 

//   const [selectedMenuItem, setSelectedMenuItem] = useState(null);

//   // Handle menu click from Sidebar
//   const handleMenuClick = (index) => {
//     setSelectedMenuItem(index); // Set the selected menu item
//   };

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<AdminLogin />} />
//         <Route path="/login" element={<AdminLogin />} />
//         <Route path="/signup" element={<AdminSignup />} />
//         <Route path="/dashboard" element={
//           <div className="AppGlass">
//             <Sidebar onMenuClick={handleMenuClick} />
//             <MainDash />
//             <RightSide />
//             {selectedMenuItem === 0 ? (
//               <>
//                 <MainDash />
//                 <RightSide />
//               </>
//             ) : selectedMenuItem === 1 ? (
//               <>
//                 <OrdersMainDash orders={orders} />
//                 <OrdersRightSide orders={orders} />
//               </>
//             ) : selectedMenuItem === 2 ? (
//               <>
//                 <EarlyWarningsMainDash/>
//               </>
//             ) : null}
//           </div>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";

import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar";
import OrdersMainDash from "./components/Orders/OrdersMainDash";
import OrdersRightSide from "./components/Orders/OrdersRightSide";
import EarlyWarningsMainDash from "./components/EarlyWarnings/MainDash";
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';

function App() {
  const orders = [
    { name: "Inflatable Rescue Boats", trackingId: 18908424, time: "12:30 PM", date: "2 March 2022", status: "Request" },
    { name: "Life Jackets and Personal Flotation Devices (PFDs)", trackingId: 18908424, time: "01:00 PM", date: "2 March 2022", status: "Pending" },
    { name: "Emergency Food and Water Supplies", trackingId: 18908424, time: "02:15 PM", date: "2 March 2022", status: "Approved" },
    { name: "First Aid Kits", trackingId: 18908421, time: "03:00 PM", date: "2 March 2022", status: "Delivered" },
    { name: "Safety Helmets", trackingId: 18908425, time: "04:30 PM", date: "2 March 2022", status: "Request" },
    { name: "Portable Generators", trackingId: 18908426, time: "05:45 PM", date: "2 March 2022", status: "Approved" },
    { name: "Water Purification Tablets", trackingId: 18908427, time: "06:00 PM", date: "2 March 2022", status: "Pending" },
    { name: "Tents and Shelter Kits", trackingId: 18908428, time: "07:15 PM", date: "2 March 2022", status: "Approved" },
    { name: "Communication Radios", trackingId: 18908429, time: "08:00 PM", date: "2 March 2022", status: "Delivered" },
    { name: "Flashlights and Batteries", trackingId: 18908430, time: "09:30 PM", date: "2 March 2022", status: "Request" },
    { name: "Medical Supplies", trackingId: 18908431, time: "10:45 PM", date: "2 March 2022", status: "Pending" },
    { name: "Blankets and Sleeping Bags", trackingId: 18908432, time: "11:00 PM", date: "2 March 2022", status: "Approved" },
    { name: "Food Rations", trackingId: 18908433, time: "12:15 AM", date: "3 March 2022", status: "Request" },
    { name: "Hygiene Kits", trackingId: 18908434, time: "01:30 AM", date: "3 March 2022", status: "Approved" },
    { name: "GPS Devices", trackingId: 18908435, time: "02:45 AM", date: "3 March 2022", status: "Pending" }
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenuItem(index);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route path="/dashboard" element={
          <div className="AppGlass">
            <Sidebar onMenuClick={handleMenuClick} />
            {selectedMenuItem === 0 && (
              <>
                <MainDash />
                <RightSide />
              </>
            )}
            {selectedMenuItem === 1 && (
              <>
                <OrdersMainDash orders={orders} />
                <OrdersRightSide orders={orders} />
              </>
            )}
            {selectedMenuItem === 2 && (
              <EarlyWarningsMainDash />
            )}
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
