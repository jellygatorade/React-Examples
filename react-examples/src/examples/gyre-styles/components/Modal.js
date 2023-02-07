import ctl from "@netlify/classnames-template-literals";

function Modal(props) {
  const closeModalHandler = () => {
    props.closeModal();
  };

  return (
    // Must return div as component root to work with react-transition-group
    <div>
      <div className={twcOverlay} onClick={closeModalHandler}></div>
      <div className={twcFlexRow}>
        <div className={twcFlexCol}>
          <div className={twcModal}>
            <div className={twcTextContainer}>
              <span className={twcText}>{props.children}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const twcOverlay = ctl(`
    h-full 
    w-full 

    absolute 
    top-0 
    left-0 
    z-[0] 

    bg-black
    opacity-25
`);

const twcFlexRow = ctl(`
    h-full 
    w-full 
    
    absolute 
    top-0 
    left-0 
    z-[1000] 
    
    flex 
    flex-row
    justify-center 
    items-center

    pointer-events-none
`);

const twcFlexCol = ctl(`
    h-full 
    
    flex 
    flex-col 
    justify-center 
    items-center 
    
    pointer-events-none
`);

// border
// border-white
const twcModal = ctl(`
    relative 

    px-[1rem]
    py-[1rem]
    
    rounded-2xl

    shadow-black-10px

    bg-black

    pointer-events-auto
`);

const twcTextContainer = ctl(`
  max-w-[700px] 
  max-h-[400px] 

  px-[2rem]

  overflow-y-scroll
`);

const twcText = ctl(`
    font-CaseTextLight text-white text-xl text-center leading-relaxed tracking-wide
`);

export default Modal;
