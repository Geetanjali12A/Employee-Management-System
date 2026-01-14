import { getLocalStorage } from "../utils/localStorage";


function AllTask() {
  const { employees } = getLocalStorage();

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-50 overflow-auto">
      {employees.map((emp) =>
        emp.tasks.map((task, index) => {
          let bgColor = "bg-gray-400";
          if (task.completed) bgColor = "bg-green-400";
          else if (task.active) bgColor = "bg-blue-400";
          else if (task.newTask) bgColor = "bg-yellow-400";
          else if (task.failed) bgColor = "bg-red-400";

          return (
            <div
              key={`${emp.id}-${index}`}
              className={`${bgColor} mb-2 py-2 px-4 flex justify-between rounded`}
            >
              <h2>{emp.firstName}</h2>
              <h3>{task.taskTitle}</h3>
              <h5>
                {task.completed
                  ? "Completed"
                  : task.active
                  ? "Active"
                  : task.newTask
                  ? "New"
                  : task.failed
                  ? "Failed"
                  : "Unknown"}
              </h5>
            </div>
          );
        })
      )}
    </div>
  );
}

export default AllTask;