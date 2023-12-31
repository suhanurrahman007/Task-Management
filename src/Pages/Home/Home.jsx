import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import TargetAudience from "./TargetAudience/TargetAudience";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Technovision - Home</title>
        </Helmet>
        <Banner></Banner>
        <TargetAudience></TargetAudience>
      </div>
    );
};

export default Home;