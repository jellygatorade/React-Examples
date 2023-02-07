import { CSSTransition } from "react-transition-group";

// Using tailwind classes with react-transition-group
// https://reactcommunity.org/react-transition-group/css-transition

function FadeInOut(props) {
  return (
    <CSSTransition
      in={props.whenState}
      timeout={300}
      classNames={{
        enter: "opacity-0",
        enterActive: "opacity-100 transition-all duration-300",
        enterDone: "opacity-100",
        exit: "opacity 100",
        exitActive: "opacity-0 transition-all duration-300",
        exitDone: "opacity-0",
      }}
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  );
}

export default FadeInOut;
