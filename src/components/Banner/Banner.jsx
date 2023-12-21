import { Link } from "react-router-dom";
import banner from "../../assets/Banner.png"
import Container from "../Container/Container";
const Banner = () => {

  return (
    <Container>
      <div className="lg:flex text-center md:py-12">
        <div className="lg:w-2/3 mb-7 text-center lg:text-left space-y-7  items-center">
          <h1 className="text-5xl font-extrabold">
            Task Management Strategies
            <br />
            <span data-aos="flip-down" className="text-[#c5a35e]">
              for Developers
            </span>
          </h1>
          <p
            className="lg:w-3/4 lg:text-justify text-gray-500"
          >
            In the fast-paced world of software development, efficient task management is crucial for success. Explore effective strategies tailored for developers to streamline workflows, enhance collaboration, and boost productivity. 
          </p>
          <div>
            <Link
              to={"/dashboard/myProfile"}
              className=" text-white font-bold py-3 px-6 rounded border border-purple-700  hover:bg-purple-700"
            >
              Let’s Explore
            </Link>
          </div>
        </div>

        <div className="flex md:justify-center lg:justify-start">
          <img className="rounded-full w-full md:w-96" src={banner} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
