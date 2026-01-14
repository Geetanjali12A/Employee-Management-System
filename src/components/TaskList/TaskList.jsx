function TaskList({ tasks = [] }) {
  return (
    <div className="h-[55%] py-5 mt-10 overflow-auto">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`h-40 w-full rounded-xl mb-4 p-4 ${
            task.completed
              ? "bg-green-400"
              : task.active
              ? "bg-blue-400"
              : task.newTask
              ? "bg-yellow-400"
              : "bg-red-400"
          }`}
        >
          <div className="flex justify-between">
            <h3 className="px-4 py-1 bg-black text-white rounded text-sm">
              {task.category}
            </h3>
            <h4>{task.taskDate}</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2">
            {task.taskTitle}
          </h2>
          <p className="text-sm mt-1">{task.taskDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
