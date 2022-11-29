import React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon circle" />;
    case "cross":
      return <FaTimes className="icon cross" />;
  }
};

export default Icon;
