import React from "react";

const HamburgerButton = ({ hamburgerOpen, handleHamburger }) => {
  return (
    <div class="flex items-center">
      <button
        class="block absolute right-4 md:hidden"
        id="hamburger"
        name="hamburger"
        type="button"
        onClick={handleHamburger}
      >
        <span
          class={`${hamburgerOpen ? "rotate-45" : null} transition duration-300 ease-in-out origin-top-left my-2 block w-[30px] h-[2px] bg-white`}
        ></span>
        <span
          class={`${hamburgerOpen ? "scale-0" : null} transition duration-300 ease-in-out my-2 block w-[30px] h-[2px] bg-white`}
        ></span>
        <span
          class={`${hamburgerOpen ? "-rotate-45" : null} transition duration-300 ease-in-out origin-bottom-left my-2 block w-[30px] h-[2px] bg-white`}
        ></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
