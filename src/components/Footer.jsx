import React from "react";

function Footer() {
  const date = new Date();
  const thisyear = date.getFullYear();
  return (
    <footer>
      <p> Copyright: {thisyear} </p>
    </footer>
  );
}

export default Footer;
