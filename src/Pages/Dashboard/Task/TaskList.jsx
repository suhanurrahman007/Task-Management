import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDrag } from "react-dnd";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
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

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const taskInfo = {
      title: data?.title,
      description: data?.description,
      priority: data?.priority,
      deadlines: data?.deadlines,
    };

    console.log(taskInfo);
  };

  return (
    <div
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
        {/* <button >
          
        </button> */}
        <button
          className="bg-green-800 p-1 rounded-full text-purple-200 transform hover:scale-125 transition-transform duration-300"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <span>
            <FaEdit></FaEdit>
          </span>
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-[#0C0D21]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Task Title <span className="text-red-700">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Enter your Task Title"
                  className="input bg-black text-white input-bordered placeholder:text-xs"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div className="form-control w-full my-6">
                  <label className="label">
                    <span className="label-text text-white">
                      Priority <span className="text-red-700">*</span>
                    </span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("priority", { required: true })}
                    className="select bg-black text-white select-bordered w-full"
                  >
                    <option disabled value="default">
                      Select a Priority
                    </option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="form-control">
                  <label htmlFor="deadlines" className="label">
                    <span className="label-text text-white">
                      Task deadlines <span className="text-red-700">*</span>
                    </span>
                  </label>
                  <input
                    type="date" // Change type to "date"
                    id="deadlines"
                    {...register("deadlines", { required: true })}
                    className="input bg-black text-white input-bordered"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Task Description <span className="text-red-700">*</span>
                  </span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Enter your Task Description"
                  className="textarea bg-black text-white textarea-bordered placeholder:text-xs"
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={"Add Task"}
                  className="btn border-none text-white bg-[#2c1e6d] hover:bg-[#140d32]"
                />
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default TaskList;
