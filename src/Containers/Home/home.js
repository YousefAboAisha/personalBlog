import React, { useEffect } from "react";
import classes from "./home.module.css";
import ServicesCard from "../../Components/UI/servicesCards/sCard";
import img from "../../Media/person2.svg";
import Review from "../../Components/UI/review/review";
import Footer from "../../Components/Footer/Footer";
import { useNavigate, Route, Routes } from "react-router-dom";
import CV from "../../Media/Cv.pdf";
import Modal from "../../Components/UI/modal/modal";
import Checkout from "./checkout/checkout";

const Home = () => {
  const sCards = [
    {
      title: "Team Work",
      details: `Teamwork is often a crucial part of a business, as it is often necessary for colleagues to work well together, trying their best in any circumstance.`,
      icon: "fas fa-users",
    },
    {
      title: "Accurate",
      details: `Knowing the importance of time card accuracy will boost your company to the next level; understand the number of time employees invest in their work.`,
      icon: "fas fa-calendar-check",
    },
    {
      title: "Photography",
      details: `the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye.`,
      icon: "fas fa-camera-retro",
    },
    {
      title: "Design",
      details: `UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective.`,
      icon: "fas fa-gem",
    },
    {
      title: "Reliability",
      details: `identify and manage asset reliability risks that could adversely affect plant or business operations. This broad primary role can be divided into  three smaller, more manageable roles.`,
      icon: "fas fa-headset",
    },
    {
      title: "High-Quality",
      details: ` the ability to get the most output from the least possible input. It means doing more with less. Working smarter, not harder, this means being able to get more done in a finite amount of time: the workday.`,
      icon: "fas fa-award",
    },
  ];

  const reviewCards = [
    {
      price: "29",
      type: "Standard",
      list: [
        {
          text: "One Selected Template.",
          class: true,
        },
        {
          text: "100% Responsive Design.",
          class: true,
        },
        {
          text: "Credit Remove Permision.",
          class: false,
        },
        {
          text: " Ultimate Template Updates.",
          class: false,
        },
      ],
      icon: false,
    },
    {
      price: "99",
      type: "Ultimate",
      list: [
        {
          text: "All Exisitng Templates.",
          class: true,
        },
        {
          text: "100% Responsive Design.",
          class: true,
        },
        {
          text: "Credit Remove Permision.",
          class: true,
        },
        {
          text: " Ultimate Template Updates.",
          class: true,
        },
      ],
      icon: true,
    },
    {
      price: "49",
      type: "Premium",
      list: [
        {
          text: "Five Exisitng Templates.",
          class: true,
        },
        {
          text: "100% Responsive Design.",
          class: true,
        },
        {
          text: "Credit Remove Permision.",
          class: true,
        },
        {
          text: " Ultimate Template Updates.",
          class: false,
        },
      ],
      icon: false,
    },
  ];

  const navigate = useNavigate();

  const contactNavigate = () => {
    navigate("/contact");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <div className={classes.box}>
          <h2>
            WELLCOME TO MY <br />
            PERSONAL.<span>BLOG</span>
          </h2>
          <button onClick={contactNavigate}>Participate Now !</button>
        </div>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className={classes.container}>
        <div className={classes.skills}>
          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/60/000000/html-5--v1.png"
              alt="icon"
            />
            <span>HTML</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/60/000000/css3.png"
              alt="icon"
            />
            <span>CSS</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/60/000000/javascript--v1.png"
              alt="icon"
            />
            <span>JS</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/plasticine/60/000000/react.png"
              alt="icon"
            />
            <span>REACT JS</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/60/000000/redux.png"
              alt="icon"
            />
            <span>REDUX</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/60/000000/bootstrap.png"
              alt="icon"
            />
            <span>BOOTSTRAP</span>
          </div>
        </div>

        <section>
          <div className={classes.heading}>
            <h2>
              Who Am I
              <img
                src="https://img.icons8.com/color/48/000000/under-computer.png"
                loading="lazy"
                alt="Person"
              />
            </h2>
          </div>

          <div className={classes.person}>
            <div className={classes.left}>
              <h3>Why To Choose Us ?</h3>
              <p>
                Every person is looking to build a life on their own needs an
                apartment to live on their own terms,If you are looking to start
                a business in the real estate industry, you need to set up your
                own company first, Every person is looking to build a life on
                their own needs an apartment to live on their own terms,If you
                are looking to start a business in the real estate industry, you
                need to set up your own company first.
              </p>
              <a target="_blank" download href={CV}>
                <button>
                  Downlaod CV
                  <i className="fas fa-download"></i>
                </button>
              </a>
            </div>
            <div className={classes.right}>
              <img src={img} alt="Best House" />
            </div>
          </div>
        </section>

        <section>
          <div className={classes.heading}>
            <h2>
              Services
              <img
                src="https://img.icons8.com/color/48/000000/backend-development.png"
                alt="icon"
              />
            </h2>
          </div>

          <div className={classes.cards}>
            {sCards.map((card, index) => {
              return (
                <ServicesCard
                  title={card.title}
                  details={card.details}
                  icon={card.icon}
                  key={index}
                />
              );
            })}
          </div>
        </section>

        <section>
          <div className={classes.review}>
            <div className={classes.heading}>
              <h2>
                Pricing
                <img
                  src="https://img.icons8.com/color/48/000000/price-tag-usd--v1.png"
                  alt="person"
                />
              </h2>
            </div>
            <div className={classes.cards}>
              {reviewCards.map((card, index) => {
                return <Review card={card} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>

      <Routes>
        <Route path="checkout" element={<Checkout />} />
      </Routes>

      <Modal />

      <Footer />
    </div>
  );
};

export default Home;
