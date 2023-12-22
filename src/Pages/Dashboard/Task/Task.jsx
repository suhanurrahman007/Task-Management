import { useDrop } from "react-dnd";
import useTask from "../../../Hooks/useTask";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TaskList from "./TaskList";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Task = () => {
  const [tasks, isLoading, refetch] = useTask();
  const [Task, setTask] = useState(tasks);
  console.log(Task);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToTask(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log(isOver);

  const addItemToTask = (id) =>{
    setTask((prev) => {
        const mTasks = prev?.map(t => {
            if (t._id === id) {
                return {...t}
            }
            return t
        })
        return mTasks
    })
  }

  return (
    <div className="p-2 bg-[#010313] text-white py-10">
      <Helmet>
        <title>Technovision - TaskList</title>
      </Helmet>
      <SectionTitle
        header={"Task List"}
        miniHeader={"User Create All Task here"}
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="bg-[#150F2D] p-2 rounded-md space-y-5">
          <h1 className="text-center text-2xl font-bold text-purple-400">
            To-do
          </h1>
          <div className="space-y-5">
            {tasks?.map((task) => (
              <TaskList
                key={task?._id}
                task={task}
                refetch={refetch}
              ></TaskList>
            ))}
          </div>
        </div>
        <div className="bg-[#150F2D] p-5 rounded-md">
          <h1 className="text-center text-2xl font-bold text-purple-400">
            Ongoing
          </h1>
          <div ref={drop} className="space-y-5 h-screen"></div>
        </div>
        <div className="bg-[#150F2D] p-5 rounded-md">
          <h1 className="text-center text-2xl font-bold text-purple-400">
            Completed
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Task;
