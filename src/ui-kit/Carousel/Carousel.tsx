import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CarouselImage {
  name: string;
  src: string;
}
export interface CarouselProps {
  images: CarouselImage[];
}

export function Carousel(props: CarouselProps) {
  return (
    <SliderWrapper
      infinite
      slidesToShow={3}
      slidesToScroll={1}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
    >
      {props.images.map((i) => (
        <img src={i.src} alt={i.name} key={i.src}/>
      ))}
    </SliderWrapper>
  );
}

const SliderWrapper = styled(Slider)`
  font-size: 0;
`;

const Arrow = styled("div")`
  background: #003554;
  color: white;
  font-size: 100px;
  font-family: monospace;
  height: 100%;
  width: 30px;
  z-index: 1;
  top: 0;
  transform: initial;
  line-height: initial;

  &:hover {
    background: #003554;
  }

  :before {
    position: absolute;
    font-size: 70px;
    font-weight: 100;
    font-family: Gordita;
    transform: translateY(50%);
    margin-top: 50%;
  }
`;

const PrevArrow = styled(Arrow)`
  left: 0;

  :before {
    content: "‹";
  }
`;

const NextArrow = styled(Arrow)`
  right: 0;

  :before {
    content: "›";
  }
`;
