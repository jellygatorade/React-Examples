import { useRef } from "react";

import Card from "../ui/Card";

import classes from "./NewMeetupForm.module.css"; // classes will be a JS object containing all the css classes from this file as object properties

function NewMeetupForm(props) {
  // useRef is a
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    //console.log(meetupData);

    props.onAddMeetup(meetupData);
  }

  // React-specific attributes:
  // htmlFor replaces for attribute
  // ref is used with useRef to collect data from the fields
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input id="image" type="url" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input id="address" type="text" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
