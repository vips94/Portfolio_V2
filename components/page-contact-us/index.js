import React, { useEffect, useState, useRef } from "react";
import styles from "./contactUs.module.scss";
import Title from "../title";
import emailjs from "@emailjs/browser";
import EmailIllustration from '../illustrate-svg/emai-illustrate/index';
import { easeInOut, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import {
  selectPropertiesBorderColor,
  selectPropertiesBtnMaskColor,
  selectPropertyTextStroke,
} from "@/store/skills";
import CustomButton from "../button";
import {motion} from 'framer-motion';
import Divider from "../divider";

const ContactUs = () => {
  const svgBg = useRef(null);
  const isInView = useInView(svgBg)
  const [status, setStatus] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [showIllustration, setShowIllustration] = useState(false);

  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);
  const propertyTextStroke = useSelector(selectPropertyTextStroke);

  const customStyle = {
    borderColor: propertiesBorderColor,
    background: propertiesBtnMaskColor,
    color: propertyTextStroke,
  }

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
            <p className={styles.status} style={{color: propertiesBorderColor}}>{status}</p>
            <motion.input
              className={styles.name}
              value={enteredUserName}
              type="text"
              name="userName"
              onChange={userNameChangeHandler}
              id="userName"
              placeholder="Name *"
              style={customStyle}
              initial={{y:300, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.2}}
              viewport={{once:true}}
            ></motion.input>
            <motion.input
              className={styles.email}
              value={enteredEmail}
              onChange={emailChangeHandler}
              type="text"
              name="email"
              id="email"
              placeholder="Email *"
              style={customStyle}
              initial={{y:300, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.2}}
              viewport={{once:true}}
            ></motion.input>
            <motion.textarea
              className={styles.message}
              value={enteredMessage}
              name="message"
              onChange={messageChangedHandler}
              id="message"
              placeholder="Message *"
              style={customStyle}
              initial={{y:300, opacity:0}}
              whileInView={{y:0, opacity: 1}}
              transition={{duration:0.2}}
              viewport={{once:true}}
            ></motion.textarea>
            <CustomButton
              containerClassName="btn-container-1"
              extraClassName="btn-1"
              maskClassName="mask-1"
              btnName="SEND"
            >
                SEND
            </CustomButton>
          </form>
        </div>
        <div className={styles.background} ref={svgBg}>
          {showIllustration && <EmailIllustration/>}
        </div>
        <Divider position="calc(80vh - 200px + 45px)" />
      </div>
    </div>
  );
};

export default ContactUs;
