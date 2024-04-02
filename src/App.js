import React, { useEffect, useState } from "react";
import "./styles.css";

// how to fetch in react?

export default function App() {
  const [joke, setJoke] = useState("");
  const [jokeId, setJokeId] = useState(0);

  async function fetchJoke() {
    const response = await fetch(
      `https://example-apis.vercel.app/api/bad-jokes/${jokeId}`
    );
    const data = await response.json();
    console.log(data);
    setJoke(data.joke);
  }

  console.log(jokeId);

  // fetchJoke()

  // how to trigger "effects" only once?
  // useEffect code runs >only once< after first render
  useEffect(() => {
    console.log("inside effect");
    fetchJoke();
  }, [jokeId]);
  //   ^ dependency array: when this element changes the effect is executed again!

  return (
    <>
      <h1>{joke}</h1>
      <button type="button" onClick={() => setJokeId(jokeId + 1)}>
        Next Joke
      </button>
    </>
  );
}
