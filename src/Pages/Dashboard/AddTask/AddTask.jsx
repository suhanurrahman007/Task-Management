import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import toast from "react-hot-toast";

const AddTask = () => {
  const { user } = useAuth();

  const axios = useAxios();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
     e.preventDefault();
    const taskInfo = {
      image: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
      title: data?.title,
      description: data?.description,
      priority: data?.priority,
      deadlines: data?.deadlines,
    };

    // console.log(taskInfo);

    const res = await axios.post("/tasks", taskInfo);
    // console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Successfully Task added!");
      e.target.reset();

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
    </div>
  );
};

export default AddTask;