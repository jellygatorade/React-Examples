import { useContext } from "react";

import LangContentContext from "../../store/Lang-Content-Context";

function LangSwitch() {
  const LangContentCtx = useContext(LangContentContext);

  function switchLangHandler(event) {
    const targetLang = event.target.getAttribute("lang");
    LangContentCtx.switchLang(targetLang);
  }

  return (
    <div className="LangSwitch">
      {/* lang prop must match key in content.json this way! */}
      {/* it may be better to loop through available languages to create these buttons and store lang prop dynamically */}
      <button onClick={switchLangHandler} lang="en-US">
        EN
      </button>
      <button onClick={switchLangHandler} lang="es-MX">
        ES
      </button>
    </div>
  );
}

export default LangSwitch;
