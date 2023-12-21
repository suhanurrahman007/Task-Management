import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/Corporate/Digital-Marketing_Curvearro.jpg"
import img2 from "../../../assets/Corporate/AI-in-apparel-e1677452004548.webp";
import img3 from "../../../assets/Corporate/China-After-COVID-19Industry Expertise.jpg";
import img4 from "../../../assets/Corporate/ASG-Blog-Mastheads-23.webp";


const TargetAudience = () => {
  return (
    <Container>
      <SectionTitle
        header={"Corporate"}
        miniHeader={"Welcome to Our Platform!"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card card-compact bg-[#0D0D21] shadow-xl rounded-md ">
          <figure>
            <img
              className="h-32 w-full transform hover:scale-110 transition-transform duration-300"
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cost Effectiveness</h2>
            <p className="text-justify text-gray-400">
              We offer affordable IT solutions that help you reduce costs and
              improve your bottom line.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-[#0D0D21] shadow-xl rounded-md ">
          <figure>
            <img
              className="h-32 w-full transform hover:scale-110 transition-transform duration-300"
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Innovative Technology</h2>
            <p className="text-justify text-gray-400">
              stay up-to-date with the latest technology trends and offer
              innovative solutions that help you stay ahead of the competition.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-[#0D0D21] shadow-xl rounded-md ">
          <figure>
            <img
              className="h-32 w-full transform hover:scale-110 transition-transform duration-300"
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Industry Expertise</h2>
            <p className="text-justify text-gray-400">
              We specialize in serving specific industries, such as healthcare,
              finance, or manufacturing, and offer tailored solutions.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-[#0D0D21] shadow-xl rounded-md ">
          <figure>
            <img
              className="h-32 w-full transform hover:scale-110 transition-transform duration-300"
              src={img4}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Scalability</h2>
            <p className="text-justify text-gray-400">
              Our solutions are scalable and can grow with your business,
              ensuring that you get the most value out of your investment.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TargetAudience;
