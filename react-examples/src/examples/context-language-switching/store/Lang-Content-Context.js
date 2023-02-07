import { createContext, useState } from "react";
//import { createContext, useState, useLayoutEffect } from "react";

// Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
// https://beta.reactjs.org/learn/passing-data-deeply-with-context

// Content context following my first example ../local-json-to-context
// And adding a language switching feature following this tutorial
// https://betterprogramming.pub/react-context-hooks-part-2-ui-language-switch-f4610a21379b

// capitalized because createContext returns a React component
const LangContentContext = createContext({
  content: {},
  // The methods below don't actually do anything, but they are added to the initial context so that the IDE autocompletes them (for use with context later)
  // This is a best practice with React context
  storeContent: (content) => {},

  /// Language properties
  lang: "",
  currentLangData: {},
  switchLang: () => {},
});

// This component must wrap the nodes you want to use the context in (see index.js)
export function LangContentContextProvider(props) {
  const [storedContent, setStoredContent] = useState({});
  const [langState, setLangState] = useState(
    window.localStorage.getItem("appUILangState") ||
      window.navigator.language ||
      "en-US"
  );

  // This is in the tutorial I followed but I don't think it's necessary with already initializing langState to window.localStorage.getItem("appUILangState")
  // This means the langState will be read already
  // Or it could be that my app here doesn't need it since I don't render any content before fetching the json and by that time the localStorage has already been read?
  //
  // "We use the useLayoutEffect Hook because the app needs to know which language to display before the initial render."
  //
  // useLayoutEffect(() => {
  //   const selectedLang = window.localStorage.getItem("appUILangState");
  //   if (selectedLang) {
  //     setLangState(selectedLang);
  //   }
  // }, [langState]);

  // Stores content within the react state variable
  const storeContentHandler = (data) => {
    setStoredContent(data);
    //console.log(data);
  };

  const switchLangHandler = (lang) => {
    setLangState(lang);
    window.localStorage.setItem("appUILangState", lang);
  };

  const context = {
    content: storedContent, // Holds all content, the contents of my content.json
    storeContent: storeContentHandler,
    lang: langState,
    currentLangData: storedContent[langState], // Holds only the content underneath the key specified by the current langState
    switchLang: switchLangHandler,
  };

  return (
    <LangContentContext.Provider value={context}>
      {props.children}
    </LangContentContext.Provider>
  );
}

export default LangContentContext;
