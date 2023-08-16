import React from "react";
import classes from "./Contact.module.scss";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.forms_div}>
          <form onSubmit={handleSubmit}>
            <h2>Contact</h2>
            <label>
              <span>Email*</span>
              <input type="email" name="email" autocomplete="off"/>
            </label>
            <label>
              <span>Name*</span>
              <input type="name" name="name" autocomplete="off" />
            </label>
            <label className={classes.textarea_label}>
              <span>Nachricht*</span>
              <textarea />
            </label>
            <div className={classes.checkbox_label}>
              <input
                type="checkbox"
                name="myCheckbox"
                className={classes.checkbox}
              />
              <h4>Akzeptierte die Datenschutzbestimmungen</h4>
            </div>
            <div className={classes.form_btn}>
              <button type="submit">send</button>
            </div>
          </form>
        </div>
        <div className={classes.logo_txt}>
          <img src="./icon/logo.svg" alt="logo not found" />
          <div className={classes.txt}>
            <div className={classes.txt_header}>
              <h3>Festival für Diversität + Komplexität</h3>
            </div>
            <h4>Bildungswerk Vielfalt/VMDO e.V.</h4>
            <h4>Zur Vielfalt 21, 44147 Dortmund</h4>
            <h4>Tel: 0231 28 678 165</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
