import { FlexContainer, FlexItem } from "@/src/styles/flex";
import styled from "@emotion/styled";
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface CarouselProps {
  children?: ReactNode;
  active?: boolean;
  index?: number;
  infinity?: boolean;
}

const CarouselContainer = styled(FlexContainer)`
  width: 100%;
  transition: all 0.3s linear 0.5s;
`;

const CarouselItem = styled(FlexItem)`
  /* width: 0; */
  /* width: 500px; */
`;

const CarouselButton = styled(FlexContainer)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translate(0%, -50%);
  border: 1px solid #f0f0f0;
  background-color: #fff;
`;

const CarouselPrevButton = styled(CarouselButton)`
  left: 0px;
`;

const CarouselNextButton = styled(CarouselButton)`
  right: 0;
`;

const CarouselContext = createContext<any>(null);

const Carousel = ({ children, infinity = false }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const isSliding = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClickPrev = () => {
    setIndex(index - 1);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${carouselRef.current.offsetWidth * (index - 1)}px)`;
    }
  };

  const handleClickNext = () => {
    console.log(isSliding);
    if (isSliding.current) return;

    isSliding.current = true;
    setIndex(index + 1);

    if (carouselRef.current) {
      console.log(carouselRef.current.offsetWidth, index, index + 1);
      carouselRef.current.style.transform = `translateX(-${carouselRef.current.offsetWidth * (index + 1)}px)`;
    }
  };

  useEffect(() => {
    console.log(index);
    setTimeout(() => {
      isSliding.current = false;
    }, 600);
  }, [index]);

  return (
    <CarouselContext.Provider value={{ index }}>
      <CarouselContainer ref={carouselRef}>{children}</CarouselContainer>
      <CarouselPrevButton as="button" alignItems="center" justifyContent="center" onClick={handleClickPrev}>
        <GrFormPrevious size={24} />
      </CarouselPrevButton>
      <CarouselNextButton as="button" alignItems="center" justifyContent="center" onClick={handleClickNext}>
        <GrFormNext size={24} />
      </CarouselNextButton>
    </CarouselContext.Provider>
  );
};

const Item = ({ children, index }: CarouselProps) => {
  const context = useContext(CarouselContext);
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <CarouselItem ref={itemRef} flexGrow={1}>
      {children}
    </CarouselItem>
  );
};

Carousel.Item = Item;

export default Carousel;
