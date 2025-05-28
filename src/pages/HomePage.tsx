import Carousel from "../components/core/Carousel";
import FullList from "../components/FullList";
import MinialList from "../components/MinimalList";

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel autoplay={true} />
      <div className="my-8"></div>
      <MinialList />
      <div className="my-12"></div>
      <FullList />
    </div>
  );
};

export default HomePage;
