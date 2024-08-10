import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science at UCI",
          "Contact Information:",
          "ccelisej.04@gmail.com",
          "https://www.linkedin.com/in/elise-ji/",
          "https://github.com/eliseji"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
