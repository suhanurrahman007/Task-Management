import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDrag } from "react-dnd";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const TaskList = ({ task, refetch }) => {
  const axios = useAxios();
  const { _id, title, description, priority, deadlines } = task;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);

  const handleDelete = (id) => {
    console.log(id);
    try {
      axios.delete(`/tasks/${id}`).then((res) => {
        console.log(res.data);

        if (res.data.deletedCount > 0) {
          toast.success("Successfully Task added!");
          refetch();
        }
      });
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };
  return (
    <div
      data-aos="zoom-out"
      ref={drag}
      className="bg-[#010313] p-3 rounded-md shadow-md text-white space-y-2"
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-justify text-xs text-gray-400">{description}</p>
      <div className="flex justify-between items-center">
        <h3>
          <span className="font-bold mr-2">Deadline : </span>{" "}
          <span className="text-purple-400 text-sm">{deadlines}</span>
        </h3>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-orange-800 p-1 rounded-full text-purple-200 transform hover:scale-125 transition-transform duration-300"
        >
          <span>
            <MdDelete></MdDelete>
          </span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h3>
          <span className="font-bold mr-2">Priority : </span>{" "}
          <span className="text-purple-400 text-sm">{priority}</span>
        </h3>
        <Link
          to={`/dashboard/updateTask/${_id}`}
          className="bg-green-800 p-1 rounded-full text-purple-200 transform hover:scale-125 transition-transform duration-300"
        >
          <span>
            <FaEdit></FaEdit>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TaskList;
