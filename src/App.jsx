import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";


import Login from "./components/Auth/Login.jsx";
import AdminDashBoard from "./components/Dashboard/AdminDashboard";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashboard";

function App() {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;

  if (user.role === "admin") return <AdminDashBoard />;

  if (user.role === "employee") return <EmployeeDashBoard />;

  return null;
}


export default App;