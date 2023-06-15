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
          title="House Hosting"
          subtitle="A website that lets you host your home, for people to rent"
          usedTech="#React #TS #JS #MongoDB #nextJS #prisma #Tailwind"
          imageSrc="/images/portfolio-images/house-hosting.jpeg"
          liveUrl="https://househosting.vercel.app/"
          repoUrl="https://github.com/Gustavarendd/house-hosting"
        />
        <PortfolioCard
          title="Car app"
          subtitle="A website that lets you browse cars and see information on them."
          usedTech="#React #TS #JS #nextJS #Tailwind"
          imageSrc="/images/portfolio-images/carApp.jpeg"
          liveUrl="https://car-app-pi.vercel.app/"
          repoUrl="https://github.com/Gustavarendd/car-app"
        />
        <PortfolioCard
          title="The Clothing Store"
          subtitle="A clothing web-shop"
          usedTech="#React #TS #JS #Firebase #Stripe"
          imageSrc="/images/portfolio-images/theClothingStore.jpeg"
          liveUrl="https://jade-licorice-23a528.netlify.app/"
          repoUrl="https://github.com/Gustavarendd/web-shop"
        />
        <PortfolioCard
          title="Share My Place"
          subtitle="An app that lets you find your current location, and share a link to show where you are."
          usedTech="#HTML #CSS #JS"
          imageSrc="/images/portfolio-images/share-my-place-small.png"
          liveUrl="https://gustavarendd.github.io/find-my-place/"
          repoUrl="https://github.com/Gustavarendd/find-my-place"
        />
      </div>
    </section>
  );
};

export default Portfolio;
