import React from 'react';
import styles from './PortfolioSection.module.css'
import ProjectCard from './ProjectCard';
import NavBar from '../Navbar/NavBar';
import flame from '../Work/images/img1.png'
import isbr from '../Work/images/img2.png'
import artvillage from '../Work/images/img3.png'
import london from '../Work/images/img4.png'
import vidyashilp from '../Work/images/img5.png'
import emversity from '../Work/images/img6.png'


const logos = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/c21166eb95c00cc9ea08b2341f40426087f1ae883594e01c902147866dd3bfe7?apiKey=8397598769884750a970fb52fe91672d&', alt: 'Partner Logo 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/d58cf5a1e873a347fd11668f81b0ffcad071f2ad4ea610d18e00386c8a4ee843?apiKey=8397598769884750a970fb52fe91672d&', alt: 'Partner Logo 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/6f3369c8fd8ed6aa205108db308ee4f460e6f2cc39b42d05c0a89140792d1f28?apiKey=8397598769884750a970fb52fe91672d&', alt: 'Partner Logo 3' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/3b21411e2d1a12e15454d2ee6e6bc9e27ff3827937152517ad6a41e084d493b6?apiKey=8397598769884750a970fb52fe91672d&', alt: 'Partner Logo 4' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/12d6029ed981f818573d24fd7bd224f4c482d82b40109bae70b2685725f8fc28?apiKey=8397598769884750a970fb52fe91672d&', alt: 'Partner Logo 5' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/4f04e2ac31bb670d73d169f758a53bd1d00fcf4426cb1b84daf2da841ddf1874?apiKey=8397598769884750a970fb52fe91672d&', alt: 'Partner Logo 6' },
];

const projects = [
    {
        image: flame,
        // title: 'Flame University',
        // description: "Building India's Pioneers in Liberal Education through a Decade of Partnership",
        imageAspectRatio: '0.88',
        // dividerHeight: 116
    },
    {
        image: london,
        // title: 'London Business School',
        // description: 'World-class education meets global leadership with direct communication.',
        imageAspectRatio: '1.69',
        // dividerHeight: 114
    },
    {
        image: isbr,
        // title: 'ISBR',
        // description: 'Creating an identity for a management institute in India.',
        imageAspectRatio: '1.71',
        // dividerHeight: 64
    },
    {
        image: vidyashilp,
        // title: 'Vidyashilp University',
        // description: 'Building a student centric immersive experience.',
        imageAspectRatio: '1.47',
        // dividerHeight: 80
    },
    {
        image: artvillage,
        // title: 'Art Village',
        // description: 'Branding an artist collaborative space celebrating art architecture and nature through sustainable practises and eco stays.',
        imageAspectRatio: '1.32',
        // dividerHeight: 116
    },
    {
        image: emversity,
        // title: 'Emversity',
        // description: "Branding India's leading institute in skill-based education",
        imageAspectRatio: '0.8',
        // dividerHeight: 62
    }
];

export default function PortfolioSection() {
    return (
        <><section className={styles.portfolioSection}>
            <NavBar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>OUR WORK</h2>
                        <div className={styles.titleUnderline} />
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni officiis
                        eos galisum sint eum dolor voluptatem quo laudantium deleniti. Non
                        accusantium iste ea consequatur distinctio ut dolorem quis quo
                        quia alias est<br></br> maxime maxime.
                    </p>
                </div>

                <div className={styles.logoGrid}>
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={styles.logo}
                            loading="lazy" />
                    ))}
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project} />
                    ))}
                </div>

                <button className={styles.seeMore}>See More</button>


            </div>
        </section></>
    );
}