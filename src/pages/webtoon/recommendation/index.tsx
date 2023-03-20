import Carousel from "@/src/components/common/Carousel";
import React from "react";

const Recommendation = () => {
  return (
    <main>
      <section style={{ padding: "0 30px", position: "relative" }}>
        <div style={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}>
          <Carousel>
            <Carousel.Item>
              <div style={{ width: "calc(100vw - 60px)", height: "400px", backgroundColor: "skyblue" }}>item 1</div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ width: "calc(100vw - 60px)", height: "400px", backgroundColor: "pink" }}>item 2</div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ width: "calc(100vw - 60px)", height: "400px", backgroundColor: "green" }}>item 3</div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ width: "calc(100vw - 60px)", height: "400px", backgroundColor: "tomato" }}>item 4</div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ width: "calc(100vw - 60px)", height: "400px", backgroundColor: "blue" }}>item 5</div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Recommendation;
