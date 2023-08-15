import classes from "./Home.module.scss";
import ResponsiveCarousel2 from "../../Carousel/Responsive-carousel/ResCarousel2/ResCarousel2";
import {slised} from "../../components/json/data";

function Home() {

  return (
    <div className={classes.container}>
      {
        slised.map((slide) => (
          <ResponsiveCarousel2 slider={slide} />
        ))
      }
    </div>
  );
}

export default Home;
