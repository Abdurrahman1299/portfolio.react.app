import React from "react";
import classes from "../../App.module.css";

export default function ContactMeSection() {
  return (
    <div className={classes.contactMeContainer} id="contactMe">
      <h2 className={classes.contactHeader}>Contact Me</h2>

      <form className={classes.contactForm}>
        <div className={classes.inputField}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            className={classes.input}
            maxLength={30}
          />
        </div>
        <div className={classes.inputField}>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter Your E-mail"
            type="email"
            name="email"
            className={classes.input}
            maxLength={40}
          />
        </div>
        <div className={classes.inputField}>
          <label htmlFor="title">Message Title:</label>
          <input
            placeholder="Message Title"
            type="text"
            name="title"
            className={classes.input}
            maxLength={30}
          />
        </div>
        <div className={classes.inputField}>
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Type Your Message, Please!"
            maxLength={1000}
            name="message"
            className={`${classes.input} ${classes.textarea}`}
          />
        </div>
        <a
          href="mailto: abdurrahmanms09@gmail.com"
          type="submit"
          className={classes.submitBtn}
        >
          ♣Contact Via Mail♣
        </a>
      </form>
    </div>
  );
}
