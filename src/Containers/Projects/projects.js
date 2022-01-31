import React, { useEffect, useRef } from "react";
import classes from "./projects.module.css";
import img1 from "../../Media/portfolio.svg";
import img2 from "../../Media/youtube.svg";
import img3 from "../../Media/calculator.svg";
import img4 from "../../Media/rate.svg";
import img5 from "../../Media/movie.svg";
import WebsiteCard from "../../Components/UI/websiteCard/WebsiteCard";
import Footer from "../../Components/Footer/Footer";
import RateCard from "../../Components/UI/rateCard/rateCard";

const Projects = () => {
  const sites = [
    {
      title: "Portfolio",
      img: img1,
      link: "https://yousefaboaisha.github.io/MyBlog/",
      description: ["HTML", "CSS", "JS", "BOOTSTRAB", "REACT.JS"],
    },
    {
      title: "Youtube- Clone",
      img: img2,
      link: "https://yousefaboaisha.github.io/Youtube-clone/",
      description: ["HTML", "CSS"],
    },
    {
      title: "Claculator",
      img: img3,
      link: "https://yousefaboaisha.github.io/Calculator/",
      description: ["HTML", "CSS", "JS", "JQUERY"],
    },
    {
      title: "Rate app",
      img: img4,
      link: "https://yousefaboaisha.github.io/Rate-App/",
      description: ["HTML", "CSS", "JS", "BOOTSTRAB", "REACT.JS"],
    },

    {
      title: "Movies app",
      img: img5,
      link: "https://yousefaboaisha.github.io/Movies-App/",
      description: ["HTML", "CSS", "JS", "JQUERY", "BOOTSTRAB", "REACT.JS"],
    },
  ];
  const persons = [
    {
      name: "John Whick",
      value: 5,
      img: "https://hivlawcommission.org/wp-content/uploads/2016/04/Business-man-1.png",
      comment:
        "Experience is the name everyone gives to their mistakes, Incredibly cool bro, keep it up.",
    },
    {
      name: "Rose Smith",
      value: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfbDNKj07qLnLzkY1bfiDtux_kixDkTfy6g&usqp=CAU",
      comment:
        "Optimism is an occupational hazard of programming: feedback is the treatment, thats pretty awsome.",
    },
    {
      name: "Kevin Sam",
      value: 4,
      img: "https://www.pngitem.com/pimgs/m/457-4571358_businessman-png-transparent-png.png",
      comment:
        "Make it work, make it right, make it fast, I expect more than this is the future I believe in you!",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef();

  const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <div className={classes.box}>
          <h2>
            WATCH MY <br />
            RECENT.<span>PROJECTS</span>
          </h2>
          <button onClick={() => scroll(scrollRef)}>Show Projects</button>
        </div>
      </div>

      <div className={classes.container}>
        <section>
          <div className={classes.heading}>
            <h2>
              Projects
              <img
                src="https://img.icons8.com/color/48/000000/project-management.png"
                loading="lazy"
                alt="icon"
              />
            </h2>
          </div>

          <div ref={scrollRef} className={classes.cards}>
            {sites.map((elem, index) => {
              return (
                <WebsiteCard
                  title={elem.title}
                  description={elem.description}
                  link={elem.link}
                  img={elem.img}
                  key={index}
                />
              );
            })}
          </div>
        </section>

        <section>
          <div className={classes.heading}>
            <h2>
              Reviews
              <img
                src="https://img.icons8.com/external-itim2101-flat-itim2101/50/000000/external-review-project-management-itim2101-flat-itim2101.png"
                loading="lazy"
                alt="icon"
              />
            </h2>
          </div>

          <div className={classes.rates}>
            {persons.map((card, index) => {
              return (
                <div key={index}>
                  <RateCard
                    name={card.name}
                    src={card.img}
                    value={card.value}
                    text={card.comment}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
