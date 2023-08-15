import items from "./ResCarousel1.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ResCarousel1.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export default function ResponsiveCarousel1() {
  const elastic = items;
  return (
    <div className="container">
      <div className="sliders_txt">
        <section className="section_1">
          <div className="section1_txt_div">
            <div className="section1_txt_div_header">
              <h2>fact check</h2>
            </div>
            <div className="section1_txt_div_body">
              <div className="section1_txt_div_body_left">
                <div className="section1_txt_div_body_left_top">
                  <h3>734</h3>
                  <p>Spectators</p>
                </div>
                <div className="section1_txt_div_body_left_bottom">
                  <h3>17</h3>
                  <p>Partners</p>
                </div>
              </div>
              <div className="section1_txt_div_body_right">
              <div className="section1_txt_div_body_right_top">
                  <h3>58</h3>
                  <p>experts</p>
                </div>
                <div className="section1_txt_div_body_right_bottom">
                  <h3>11</h3>
                  <p>subjects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section1_slider_div">
            <Carousel
              showArrows={true}
              autoPlay={false}
              showIndicators={false}
              infiniteLoop={true}
              dynamicHeight={false}
              className="mySwiper"
            >
              {elastic.map((item) => (
                <div key={item.id} className="swipItem">
                  <div className="imgBox">
                    <img src={item.imageUrl} alt="slides" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}
