'use client';

import Heading from '../heading.component';
import PortfolioCard from './portfolioCard.component';

const Portfolio = () => {
  return (
    <section className="mt-10 mb-10 text-center flex flex-col justify-center">
      <Heading
        title="Portfolio"
        subtitle="Here are some of my most recent projects"
        center
      />

      <div className="mt-10 mb-10 grid p-0 gap-4 grid-cols-1 md:grid-cols-2  ">
        <PortfolioCard
          title="Crown Clothing"
          subtitle="This is a project where i used React"
          usedTech="#React #TS #JS #Firebase"
          imageSrc="/images/portfolio-images/crown-app-small.png"
          liveUrl="https://jade-licorice-23a528.netlify.app/"
          repoUrl="https://github.com/Gustavarendd/crown-app"
        />
        <PortfolioCard
          title="Share My Place"
          subtitle="An app that lets you find your current location, and share a link to show where you are."
          usedTech="#React #TS #JS #Firebase"
          imageSrc="/images/portfolio-images/share-my-place-small.png"
          liveUrl="https://gustavarendd.github.io/find-my-place/"
          repoUrl="https://github.com/Gustavarendd/find-my-place"
        />
        <PortfolioCard
          title="To Do List"
          subtitle="A simple To Do list, where you can drag list items from active to finished."
          usedTech="#React #TS #JS #Firebase"
          imageSrc="/images/portfolio-images/to-do-list-small.png"
          liveUrl="https://gustavarendd.github.io/to-do-list/"
          repoUrl="https://github.com/Gustavarendd/to-do-list"
        />
        <PortfolioCard
          title="Portfolio Website"
          subtitle="My Portfolio website."
          usedTech="#React #TS #JS #Firebase"
          imageSrc="/images/portfolio-images/portfolio-small.png"
          liveUrl="https://gustavarend.netlify.app/"
          repoUrl="https://github.com/Gustavarendd/portfolio"
        />
      </div>
    </section>
  );
};

export default Portfolio;
