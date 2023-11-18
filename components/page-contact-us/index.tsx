import React, { useState } from "react";
import styles from "./contactUs.module.scss";
import Title from "../title";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [status, setStatus] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const userNameChangeHandler = (e: any) => {
    setEnteredUserName(e.target.value);
  };

  const emailChangeHandler = (e: any) => {
    setEnteredEmail(e.target.value);
  };

  const messageChangedHandler = (e: any) => {
    setEnteredMessage(e.target.value);
  };

  let field = "";

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const a = document.forms["Form"]["userName"].value;
    const b = document.forms["Form"]["email"].value;
    const c = document.forms["Form"]["message"].value;

    if (a == null || a === "") field += "Name*";

    if (b == null || b === "") field += " Email*";

    if (c == null || c === "") field += " Message*";

    if (field !== "") {
      setStatus(`${field} field required!`);
      return;
    }

    emailjs
      .sendForm(
        "service_u0safm4",
        "template_w7167sl",
        e.target,
        "user_IY3Of2Az7Hjk7ckxRUi3t"
      )
      .then((res: any) => {
        setEnteredUserName("");
        setEnteredEmail("");
        setEnteredMessage("");
        setStatus("Success");
        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch((err: any) => {
        setStatus("Something went wrong");
      });
  };
  return (
    <div className={styles["contact-container"]}>
      <div className={styles.section}>
        <Title title="GET IN TOUCH" shadowTitle="CONTACT" />
        <div className={styles['form-container']}>
          <form className={styles.form} onSubmit={submitHandler} name="Form">
            <p className={styles.status}>{status}</p>
            <input
              className={styles.name}
              value={enteredUserName}
              type="text"
              name="userName"
              onChange={userNameChangeHandler}
              id="userName"
              placeholder="Name *"
            ></input>
            <input
              className={styles.email}
              value={enteredEmail}
              onChange={emailChangeHandler}
              type="text"
              name="email"
              id="email"
              placeholder="Email *"
            ></input>
            <textarea
              className={styles.message}
              value={enteredMessage}
              name="message"
              onChange={messageChangedHandler}
              id="message"
              placeholder="Message *"
            ></textarea>
            <button>
              <p>SEND</p>
              {/* <IoMdSend /> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
