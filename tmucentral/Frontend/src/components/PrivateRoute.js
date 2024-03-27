// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute"; // Adjust the path as necessary
// import YourComponent from "./YourComponent"; // Component to protect
// import Login from "./Login"; // Your login component

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/protected" element={<PrivateRoute component={YourComponent} />} />
//       </Routes>
//     </Router>
//   );
// }

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// This component can now be used within your Routes to protect any route.
export default function PrivateRoute() {
  const { currentUser } = useAuth();

  // If currentUser exists, render the child components (Outlet)
  // Otherwise, redirect to the login page
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}
