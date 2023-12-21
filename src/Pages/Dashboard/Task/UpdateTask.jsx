import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import useTask from "../../../Hooks/useTask";

const UpdateTask = () => {
  const axios = useAxios();
  const [tasks] = useTask()
  const {id} = useParams()

  const findTask = tasks.find(item => item._id === id)
  const {title, description, priority, deadlines } = findTask;

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const updateTaskInfo = {
      title: data?.title,
      description: data?.description,
      priority: data?.priority,
      deadlines: data?.deadlines,
    };
    // console.log(taskInfo);
    try {
      const res = await axios.put(`/tasks/${id}`, updateTaskInfo);
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Successfully Update This Task");
      } else {
        toast.error("Plz Update This Task");
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  return (
    <div className="py-8 bg-[#010313] overflow-x-auto">
      <SectionTitle
        header={"Add Task"}
        miniHeader={"User any Task added here"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Task Title <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              defaultValue={title}
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
                defaultValue={priority}
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
                defaultValue={deadlines}
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
              defaultValue={description}
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
    </div>
  );
};

export default UpdateTask;
