import React from 'react'
import classes from "./PageNotFound.module.scss";
import notfound_image from "./404.jpg"
import notfound_imag_2 from "./404.jpg";
// import notfound_image from "./404_2.png"

const PageNotFound = () => {
    return (
    	<div className={classes.container}>
			{/* <h1>404</h1> */}
			<div className={ classes.imgClass} style={{ backgroundImage: { notfound_image },  backgroundRepeat: "no-repeat" }}>
				<img className={classes.img} src={ notfound_imag_2 } alt='404' height={400} />
			</div>
      		<p>Page not found</p>
    	</div>
  	);
}

export default PageNotFound;