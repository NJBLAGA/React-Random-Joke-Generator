import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const dadJokeFetch =
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes";

  const jokes = ["Want to hear something funny?"];
  const [joke, setJoke] = useState(jokes);

  useEffect(() => {
    fetch(dadJokeFetch)
      .then((response) => response.json())
      .then((data) => jokes.push(data));
  });

  function handleJoke() {
    jokes.map(function (Joke) {
      const { setup, punchline } = Joke;
      return setJoke(`${setup} .......... ${punchline}`);
    });
  }

  return (
    <>
      <div className="Joke-3000">
        <h1 className="Welcome">Random Jokes</h1>
        <button className="Jokebutton" onClick={handleJoke}>
          Joke me
        </button>
        <div className="Joke Holder">
          <p className="JokeBox">{joke}</p>
        </div>
      </div>
    </>
  );
}

export default App;
