import React, { useEffect, useState, useRef } from "react";
import styles from "./contactUs.module.scss";
import Title from "../title";
import emailjs from "@emailjs/browser";
import EmailIllustration from '../illustrate-svg/emai-illustrate/index';
import { useInView } from "framer-motion";

const ContactUs = () => {
  const svgBg = useRef(null);
  const isInView = useInView(svgBg)
  const [status, setStatus] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [showIllustration, setShowIllustration] = useState(false);

  useEffect(()=>{
    if(isInView){
      setTimeout(() => {
        setShowIllustration(true);
      }, 1000);
    }
  },[isInView])

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const messageChangedHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  let field = "";

  const submitHandler = async (e) => {
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
      .then((res) => {
        setEnteredUserName("");
        setEnteredEmail("");
        setEnteredMessage("");
        setStatus("Success");
        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch((err) => {
        setStatus("Something went wrong");
      });
  };
  return (
    <div className={styles["contact-container"]}>
      <div className={styles.section}>
        <Title title="GET IN TOUCH" shadowTitle="CONTACT" />
        <div className={styles["form-container"]}>
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
        <div className={styles.background} ref={svgBg}>
          {showIllustration && <EmailIllustration/>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
