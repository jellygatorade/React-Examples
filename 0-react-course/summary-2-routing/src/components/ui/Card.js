import classes from "./Card.module.css"; // classes will be a JS object containing all the css classes from this file as object properties

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
