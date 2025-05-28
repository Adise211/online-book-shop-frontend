import { Carousel as AntCarousel } from "antd";

interface Props {
  autoplay?: boolean;
  dots?: boolean;
  arrows?: boolean;
}

const Carousel: React.FC<Props> = ({
  autoplay = false,
  dots = false,
  arrows = false,
}) => {
  // Define styles for the content of the carousel
  const contentStyle: React.CSSProperties = {
    height: "50vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <AntCarousel autoplay={autoplay} dots={dots} arrows={arrows}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </AntCarousel>
  );
};

export default Carousel;
