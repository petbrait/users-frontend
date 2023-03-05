import styled from "styled-components";
import Image from "next/image";
import Box from "@mui/material/Box";
import ArrowImage from "@/assets/icons/arrowIcon.svg";
import ImagePet from "@/assets/images/pet1.webp";
import ImagePet2 from "@/assets/images/pet2.jpeg";
import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";

interface ArrowProps {
  orientation?: "left" | "right";
}

const Arrow = styled(Image)<ArrowProps>`
  ${({ orientation }) =>
    orientation === "left"
      ? "transform: rotate(90deg)"
      : "transform: rotate(270deg)"};

  opacity: 0.5;
  position: absolute;
  top: 40%;
`;

const Index = () => {
  const NextArrow = ({
    // eslint-disable-next-line unused-imports/no-unused-vars
    currentSlide,
    // eslint-disable-next-line unused-imports/no-unused-vars
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <Arrow src={ArrowImage} orientation="right" alt="" {...props} />
  );
  const PrevArrow = ({
    // eslint-disable-next-line unused-imports/no-unused-vars
    currentSlide,
    // eslint-disable-next-line unused-imports/no-unused-vars
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <Arrow src={ArrowImage} orientation="left" alt="" {...props} />
  );

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box>
      <Slider {...settings}>
        <Box>
          <Image
            width={290}
            height={140}
            priority
            src={ImagePet}
            alt="icon-address"
            data-testid="address"
          />
        </Box>
        <Box>
          <Image
            width={290}
            height={140}
            priority
            src={ImagePet2}
            alt="icon-address"
            data-testid="address"
          />
        </Box>
        <Box>
          <Image
            width={290}
            height={140}
            priority
            src={ImagePet}
            alt="icon-address"
            data-testid="address"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default Index;
