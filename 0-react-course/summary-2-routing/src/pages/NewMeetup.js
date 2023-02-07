import { useHistory } from "react-router-dom"; // useHistory hook

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory(); // history object gives us methods to work with the browser history

  function addMeetupHandler(meetupData) {
    // Sent POST method here

    fetch(
      "https://test-react-meetup-example-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      // on POST success
      history.replace("/"); //replace the current page with the root page
    });

    // Typically you would confirm success or catch errors in the POST request here
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
