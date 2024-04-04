import React from "react";

const NavigationLink = ({ hamburgerOpen }) => {
  const navigationList = [
    {
      title: "Home",
      refLink: "#home",
    },
    {
      title: "About",
      refLink: "#about",
    },
    {
      title: "Contact",
      refLink: "#contact",
    },
  ];

  return (
    <nav
      id="nav-menu"
      className={`${!hamburgerOpen ? "hidden" : null} md:block md:static md:bg-transparent md:max-w-full text-neutral-50 absolute max-w-[250px] w-full font-semibold right-4 top-full bg-neutral-900`}
    >
      <ul className="block md:flex md:justify-end">
        {navigationList.map((item, index) => (
          <li key={index}>
            <a className="px-4 py-2 flex" href={item.refLink}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLink;
