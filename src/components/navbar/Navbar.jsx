import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Akash Dev</h2>
        </motion.span>
        <div className="social">
          <a href="https://github.com/AkashShnkr">
            <img src="/Github.png" alt="" />
          </a>
          <a href="https://leetcode.com/AkshShnkr/">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/aksh2pncs/">
            <img src="/greeksforgreeks.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/akshnkar">
            <img src="/linkedIn.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
