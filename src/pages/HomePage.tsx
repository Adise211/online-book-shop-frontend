import Carousel from "../components/core/Carousel";
import MinialList from "../components/MinimalList";

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel autoplay={true} />
      <div className="my-8"></div>
      <MinialList />
    </div>
  );
};

export default HomePage;
