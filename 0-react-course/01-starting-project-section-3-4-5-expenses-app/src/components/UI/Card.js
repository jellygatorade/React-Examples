import "./Card.css";

function Card(props) {
  // Here we are using the "card" class from Card.css, and allowing other scripts to place their own styling via CSS class with props.className
  const classes = "card " + props.className;

  // props.children is required to render child nodes when <Card> is used in other scripts
  return <div className={classes}>{props.children}</div>;
}

export default Card;
