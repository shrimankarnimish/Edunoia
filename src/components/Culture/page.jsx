import React from 'react';
import { TeamMember } from './TeamMember';
import styles from './TeamSection.module.css'
import NavBar from '../Navbar/NavBar'
import Grouppic from './images/GroupPic.png'
import kunal from './images/Kunal.png'
import maghan from './images/Maghan.png'
import priyanka from './images/Priyanka.png'
import sveta from './images/sveta.png'
import ekta from './images/ekta.png'
import poornima from './images/poornima.png'
import sneha from './images/sneha.png'
import nupur from './images/nupur.png'
import jaffer from './images/jaffer.png'
import ketul from './images/ketul.png'
import abhilasha from './images/abhilasha.png'
import sasha from './images/sasha.png'
import rucha from './images/Rucha.png'
import ruchi from './images/ruchi.png'
import simrin from './images/simrin.png'
import akansha from './images/akansha.png'
import hitesh from './images/hitesh.png'
import florie from './images/florie.png'
import mohit from './images/mohit.png'
import lokesh from './images/lokesh.png'

const teamMembers = [
  { name: "Kunal Vora", title: "Founding Partner", image:kunal,  },
  { name: "Maghan Varkey", title: "Director - Edunoia", image: maghan},
  { name: "Priyanka Shahra", title: "Co-founder", image: priyanka},
  { name: "Sveta Vora", title: "Partner", image:sveta, hasBlueBackground: true },
  { name: "Ekta Banodkar", title: "Creative Director", image: ekta},
  { name: "Poornima Badwe", title: "Senior Brand Designer", image:poornima },
  { name: "Sneha Sharma", title: "Senior Brand Designer", image: sneha},
  { name: "Nupur Malekar", title: "Brand Designer", image: nupur},
  { name: "Jaffer Kapadia", title: "Senior Brand Designer", image: jaffer},
  { name: "Ketul Patel", title: "Senior Brand Designer", image: ketul},
  { name: "Abhilasha Dhiman", title: "Brand Strategist", image: abhilasha},
  { name: "Sasha Sunshine", title: "Senior Brand Strategist", image: sasha },
  { name: "Rucha Rastogi", title: "Senior Brand Strategist", image: rucha},
  { name: "Ruchi Gharekhan", title: "Accounts Consultant", image: ruchi},
  { name: "Simrin Manwani", title: "Senior Brand Strategist", image: simrin},
  { name: "Aakanksha Sheth", title: "Content Strategist", image: akansha },
  { name: "Hitesh", title: "Senior Digital Developer", image: hitesh },
  { name: "Florie D'souza", title: "Administration & Accounts", image: florie },
  { name: "Mohit Ranjane", title: "Junior Brand Designer", image: mohit},
  { name: "Lokesh Jain", title: "Animator & Motion Designer", image: lokesh }
];

export const TeamSection = () => {
  return (
    <><section className={styles.teamSection}>
      <img
        loading="lazy"
        src= {Grouppic}
        className={styles.headerImage}
        alt="Team header" />
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1>TEAM</h1>
          <div className={styles.titleUnderline} />
        </div>
        <p className={styles.description}>
          At Edunoia, we pride ourselves on a diverse team of experts who are passionate about Education and Branding.
          Our team includes seasoned professionals from the learning industry, innovative brand practitioners,
          esteemed faculty members and representatives from exclusive educational forums. Each member brings unique
          insights and a deep commitment to transforming educational institutions. Together, we combine creativity,
          strategic thinking and a consumer-centric approach to deliver exceptional results. Meet the dedicated
          individuals driving Edunoia's mission to redefine Education Branding in India.
        </p>
      </div>
      <div className={styles.membersGrid}>
        {teamMembers.map((member, index) => (
          <TeamMember  image={member.image}
             />
        ))}
      </div>
    </section>
    <NavBar />
    </>
  );
};
export default TeamSection;