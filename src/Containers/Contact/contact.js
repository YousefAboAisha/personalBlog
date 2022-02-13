import React, { useState, useRef, useEffect } from "react";
import classes from "./contact.module.css";
import contactImg from "../../Media/contact.svg";
import emailjs from "emailjs-com";
import Footer from "../../Components/Footer/Footer";
import Notistack from "../../Components/UI/Snackbar/snackbar";
import Video from "../../Components/video/video";
import vid from "../../Media/contactBackground.mp4";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const form = useRef();

  const clearInputs = () => {
    setEmail("");
    setName("");
    setMessage("");
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ltj2944",
        "Real_Estate_App",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Video text={"& Keep In Touch With Me"} vid={vid} />

      <div className={classes.container}>
        <section>
          <i className="fas fa-hashtag"></i>
          <i className="fas fa-headset"></i>
          <div className={classes.heading}>
            <h2>
              Contact Us
              <img
                src="https://img.icons8.com/external-itim2101-flat-itim2101/48/000000/external-contact-us-contact-and-message-itim2101-flat-itim2101-3.png"
                loading="lazy"
                alt="icon"
              />
            </h2>
          </div>
          <p>
            For technical support, please reach out to my accounts bellow For
            all other inquiries, please use the form to get in touch with us!
            You may need to disable ad or pop-up blocker on your web browser to
            submit the form.
          </p>

          <div className={classes.contact}>
            {snackbar ? (
              <Notistack msg={"You Have successfully sent an E-mail!"} />
            ) : null}

            <div className={classes.left}>
              <img src={contactImg} alt="Faw" />
            </div>

            <form ref={form} className={classes.right} onSubmit={ClickHandler}>
              <div className={classes.input}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  required
                />
              </div>

              <div className={classes.input}>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                />
              </div>

              <div className={classes.input}>
                <textarea
                  placeholder="Message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  required
                />
              </div>

              <button>{loading ? "Sending..." : "Send"}</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
