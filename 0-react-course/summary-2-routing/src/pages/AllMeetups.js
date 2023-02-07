import { useState, useEffect } from "react"; // useState and useEffect hook

import MeetupList from "../components/meetups/MeetupList";

// Used data below before connecting to firebase instance

// const EXAMPLE_MEETUP_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Street 6, 98765 Meetup City",
//     description:
//       "This is a second, amazing meetup which you definitely should not miss!",
//   },
// ];

function AllMeetupsPage() {
  // useState always returns an array with exactly 2 elements
  // 1st element is the current state snapshot
  // 2nd element is function for updating the state
  const [isLoading, setIsLoading] = useState(true); // initial state of isLoading is true bool
  const [loadedMeetups, setLoadedMeetups] = useState([]); // initial state of loadedMeetups is an empty array

  // When we call state updating function, we tell React that it should re-execute the parent component function, and return the updated jsx code

  // useEffect wants 2 arguments
  // 1st is a function
  // 2nd is an array of dependencies - React checks the values in the array, and compares them to their values from last execution - if any changed then the useEffect 1st arg function will execute again (I think ?)
  //
  // Basically there is a possibility of causing an infinite loop with this useEffect() hook
  //
  /* 
  https://www.knowledgehut.com/blog/web-development/how-to-use-react-useeffect

  "The second argument of useEffect is an array of dependencies. If you want to control when the effect runs after the component has been mounted, pass an array of dependencies as the second argument. Dependencies are values defined outside useEffect but used inside useEffect.

  React will compare the current value of the constraint with the value from the previous render. If they are not equal, the effect is called. This argument is optional. If omitted, the effect will run after each render. You can pass an empty array if you only want the effect to run on the first render."
  */
  useEffect(() => {
    setIsLoading(true); // state call
    fetch(
      "https://test-react-meetup-example-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); // response.json() method returns a promise so we need another .then() block -> we can work with the returned data within there
      })
      .then((data) => {
        const meetups = [];

        // for loop required because firebase returns the data under object keys
        // manipulate the returned firebase objects and push each into an array
        for (const key in data) {
          const meetup = { id: key, ...data[key] };

          meetups.push(meetup);
        }

        setIsLoading(false); // state call - changes isLoading state to false (boolean)
        setLoadedMeetups(meetups); // state call - changes loadedmeetups state to meetups (array)
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // Only gets returned if we're done loading
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
