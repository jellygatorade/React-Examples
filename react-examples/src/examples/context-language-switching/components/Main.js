import { useContext } from "react";

import LangContentContext from "../store/Lang-Content-Context";

import LangSwitch from "./language/LangSwitch";

function Main() {
  const LangContentCtx = useContext(LangContentContext);

  const NonLocalizedContent = LangContentCtx.content.non_localized;
  const LocalizedContent = LangContentCtx.currentLangData;

  return (
    <div>
      <LangSwitch />
      <p>Data is loaded!</p>
      <br />
      <p style={{ color: "grey" }}>Here is some non-localized content:</p>
      <p>{NonLocalizedContent.main_video_path}</p>
      <br />
      <p style={{ color: "grey" }}>Here is some localized content:</p>
      <p>{LocalizedContent.home_page.content_warning}</p>
      <p>{LocalizedContent.home_page.touch_to_play}</p>
    </div>
  );
}

export default Main;
