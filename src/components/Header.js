import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">The Food Group Sweater Generator</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
