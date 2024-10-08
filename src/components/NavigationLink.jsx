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
      title: "Portfolio",
      refLink: "#portfolio",
    },
    {
      title: "Contact",
      refLink: "#contact",
    },
  ];

  return (
    <nav
      id="nav-menu"
      className={`${!hamburgerOpen ? "scale-y-0" : "scale-y-100 "} ease-in-out duration-300 md:scale-y-100 origin-top  md:static md:block md:bg-transparent md:max-w-full text-neutral-50 absolute max-w-[250px] w-full font-semibold right-4 top-full bg-neutral-900`}
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
