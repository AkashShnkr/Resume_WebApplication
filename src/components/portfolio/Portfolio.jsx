import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Multiple Disease Prediction",
    img: "/mutliple.webp",
    desc: "Created an Multiple Disease Predictor using Python and Streamlit. Developed and integrated three distinct machine learning models into a user-friendly web app, providing intuitive predictions for multiple diseases.",
  },
  {
    id: 2,
    title: "Student Management System",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed a comprehensive Student Management System using Python, Flask, and MySQL, JavaScript, CSS, HTML5. This full-stack ERP application offers robust functionality for managing student data, enhancing administrative efficiency and user experience",
  },
  {
    id: 3,
    title: "Express MVC Package",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed an Express.js NPM package that automatically sets up the MVC file structure in a Node.js server. Simplifies project initialization with a single npm command, enhancing developer productivity.",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Created an Multiple Disease Predictor using Python and Streamlit. Developed and integrated three distinct machine learning models into a user-friendly web app, providing intuitive predictions for multiple diseases.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://github.com/AkashShnkr"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
