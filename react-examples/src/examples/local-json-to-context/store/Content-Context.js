import { createContext, useState } from "react";

// Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
// https://beta.reactjs.org/learn/passing-data-deeply-with-context

// capitalized because createContext returns a React component
const ContentContext = createContext({
  content: {},
  // The methods below don't actually do anything, but they are added to the initial context so that the IDE autocompletes them (for use with context later)
  // This is a best practice with React context
  storeContent: (content) => {},
});

// This component must wrap the nodes you want to use the context in (see index.js)
export function ContentContextProvider(props) {
  const [storedContent, setStoredContent] = useState({});

  // Stores content within the react state variable
  const storeContentHandler = (data) => {
    setStoredContent(data);
    console.log(data);
  };

  const context = {
    content: storedContent,
    storeContent: storeContentHandler,
  };

  return (
    <ContentContext.Provider value={context}>
      {props.children}
    </ContentContext.Provider>
  );
}

export default ContentContext;
