import React from 'react';
import Nav from './Nav';

function Header() {
    const headerLinks = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav links={headerLinks} />
    </header>
  );
}

export default Header;
