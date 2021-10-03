import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

type Props = {
  allData: Record<string, string>;
};

const Card: React.FC<Props> = ({ allData }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeIn", duration: 2 }}
      className="card"
    >
      <p className="card__answer">{allData.answer}</p>
      <hr />
    </motion.div>
  );
};

export default Card;
