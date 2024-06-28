import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on problem solving and developing
          <br /> functional Web application.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Development.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DSA Buster</h2>
          <p>
          Passionate about solving complex problems through efficient Data Structures and Algorithms. Experienced in optimizing code, enhancing performance, and developing innovative solutions. Proficient in various programming languages and algorithmic technique
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Leetcoder</h2>
          <p>
          Enthusiastic about tackling complex challenges using Data Structures and Algorithms. Skilled LeetCoder with extensive experience in optimizing code, improving performance, and crafting innovative solutions across diverse programming languages and algorithmic techniques
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Developer</h2>
          <p>
          Experienced web developer specializing in the MERN stack. Proficient in MongoDB, Express.js, React, and Node.js, creating dynamic, responsive, and efficient web applications tailored to meet diverse client needs
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX designer</h2>
          <p>
            Experienced UI/UX designer specializing in the MERN stack. Skilled in creating intuitive, user-friendly interfaces and efficient web applications using MongoDB, Express.js, React, and Node.js to enhance user experience.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
