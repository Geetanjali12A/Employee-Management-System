import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AllTask from "../../others/AllTask";
import CreateTask from "../../others/CreateTask";
import Header from "../../others/Header";

function AdminDashBoard() {
  const { user } = useContext(AuthContext); 

  return (
    <div className="h-screen w-full p-7">
      <Header name={user?.firstName || "Admin"} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashBoard;
