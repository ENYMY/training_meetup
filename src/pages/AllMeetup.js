import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetup/MeetupList";
const AllMeetupPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetup-16593-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        const meetups = [];
        for (const key in resData) {
          const meetup = {
            id: key,
            ...resData[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupPage;
