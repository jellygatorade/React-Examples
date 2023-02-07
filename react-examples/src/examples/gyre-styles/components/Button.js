import ctl from "@netlify/classnames-template-literals";

const twcButton = ctl(`
    font-CaseTextLight
    text-base
    tracking-wide

    text-white

    border
    border-white
    rounded-full

    px-[0.875rem]
    py-[0.25rem]
    pt-[0.35rem]

    hover:border-orange-ncma
    hover:text-orange-ncma

    focus:outline
    focus:outline-1
    focus:outline-orange-ncma

    transition-all
    duration-300
`);

function Button(props) {
  return (
    <button className={twcButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
