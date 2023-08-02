import classes from "./Footer.module.scss";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.footer_txt}>
        <h4>Impressum</h4>
        <h4>Datenschutz</h4>
        <h4>Archiv</h4>
      </div>
    </div>
  );
}

export default Footer;
