import { Fragment, useState } from "react";

import FadeInOut from "./components/FadeInOut";

import Modal from "./components/Modal";
import Button from "./components/Button";

/*****************************************************************************************************
 * Gyre Styles Example
 * requires
 *
 * tailwindcss
 * @netlify/classnames-template-literals - which I'm not sure if I like yet
 * react-transition-group
 *
 * Each of these is installed to ".../React Examples/react-examples"
 * Follow recommended installation intructions for each (as per which npm install flags to include)
 *****************************************************************************************************/

const modalText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan, velit facilisis vehicula condimentum, erat lectus luctus mi, ac vulputate nunc urna in dolor. Vestibulum vel leo elit. Nam commodo sodales malesuada. Sed sit amet diam molestie, ultricies urna eu, venenatis nisi. Sed quis scelerisque diam. Aliquam cursus auctor commodo. Suspendisse odio lectus, ultrices sit amet rutrum at, ultricies ac magna. Phasellus efficitur suscipit ligula quis tincidunt. Integer blandit quam elit, ut pulvinar nulla dignissim eu. Maecenas vitae volutpat diam. Pellentesque interdum justo nisl, vitae aliquet nulla ornare eu. Proin enim sapien, consequat in nunc non, pharetra venenatis dolor. Integer tempor varius blandit. Vestibulum fermentum tempus imperdiet.";

function GyreStylesApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Fragment>
      <div>Gyre Styles App</div>
      <FadeInOut whenState={modalIsOpen}>
        <Modal closeModal={closeModal}>{modalText}</Modal>
      </FadeInOut>
      <Button onClick={openModal}>Open the Modal</Button>
    </Fragment>
  );
}

export default GyreStylesApp;
