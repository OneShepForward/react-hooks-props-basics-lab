import React from "react";

function Links({linkedin, github}) {
  console.log(linkedin)
    return (
    <div id="links">
      <h3>Links</h3>
      <a href={linkedin}>{linkedin}</a>
      <a href={github}>{github}</a>
    </div>
  );
}

export default Links;