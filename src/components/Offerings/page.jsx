import React from 'react';
import NavBar from '../Navbar/NavBar';
import { ImageGrid } from './ImageGrid';
import { cultureCards } from './cultureData';
// import { CultureCard } from './CultureCard';
import { strategyImages } from '../Offerings/StrategyImages'; // Ensure correct path
import { designImages, designImagess } from './DesignImages'; // Ensure correct path
import Footer from '../Footer/Footer';

// import { CultureCardData } from './CultureCard';

export function OfferingsPage() {
  return (
    <main className="flex overflow-hidden flex-col pt-14 bg-white ">
      <div className="flex flex-col items-start self-end w-full max-w-[1790px] max-md:max-w-full"  data-aos="fade-up">
        <section className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col items-center justify-start mt-20">
            <div className="flex flex-col w-1/5 max-md:w-full">
              <div className="flex flex-col text-6xl font-bold uppercase leading-[58px] text-sky-950 max-md:text-4xl max-md:leading-10">
                <h1 className="mt-0 max-md:mt-10 .gap-12.5rem" style={{ color: '#002855',marginTop:'76px'}}>
                  what we
                  <br />
                  offer
                </h1>
                <div className="shrink-0 mt-10 border-orange-500 border-solid border-[10px] h-[10px] w-[89px]"  />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full font-light text-black max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-start mt-28 text-2xl max-md:mt-10 max-md:max-w-full">
                  <p className="flex-auto self-start w-[1077px] max-md:max-w-full -mt-10 .gap-12.5rem" style={{marginTop:'-7%'}}>
                    Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni
                    officiis eos galisum sint eum dolor voluptatem quo
                    laudantium deleniti. Non accusantium iste ea consequatur
                    distinctio ut dolorem quis quo quia alias est maxime maxime.
                  </p>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </section> <br></br> <br></br> <br></br> <br></br>
        {/* ------------------------------ */}
        <section aria-labelledby="strategy-section" className="w-full"  data-aos="fade-right">
          <h2 className="mt-5 text-5xl font-bold leading-none text-black max-md:text-4xl">
            Strategy
          </h2>
          <div className="mt-14 w-full max-w-[1653px] max-md:mt-10 max-md:max-w-full">
            <ImageGrid images={strategyImages} />
          </div>
        </section>

        <section aria-labelledby="design-section" className="w-full"  data-aos="fade-right">
          <h2 className="mt-48 text-5xl font-bold leading-none text-black max-md:mt-10 max-md:text-4xl">
            Design
          </h2>
          <div className="mt-14 w-full max-w-[1725px] max-md:mt-10 max-md:max-w-full">
            <ImageGrid images={designImages} />
          </div>
        </section>
        <section aria-labelledby="design-section" className="w-full">
          <div className="mt-14 w-full max-w-[1725px] max-md:mt-10 max-md:max-w-full">
            <ImageGrid images={designImagess} />
          </div>
        </section>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div className="flex flex-col">
          <div className="flex flex-col self-center w-full max-w-[1657px] max-md:max-w-full">
            <div className="self-start text-5xl font-bold leading-none text-black max-md:text-4xl">
              Culture
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {cultureCards.map((card) => (
                  <div key={card.title}>
                    <img src={card.src} alt={card.alt} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container" style={{ position: 'relative', minHeight: 'auto' }}>
        <NavBar />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default OfferingsPage;
