import { Helmet } from "react-helmet";
import Container from "../../components/Container/Container";

const Activity = () => {
    return (
      <Container>
        <Helmet>
          <title>Technovision - Activity</title>
        </Helmet>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex justify-center items-center h-screen"
        >
          <p className="text-2xl font-bold text-purple-400">
            Features implemented Activity Section
          </p>
        </div>
      </Container>
    );
};

export default Activity;