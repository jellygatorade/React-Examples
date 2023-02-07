import { createContext, useState } from "react";

// Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
// https://beta.reactjs.org/learn/passing-data-deeply-with-context

// capitalized because createContext returns a React component
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // The methods below don't actually do anything, but they are added to the initial context so that the IDE autocompletes them (? for use with context later?)
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// This component must wrap the nodes you want to use the context in (see index.js)
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  // The functions below are used to change our context

  function addFavoriteHandler(favoriteMeetup) {
    // Passing a function to the the set state function
    /*
    // https://beta.reactjs.org/reference/react/useState

    If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state
    */
    setUserFavorites((prevUserFavorites) => {
      // add the passed meetupId to the existing userFavorites, using Array.prototype.concat() instead of Array.prototype.push()
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    // as above, passing a function to the the set state function
    setUserFavorites((prevUserFavorites) => {
      // remove the passed meetupId from the existing userFavorites
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    // return true if meetupId is found within existing userFavorites
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
