import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card";
import database from "./firebase"
import './Cards.css';

function Cards() {
  const [people, setpeople] = useState([
    // {
    //   name: "hanako",
    //   url:
    //     "https://www.pakutaso.com/shared/img/thumb/fukugyo206140027_TP_V.jpg",
    // },
    // {
    //   name: "takuro",
    //   url:
    //     "https://www.pakutaso.com/shared/img/thumb/danda171203IMGL5020_TP_V.jpg",
    // },
  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setpeople(snapshot.docs.map((doc) => doc.data()))
    );
    return () => {
      unsubscribe();
    }
  }, [people])

  return (
    <div>
      <div className="cards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards
