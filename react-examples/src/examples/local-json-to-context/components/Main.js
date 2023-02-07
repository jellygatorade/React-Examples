import { useContext } from "react";

import ContentContext from "../store/Content-Context";

function Main() {
  const ContentCtx = useContext(ContentContext);

  return (
    <div>
      <p>Data is loaded!</p>
      <p>Here is an example:</p>
      <p>{ContentCtx.content.main_video_path}</p>
    </div>
  );
}

export default Main;
