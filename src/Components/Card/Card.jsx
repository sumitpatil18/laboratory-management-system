import Inputfield from "../InputField/inputfield";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="custom-card">{children}</div>;
};

export default Card;
