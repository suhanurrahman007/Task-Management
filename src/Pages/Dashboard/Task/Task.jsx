import { useDrop } from "react-dnd";
import useTask from "../../../Hooks/useTask";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TaskList from "./TaskList";
import { Helmet } from "react-helmet";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";

const Task = () => {
  const axios = useAxios();
  const [tasks, isLoading, refetch] = useTask();

  const todoTask = tasks?.filter((item) => item?.status === "to-do");
  console.log(todoTask);

  const ongoingTask = tasks?.filter((item) => item?.status === "ongoing");
  console.log(ongoingTask);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToTask(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log(isOver);

  const addItemToTask = async (id) => {
    console.log("Doped : ", id);

    // To-do to Ongoing Drop Section
    try {
      const res = await axios.patch(`/tasks/${id}`, {
        status: "ongoing",
      });
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Successfully Drag Todo to Ongoing");
        refetch();
      } else {
        toast.error("Plz Update This Task");
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };


  return (
    <div className="p-2 bg-[#010313] text-white py-10">
      <Helmet>
        <title>Technovision - TaskList</title>
      </Helmet>
      <SectionTitle
        header={"Task List"}
        miniHeader={"User Create All Task here"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-[#150F2D] p-2 rounded-md space-y-5">
          <div className="flex justify-center items-start">
            <h1 className="text-white text-xl text-center w-40 font-bold py-2 rounded border border-purple-700">
              Todo
            </h1>
          </div>
          <div className="space-y-5">
            {todoTask?.map((task) => (
              <TaskList
                key={task?._id}
                task={task}
                refetch={refetch}
              ></TaskList>
            ))}
          </div>
        </div>
        <div className="bg-[#150F2D] space-y-5 p-2 rounded-md">
          <div className="flex justify-center items-start">
            <h1 className="text-white text-xl text-center w-40 font-bold py-2 rounded border border-purple-700">
              Ongoing
            </h1>
          </div>

          <div ref={drop} className="space-y-5 h-screen">
            <div className="space-y-5">
              {ongoingTask?.map((task) => (
                <TaskList
                  key={task?._id}
                  task={task}
                  refetch={refetch}
                ></TaskList>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
