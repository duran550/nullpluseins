import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";
import programs from "../../components/json/data";

function Home() {
  const [changeProgram, setChangeProgram] = useState();

  useEffect(() => {
    const shuffled = [...programs].sort(() => 0.5 - Math.random());

    const interval = setInterval(() => {
      // const shuffledIndex = shuffled.slice(0, 3);
      // setChangeProgram(shuffledIndex)
      console.log("hello there James")
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      {changeProgram?.map((program) => (
        <div key={program.id}>
          <div>
            <img src={program.img} alt={program.category} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
