import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ResCarousel2.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export default function ResponsiveCarousel2({ slider }) {
  return (
    <div className="container">
      {/* <section className="section_1"> */}
        <Carousel
          showArrows={false}
          autoPlay={true}
          showIndicators={false}
          infiniteLoop={true}
          dynamicHeight={false}
          interval={10000}
          className="mySwiper"
          style={{ zIndex: "-1" }}
        >
          {slider.map((item) => (
            <Link to={`programs/${item.id}`}>
            <div>
              <div key={item.id} className="swipItem">
                <div className="imgBox">
                  <img src={item.img} alt="slides" data-interval={5000} />
                </div>
              </div>
              <div className="cat_txt">
                <div className="category_place">
                    <h4>{item.category}</h4>
                    <h5>{item.place}</h5>
                </div>
                <div className="caption">
                    <h4>{item.caption}</h4>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </Carousel>
      {/* </section> */}
    </div>
  );
}
