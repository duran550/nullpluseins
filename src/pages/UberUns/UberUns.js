import classes from "./UberUns.module.scss"; 
import React, { useEffect, useRef } from "react";
import { Festivalteam } from "../../components/json/data"; 
import { images } from "../../components/json/data"; 
import vkii from "./logos/vkii_logo_neu.jpg"; 
import ToH_Logo_Ohne_Hintergrund from "./logos/ToH_Logo_Ohne_Hintergrund.png"; 
import RomanoThan from "./logos/RomanoThan.png"; 
import Logo_Bildung_Blau_Orange from "./logos/Logo.Bildung.Blau.Orange.png"; 
import Mapper from "../../components/imageMapper/Mapper";


const UberUns = () => {

  const ref = useRef(null); 

  return (
    <div className={classes.container}>
      <div className={classes.grid_all}>
        <div className={ classes.grid_left }>
          {/* <h3></h3> */}
          <p>
            "Wir gehen ins dritte Festivaljahr und bevor wir starten, 
            werfen wir einen Blick zurück: 2021 haben wir es in die 
            Hand genommen; 2022 konnten wir mit dem Ver- und Zutrauen 
            unserer Unterstützer*innen weitermachen und jetzt, 2023, 
            sind wir Kompliz*innen."
          </p>
          <br></br>
          <p>
            Die Zeit ist geprägt von Wandel und Krise. Dass es Veränderungen 
            braucht, im gemeinsamen Handeln, im gemeinsamen Denken und im 
            Umgang miteinander steht außer Frage. Wir glauben, dass es dafür 
            das Vertrauen in und das Zulassen von bisher ungesehenem Wissen 
            und Expert*innen braucht, dass dadurch neue Formen des Miteinanders 
            entstehen, dazu gehört auch das Aushandeln und Aushalten. 
            Kompliz*innenschaft ist das Fundament dieses Festivaljahrs und der 
            logische nächste Schritt in der Entwicklung. Wir teilen Verantwortung, 
            Ressourcen und Ideen konsequent und bringen das Festival als Kollektiv 
            auf die Bühne. Das Kollektiv sind der VKII Ruhrbezirk e. V., Train of 
            Hope e. V., Romano Than und das Bildungswerk Vielfalt.
          </p>
          
        </div>
        <div className={ classes.grid_right }>
          <p>
            Wenn wir weiter davon ausgehen, dass die Komplexität unserer 
            Gesellschaft neue Formen der Auseinandersetzung und neue 
            Formate für Dialog und Diskurs braucht, dann ist für uns die 
            Kompliz*innenschaft der Weg. Kompliz*innenschaft funktioniert 
            nur durch solidarische und vertrauensvolle Beziehungen. Wir laden 
            Euch ein, gemeinsam mit uns herauszufinden, wie wir Beziehungen und 
            Themen in und für die Stadtgesellschaft solidarisch zukunftsfähig 
            machen.
          </p>
          <br></br>
          <p>
            Wir wollen gemeinsam Gesellschaft anders denken. Sehen, Begegnen und 
            Zuhören sind die Basis. Wir freuen uns auf Euch!
          </p>
        </div>
      </div>

      <div className={classes.grid_all_section_two}>

        <div className={ classes.grid_left }>
          <h3>Zuhören</h3>
          <p>
            Die Grundlage jeglicher menschlicher Kommunikation ist Zuhören. 
            Dieser Satz ist kurz und klar. Was er im Kontext der Selbstverständlichkeit 
            von Diversität und Komplexität bedeutet, gilt es (neu) zu verhandeln.
          </p>
          <br></br>
          
        </div>

        <div className={ classes.grid_middle }>
          <h3>Zuhören</h3>
          <p>
            Jede Begegnung zwischen Menschen ist ein Zusammenspiel aus 
            deren Erfahrungen und deren Wissen. Das ist immer ein agiler 
            Prozess, der die Selbstverständlichkeit von Diversität und 
            Komplexität ermöglicht. 
          </p>
          <br></br>
        </div>

        <div className={ classes.grid_right }>
          <h3>Sehen</h3>
          <p>
            Sehen ist einer unserer wichtigsten Zugänge zur Welt, gerade 
            im Kontext Digitalität. Die wichtigsten Fragen aktuell für uns 
            sind: Wer wird gesehen und wer ist ungesehen? Warum ist das (noch) 
            so? Wie können wir das ändern?
          </p>
          <br></br>
        </div>
      </div>

      <div className={classes.grid_all_section_three}>

        <div className={ classes.grid_left }>

          <h1>Festivalteam</h1>
          {/* <h2></h2> */}
          {/* <br></br> */}

          {
            Festivalteam.map((team, index) => {
              return (
                <div className={`${ classes.section }`}>
                  <h3>{ team.title}</h3>
                  <div>
                    {
                      team.text.map((team_member, index) => {
                        return (
                          <p>{ team_member }</p>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className={ classes.grid_right }>

          <h3>Kooperationspartner</h3>
          {/* <div className={classes.images}>

            <div className={classes.upper}>
              <div className={ classes.imgClass} >
                <img className={classes.img} src={ vkii } alt='image1' height={50} />
              </div>
              <div className={ classes.imgClass} >
                <img className={classes.img} src={ ToH_Logo_Ohne_Hintergrund } alt='image1' height={50} />
              </div>
            </div>

            <div className={classes.lower}>
              <div className={ classes.imgClass} >
                <img className={classes.img} src={ RomanoThan } alt='image1' height={80} />
              </div>
              <div className={ classes.imgClass} >
                <img className={classes.img} src={ Logo_Bildung_Blau_Orange } alt='image1' height={50} />
              </div>
            </div>

          </div> */}

          <br></br>

          {/* <Mapper /> */}

          {/* <map ref={ref} id="infographic">
            <area
              shape="poly"
              coords="129,0,260,95,129,138"
              href="https://developer.mozilla.org/docs/Web/HTTP"
              target="_blank"
              alt="HTTP"
            />
            <area
              shape="poly"
              coords="260,96,209,249,130,138"
              href="https://developer.mozilla.org/docs/Web/HTML"
              target="_blank"
              alt="HTML"
            />
            <area
              shape="poly"
              coords="209,249,49,249,130,139"
              href="https://developer.mozilla.org/docs/Web/JavaScript"
              target="_blank"
              alt="JavaScript"
            />
            <area
              shape="poly"
              coords="48,249,0,96,129,138"
              href="https://developer.mozilla.org/docs/Web/API"
              target="_blank"
              alt="Web APIs"
            />
            <area
              shape="poly"
              coords="0,95,128,0,128,137"
              href="https://developer.mozilla.org/docs/Web/CSS"
              target="_blank"
              alt="CSS"
            />
          </map>
          <img useMap="#infographic" src={vkii}  alt='image1' height={50} /> */}
        </div>

      </div>

    </div>
  )
}

export default UberUns; 