import MeetupItem from "./MeetupItem";

import classes from "./MeetupList.module.css"; // classes will be a JS object containing all the css classes from this file as object properties

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {/* Can use either arrow function format below (with or without explicit return) */}
      {/* {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))} */}
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
