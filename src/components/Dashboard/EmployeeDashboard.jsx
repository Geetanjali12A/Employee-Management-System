import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>No employee logged in</p>;
  }

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header name={user.firstName} />
      <TaskListNumber taskCounts={user.taskCounts} />
      <TaskList tasks={user.tasks} />
    </div>
  );
}

export default EmployeeDashboard;