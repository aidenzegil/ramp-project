import React from "react";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <div id="top-part">
        <div class="container block">
          <h1 class="label">Input:</h1>
          <textarea
            placeholder="Input an array, falsy value, or anything else for different results"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            class="input is-primary block"
          />
        </div>
        <button class="button is-primary block">Submit</button>
        <button class="button is-danger block">Clear</button>
      </div>
      <div id="bottom-part" class="box block">
        {output}
      </div>
    </div>
  );
};

export default Home;
