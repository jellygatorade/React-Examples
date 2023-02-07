import { useContext, useEffect } from "react";

import ContentContext from "../store/Content-Context";

function LoadData(props) {
  const ContentCtx = useContext(ContentContext);

  const { onDataLoaded, onDataFetchError } = props; // Destructure props so these can be used as dependencies in useEffect
  const { storeContent } = ContentCtx; // Destructure Context component so this property can be used as dependency in useEffect

  // Reference: https://beta.reactjs.org/reference/react/useEffect
  //
  // React requires these to be listed as dependencies within the useEffect hook -> [onDataLoaded, onDataFetchError, storeContent]
  // The purpose of dependencies in useEffect hooks is to trigger re-running the side effect when any of them change
  //
  // None of these will ever change so this effect will only run once. (? I think, newb here) They are defined as constants within their components.
  // Maybe this does or does not cause a Referential Equality issue?
  //
  // If you specify an empty array as the dependency array ([]), then the side effect will run only once.
  // If you don’t specify the dependencies at all, your Effect will re-run after every re-render of the component.
  //
  // If you leave the array as empty, you will get the following error:
  // "React Hook useEffect has missing dependencies: 'onDataFetchError', 'onDataLoaded', and 'storeContent'. Either include them or remove the dependency array"

  useEffect(() => {
    console.log("run LoadData useEffect");

    const getData = () => {
      // Send the fetch request
      fetch("./assets/content.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json(); // Extract json from the fetch response
        })
        .then((data) => {
          storeContent(data); // Store the fetched json in the ContentContext
          onDataLoaded(); // Tell LocalJSONApp.js that data has been loaded, so it can re-render
        })
        .catch((error) => {
          onDataFetchError(error); // Tell LocalJSONApp.js that there was an error encountered fetching the data, so it can re-render
        });
    };

    getData(); // Run the getData function
  }, [onDataLoaded, onDataFetchError, storeContent]); // React wants these here...see note above on useEffect dependencies

  return <p>Loading...</p>;
}

export default LoadData;
