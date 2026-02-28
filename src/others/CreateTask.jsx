import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { getLocalStorage } from "../utils/localStorage";

function CreateTask() {
  const { user, setUser } = useContext(AuthContext);
  const { employees } = getLocalStorage();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const { employees } = getLocalStorage();

    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName === assignTo) {
        const newTaskObj = {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle,
          taskDescription: description,
          taskDate,
          category,
        };

        emp.tasks.push(newTaskObj);
        emp.taskCounts.newTask += 1;
        emp.taskCounts.active += 1;
      }
      return emp;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // If assigned employee is logged in → update context instantly
    if (user?.role === "employee") {
      const updatedUser = updatedEmployees.find(
        (emp) => emp.email === user.email
      );
      if (updatedUser) {
        setUser({ role: "employee", ...updatedUser });
      }
    }

    alert("Task Created Successfully ✅");

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">

          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded border mb-4"
            type="text"
            placeholder="Task Title"
            required
          />

          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded border mb-4"
            type="date"
            required
          />

          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded border mb-4"
            required
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.firstName}>
                {emp.firstName}
              </option>
            ))}
          </select>

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded border mb-4"
            type="text"
            placeholder="Category"
            required
          />
        </div>

        <div className="w-1/2">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded border mb-4"
            rows="6"
            placeholder="Description"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 py-3 px-5 rounded w-4/5"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;