import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';
import Intro from './components/intro/intro.component';
import Navbar from './components/navbar/navbar.component';
import Portfolio from './components/portfolio/portfolio.component';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex gap-6 min-h-screen px-5 sm:p-20 md:p-10 m-auto flex-col pt-[100px] lg:w-[1000px] items-center">
        <Intro />
        <hr
          id="about"
          className="w-full"
        />
        <About />
        <hr
          id="portfolio"
          className="w-full"
        />
        <Portfolio />
        <hr
          id="contact"
          className="w-full"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
