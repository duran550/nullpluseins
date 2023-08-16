import React from "react";
import classes from "./imprint.module.scss";
import { Link } from "react-router-dom";

function Imprint() {
  return (
    <div className={classes.container}>
      <div className={classes.imprints}>
        <div className={classes.imprint_header}>
          <h2>imprint</h2>
          <h5>Information obligation according to § 5 TMG.</h5>
          <h5>
            Association of socio-cultural migrant associations in Dortmund eV
            (VMDO eV)
          </h5>
          <h5>- represented by the board</h5>
          <ul>
            <li>Tulin Dolutas</li>
          </ul>
          <div className={classes.imprint_deputy}>
            <h5>Deputy CEO</h5>
            <ul>
              <li>dr Omar Al Ghawi</li>
              <li>Vedat Akkaya</li>
            </ul>
          </div>
        </div>
        <div className={classes.imprint_contact}>
          <h3>Contact</h3>
          <h4>Address:</h4>
          <h5>0+1 Festival for Diversity + Complexity</h5>
          <h5>Bildungswerk Diversity – VMDO eV</h5>
          <h5>Zur Diversity 21, 44147 Dortmund</h5>
          <h5>
            Phone: <Link> +49 231 28678240</Link>
          </h5>
          <h5>
            Fax: <Link>+49 231 28678166</Link>
          </h5>
          <h5>
            Email: <Link>mail@nullpluseinsfestival.de</Link>
          </h5>
        </div>
        <div className={classes.imprint_Registration}>
          <h3>Registration</h3>
          <h5>Registered in the District Court of Dortmund VR 6233</h5>
        </div>
        <div className={classes.imprint_Responsible}>
          <h3>
            Responsible for the content according to § 55 Abs. 2 RStV / ViSdP:
          </h3>
          <h5>Prof. Dr. Ümit Kosan</h5>
          <h5>Zur Variety 21, 44147 Dortmund</h5>
          <h5>Head of the Bildungswerk:</h5>
          <h5>Kati Stüdemann</h5>
          <h5>Zur Variety 21, 44147 Dortmund</h5>
          <h5>Data Protection Officer:</h5>
          <h5>Christoph Boldt</h5>
          <h5>
            Rheinische Str. 169, 44147 Dortmund <Link>c.boldt@vmdo.de</Link>
          </h5>
        </div>
        <div className={classes.imprint_contact}>
          <h5>
            {" "}
            Phone: <Link>+49 231 / 286-78-350</Link>
          </h5>
          <h5>
            {" "}
            Fax: <Link>+49 231 / 286-78-349</Link>
          </h5>
          <h5>
            {" "}
            Email: <Link>info@gid-do.de</Link>
          </h5>
        </div>
        <div className={classes.imprint_supervisor}>
          <h3>Supervisory authority</h3>
          <h5>
            The State Commissioner for Data Protection and Freedom of
            Information North Rhine-Westphalia
          </h5>
          <div className={classes.imprint_supervisor_link}>
            <h3>Website of the supervisory authority</h3>
            <Link>http://www.ldi.nrw.de</Link>
          </div>
          <div className={classes.imprint_supervisor_authority}>
            <h3>Address of the supervisory authority</h3>
            <h5>Kavalleriestraße 2-4, 40213 Düsseldorf</h5>
          </div>
          <div className={classes.imprint_supervisor_job_title}>
            <h3>
              Job title:<span> Graduate social worker</span>
            </h3>
          </div>
        </div>
        <div className={classes.imprint_director}>
          <h3>Managing Director</h3>
          <h5>Sofia Morina</h5>
          <div>
            <h5>
              Source: Created with the <Link>imprint generator</Link> from
              AdSimple in cooperation with <Link>hashtagbeauty.de</Link>
            </h5>
          </div>
        </div>
        <div className={classes.imprint_settlement}>
          <h3>EU Dispute Settlement</h3>
          <h5>
            In accordance with the regulation on online dispute resolution in
            consumer matters (ODR regulation), we would like to inform you about
            the online dispute resolution platform (OS platform). Consumers have
            the option of submitting
          </h5>
          <h5>
            complaints to the European Commission's online dispute resolution
            platform at http://ec.europa.eu/odr?tid=321118751 . You will find
            the necessary contact details above in our imprint.
          </h5>
          <h5>
            However, we would like to point out that we are not willing or
            obliged to participate in dispute settlement proceedings before a
            consumer arbitration board.
          </h5>
        </div>
        <div className={classes.imprint_liability}>
          <h3>Liability for the content of this website</h3>
          <h5>
            We are constantly developing the content of this website and strive
            to provide correct and up-to-date information. According to the
            Telemedia Act <Link>(TMG) §7 (1),</Link> we as a service provider
            are responsible for our own information that we make available for
            use in accordance with general laws. Unfortunately, we cannot accept
            liability for the correctness of any content on this website,
            especially that provided by third parties. As a service provider
            within the meaning of §§ 8 to 10, we are not obliged to monitor the
            information you transmit or store or to investigate circumstances
            that indicate illegal activity.
          </h5>
          <h5>
            Our obligations to remove information or to block the use of
            information under the general laws due to court or official orders
            remain unaffected even if we are not responsible according to §§ 8
            to 10.
          </h5>
          <h5>
            If you notice any problematic or illegal content, please contact us
            immediately so that we can remove the illegal content. You will find
            the contact details in the imprint.
          </h5>
        </div>
        <div className={classes.imprint_liability_links}>
          <h3>Liability for links on this website</h3>
          <h5>
            Our website contains links to other websites for which we are not
            responsible. We are not liable for linked websites, since we were
            not and have no knowledge of illegal activities, we have not yet
            noticed such illegal activities and we would remove links
            immediately if we became aware of illegal activities.
          </h5>
          <h5>
            If you notice illegal links on our website, please contact us. You
            will find the contact details in the imprint.
          </h5>
        </div>
        <div className={classes.imprint_copyright}>
          <h3>Copyright Notice</h3>
          <h5>
            All contents of this website (images, photos, texts, videos) are
            subject to the copyright of the Federal Republic of Germany. Please
            ask us before distributing, reproducing or using the contents of
            this website, such as republishing them on other websites. If
            necessary, we will prosecute the unauthorized use of parts of the
            content of our site.
          </h5>
          <h5>
            If you find content on this website that violates copyright, please
            contact us.
          </h5>
        </div>
        <div className={classes.imprint_picture}>
          <h3>Picture credit</h3>
          <h5>
            The images, photos and graphics on this website are protected by
            copyright.
          </h5>
          <h5>
            The image rights are held by the following photographers and
            companies: are named on the respective page.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
