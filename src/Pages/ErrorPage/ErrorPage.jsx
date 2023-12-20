import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl text-red-500 font-bold mb-4">Error!</h1>
        <p className="text-gray-700 mb-4">Sorry, something went wrong.</p>
        <Link to={"/"}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
