import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./ProgramItem.module.scss";
import programs from "../json/data";
import RandomProgram from "../RandomPrograms/RandomProgram";

const ProgramItem = () => {
  const { programId } = useParams();
  const [singleProgram, setSingleProgram] = useState([]);
  const [randomProgram, setRandomProgram] = useState();

  const handleRandomProgram = (programs, num) => {
    const filteredPrograms = programs.filter((program) => {
      return program.id != programId
    })
    const shuffled = [...filteredPrograms].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    const anotherProgram = handleRandomProgram(programs, 3);
    setRandomProgram(anotherProgram);
  }, [programId]);


  useEffect(() => {
    const program = programs?.filter(
      (program) => program.id === parseInt(programId)
    );
    setSingleProgram(program[0]);
  }, [programId]);

  const { img, caption, date, des, place, category, link, time, address } =
    singleProgram;

  return (
    <div>
      <article className={classes.program}>
        <div className={classes.programD_Caption}>
          <h2>{caption}</h2>
        </div>
        <div className={classes.cat_day_date_place}>
          <h4 className={classes.programD_Category}>{category}</h4>
          <h5>
            {`${date}, ${time} at`} <Link to={link}>{place}</Link>
          </h5>
        </div>
        <div className={classes.programD_img_Descripttion}>
          <img src={`/${img}`} alt={`${place} view not found`} />
          <h2>{des}</h2>
        </div>
        <div className={classes.programD_adress_btn}>
          <button>Subscribe</button>
          <div className={classes.programD_adress}>
            <h2>Address</h2>
            <h3>{address}</h3>
          </div>
        </div>
      </article>
      <RandomProgram randomPrograms={randomProgram} />
    </div>
  );
};

export default ProgramItem;
