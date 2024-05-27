import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import RestaurantPage from "./assets/portfolio-1.png";
import AniSearch from "./assets/anisearch.png";
import NanimeList from "./assets/nanimelist.png";
import SkillCard from "./components/SkillCard";

const Portfolio = ({ skillList }) => {
  const portfolioList = [
    {
      title: "Restaurant Landing Page",
      image: RestaurantPage,
      text: "Website landing page restaurant menggunakan TailwindCSS",
      tech: [
        <SkillCard
          skillImg={skillList[2].skillImage}
          skillTitle={skillList[2].skillTitle}
        />,
      ],
      link: "https://kresna-tailwind-restaurant.netlify.app/",
    },
    {
      title: "AniSearch",
      image: AniSearch,
      text: "Website pencarian anime dengan menggunakan Jikan API",
      tech: [
        <SkillCard
          skillImg={skillList[2].skillImage}
          skillTitle={skillList[2].skillTitle}
        />,
        <SkillCard
          skillImg={skillList[4].skillImage}
          skillTitle={skillList[4].skillTitle}
        />,
      ],
      link: "https://daudkresna-react-anisearch.netlify.app/",
    },
    {
      title: "Nanime List",
      image: NanimeList,
      text: "Website pencarian anime dan menambahkan anime favorit ke list koleksi",
      tech: [
        <SkillCard
          skillImg={skillList[2].skillImage}
          skillTitle={skillList[2].skillTitle}
        />,
        <SkillCard
          skillImg={skillList[4].skillImage}
          skillTitle={skillList[4].skillTitle}
        />,
        <SkillCard
          skillImg={skillList[5].skillImage}
          skillTitle={skillList[5].skillTitle}
        />,
        <SkillCard
          skillImg={skillList[6].skillImage}
          skillTitle={skillList[6].skillTitle}
        />,
      ],
      link: "https://daudkresna-next-nanimelist.vercel.app/",
    },
  ];

  console.log(portfolioList[2].tech);

  return (
    <section id="portfolio" className="container max-w-full px-16 py-8">
      <div className="mt-8 text-center">
        <h1 className="font-bold text-2xl text-center text-sky-600 md:text-4xl">
          Portfolio
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:w-10/12 md:mx-auto">
        {portfolioList.map((item, index) => (
          <PortfolioCard
            image={item.image}
            title={item.title}
            text={item.text}
            tech={item.tech}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
