import React from "react";
import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useNavigate } from "react-router";
const NewMeetupPage = (props) => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-16593-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
