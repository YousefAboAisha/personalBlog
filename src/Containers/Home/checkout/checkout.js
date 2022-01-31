import React, { useEffect, useState, useRef } from "react";
import classes from "./checkout.module.css";
import Footer from "../../../Components/Footer/Footer";
import emailjs from "emailjs-com";
import Spinner from "../../../Components/UI/Spinner/spinner";
import Notistack from "../../../Components/UI/Snackbar/snackbar";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projectType, setProjectType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msgName, setMsgName] = useState("");
  const [msg, setMsg] = useState("");
  const [chars, setChars] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const form = useRef();

  useEffect(() => {
    let charNum = msg.length;
    setChars(charNum);
    console.log(charNum);
  }, [msg]);

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMsgName("");
    setMsg("");
    setChars(0);
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_3n86cqi",
        "project_form",
        form.current,
        "user_D9y1Gws0dAtyKLW4zOemd"
      )
      .then(
        (res) => {
          console.log(res.text);
          setLoading(false);
          setSnackbar(true);
          clearInputs();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className={classes.wrapper}>
      {snackbar ? (
        <Notistack msg={"You Have successfully sent an E-mail!"} />
      ) : null}

      <div className={classes.home}>
        <div className={classes.heading}>
          <h2>
            PURCHASE PLAN
            <img
              src="https://img.icons8.com/bubbles/50/000000/code.png"
              alt="icon"
            />
          </h2>
        </div>

        <form onSubmit={ClickHandler} ref={form}>
          <div className={classes.input}>
            <select
              required
              onChange={(e) => setProjectType(e.target.value)}
              value={projectType}
              name="projectType"
            >
              <option hidden defaultValue>
                Project Type
              </option>
              <option>Single Page Application</option>
              <option>UI/UX Design</option>
              <option>Personal Blogs</option>
            </select>
          </div>
          <div className={classes.input}>
            <input
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              minLength={4}
              name="name"
            />
          </div>

          <div className={classes.input}>
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              minLength={13}
              name="email"
            />
          </div>

          <div className={classes.input}>
            <input
              type="text"
              placeholder="Message Name"
              required
              onChange={(e) => setMsgName(e.target.value)}
              value={msgName}
              minLength={4}
              name="msgName"
            />
          </div>

          <div className={classes.input}>
            <textarea
              required
              placeholder="Project Description"
              cols={20}
              rows={10}
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              minLength={140}
              name="msg"
            ></textarea>
            <div
              className={classes.chars}
              style={{
                color: chars >= 140 ? "green" : "red",
              }}
            >
              {chars} / 140
            </div>
          </div>
          {loading ? <Spinner /> : <button>SUBMIT</button>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
