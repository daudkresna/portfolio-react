import React, { useState } from "react";
import HamburgerButton from "./components/HamburgerButton";
import NavigationLink from "./components/NavigationLink";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setHamburgerOpen((state) => !state);
  };

  return (
    <header className="bg-neutral-900 flex py-4 px-8 w-full z-40 sticky top-0">
      <div className="text-neutral-50 font-bold font-sans">
        <h1 className="font-sans text-2xl">
          Na.<span className="text-sky-600">Dev</span>
        </h1>
      </div>
      <HamburgerButton
        hamburgerOpen={hamburgerOpen}
        handleHamburger={handleHamburger}
      />
      <NavigationLink hamburgerOpen={hamburgerOpen} />
    </header>
  );
};

export default NavBar;
