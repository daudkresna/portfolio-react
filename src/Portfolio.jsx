import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import RestaurantPage from "./assets/portfolio-1.png";
import AniSearch from "./assets/anisearch.png";
import NanimeList from "./assets/nanimelist.png";
import Geratis from "./assets/geratis-game.png";

const Portfolio = ({ skillList }) => {
  const portfolioList = [
    {
      title: "Fullstack Geratis Game",
      image: Geratis,
      text: "Fullstack web app untuk mencari game favorit dan mengomentari game tersebut",
      tech: [
        skillList[4].skillImage,
        skillList[6].skillImage,
        skillList[5].skillImage,
        skillList[8].skillImage,
      ],
      link: "https://geratis-game.vercel.app/",
      repo: "https://github.com/daudkresna/geratis-game.git",
    },
    {
      title: "Nanime List",
      image: NanimeList,
      text: "Website pencarian anime dan menambahkan anime favorit ke list koleksi",
      tech: [
        skillList[2].skillImage,
        skillList[4].skillImage,
        skillList[6].skillImage,
        skillList[7].skillImage,
      ],
      link: "https://daudkresna-next-nanimelist.vercel.app/",
      repo: "https://github.com/daudkresna/next-nanimelist.git",
    },
    {
      title: "Restaurant Landing Page",
      image: RestaurantPage,
      text: "Website landing page restaurant menggunakan TailwindCSS",
      tech: [skillList[2].skillImage],
      link: "https://kresna-tailwind-restaurant.netlify.app/",
      repo: "https://github.com/daudkresna/belajar-tailwind.git",
    },
    {
      title: "AniSearch",
      image: AniSearch,
      text: "Website pencarian anime dengan menggunakan Jikan API",
      tech: [skillList[2].skillImage, skillList[4].skillImage],
      link: "https://daudkresna-react-anisearch.netlify.app/",
      repo: "https://github.com/daudkresna/react-anisearch.git",
    },
  ];

  return (
    <section id="portfolio" className="container max-w-full px-16 py-8">
      <div className="mt-8 text-center">
        <h1 className="font-bold text-2xl text-center text-sky-600 md:text-4xl">
          Portfolio
        </h1>
      </div>
      <div className="w-full relative flex flex-wrap md:w-10/12 md:mx-auto">
        {portfolioList.map((item, index) => (
          <PortfolioCard
            image={item.image}
            title={item.title}
            text={item.text}
            tech={item.tech}
            link={item.link}
            repo={item.repo}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
