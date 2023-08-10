import React from "react";
import classes from "./Home.module.scss";
import ResponsiveCarousel1 from "../../Carousel/Responsive-carousel/ResCarousel1/ResCarousel";

function Home() {
  return (
    <div className={classes.HomeContent}> 
      <ResponsiveCarousel1 />
    </div>
  );
}

export default Home;
