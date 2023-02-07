import { useState } from "react";

import { LangContentContextProvider } from "./store/Lang-Content-Context"; // use curly braces for importing named exports (not default)

import Main from "./components/Main";
import LoadData from "./components/LoadData";
import FetchError from "./components/FetchError";

function LangSwitchingApp() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isDataFetchError, setIsDataFetchError] = useState(false);

  const dataLoadedHandler = () => {
    setIsDataLoaded(true);
  };

  const dataFetchErrorHandler = (error) => {
    console.error(error);
    setIsDataFetchError(true);
  };

  // If data is loaded - display Main
  // If data is not loaded and fetch error not present (fetch hasn't been run at all) then run the <LoadData /> component
  // If fetch has been tried and returned an error, show a FetchError component

  return (
    <LangContentContextProvider>
      {isDataLoaded && <Main />}
      {!isDataLoaded && !isDataFetchError && (
        <LoadData
          onDataLoaded={dataLoadedHandler}
          onDataFetchError={dataFetchErrorHandler}
        />
      )}
      {isDataFetchError && <FetchError />}
    </LangContentContextProvider>
  );
}

export default LangSwitchingApp;
