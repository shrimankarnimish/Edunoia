import React from 'react';
import styles from './OfferingsSection.module.css';
import ImageGrid from './ImageGrid';
import CultureCard from './CultureCard';
import NavBar from '../Navbar/NavBar'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import img10 from './images/img10.png'
import img11 from './images/img11.png'
import img12 from './images/img12.png'


export default function OfferingsSection() {
  const strategyImages = [
    { src: img1,  alt: "Strategy illustration 1" },
    { src: img2, alt: "Strategy illustration 2" },
    { src: img3, alt: "Strategy illustration 3" },
    { src: img4, alt: "Strategy illustration 4" }
  ];

  const designImages = [
    { src: img5, alt: "Design showcase 1" },
    { src: img6, alt: "Design showcase 2" },
    { src: img7, alt: "Design showcase 3" },
    { src: img8, alt: "Design showcase 4" }
  ];
  const designImagess = [
    { src: img9, alt: "Design showcase 1" },
    { src: img10, alt: "Design showcase 2" },
    { src: img11, alt: "Design showcase 3" },
    { src: img12, alt: "Design showcase 4" }
  ];

  const cultureCards = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/75d9938b36e5b775acce18b220c2ac7ba6ddcc5bc9402b7976491b7db80d2671?apiKey=8397598769884750a970fb52fe91672d&",
      title: "Organisational Culture Branding",
      alt: "Organizational culture illustration"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/9c912b6909ecabcf2b340612677e903a03238ec6a9729cb4b1956b060ce06bbc?apiKey=8397598769884750a970fb52fe91672d&",
      title: "Employer Branding",
      alt: "Employer branding visualization"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/393538f471b23f905a6432ceb92892f19d3ddc34682bb7405aaaf3525900cd83?apiKey=8397598769884750a970fb52fe91672d&",
      title: "Employee Value Proposition (EVP) & Employee Experience",
      alt: "EVP and employee experience diagram"
    }
  ];

  return (
    <><section className={styles.offeringsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              what we<br />offer
            </h1>
            <div className={styles.titleUnderline} />
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni
            officiis eos galisum sint eum dolor voluptatem quo laudantium
            deleniti. Non accusantium iste ea consequatur distinctio ut
            dolorem quis quo quia alias est maxime maxime.
          </p>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Strategy</h2>
      <ImageGrid images={strategyImages} />

      <h2 className={styles.sectionTitle}>Design</h2>
      <ImageGrid images={designImages} />
      <ImageGrid images={designImagess} />

      <h2 className={styles.sectionTitle}>Culture</h2>
      <div className={styles.cultureCards}>
        {cultureCards.map((card, index) => (
          <CultureCard
            key={index}
            image={card.image}
            title={card.title}
            alt={card.alt} />
        ))}
      </div>
    </section>
    
    <NavBar /></>
  );
}
