import { Link } from "react-router-dom";
import banner from "../../assets/Banner.png"
import Container from "../Container/Container";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <Container>
      <div className="lg:flex text-center md:py-12">
        <div className="lg:w-2/3 mb-7 text-center lg:text-left space-y-7  items-center">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-5xl font-extrabold"
          >
            Task Management Strategies
            <br />
            <span className="text-purple-600">For Corporate</span>
          </h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="lg:w-3/4 lg:text-justify text-gray-500"
          >
            It seems like your message is a bit unclear. If by short dec you
            mean a short description or if you have a specific topic or question
            in mind, please provide more details so I can better assist
            you.Whether it is related to task management.
          </p>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <Link
              to={"/dashboard/myProfile"}
              className=" text-white font-bold py-3 px-6 rounded border border-purple-700  hover:bg-purple-700"
            >
              Let’s Explore
            </Link>
          </div>
        </div>

        <div className="flex md:justify-center lg:justify-start">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="rounded-full w-full md:w-96"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
