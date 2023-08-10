import items from "./ResCarousel1.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ResCarousel1.scss";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 2 },
//   { width: 1200, itemsToShow: 3 },
// ];

export default function ResponsiveCarousel1() {
  const elastic = items;
  return (
    <div className="container">
      <Carousel 
        showArrows={true}
        autoPlay={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className="mySwiper"
      >
        {elastic.map((item) => (
          <div key={item.id} className="swipItem">
            <div className="imgBox">
              <img src={item.imageUrl} alt="slides" />
            </div>
            {/* <div className="detail">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
