import React from 'react';
import { BlogCard } from './BlogCard';
import { NewsCard } from './NewsCard';
import styles from './Blog.module.css';
import NavBar from '../Navbar/NavBar';
import img1 from '../Spotlight/images/img1.png'
import img2 from '../Spotlight/images/img2.png'
import img3 from '../Spotlight/images/img3.png'
import img4 from '../Spotlight/images/img4.png'
import img5 from '../Spotlight/images/img5.png'
import img6 from '../Spotlight/images/img6.png'
import img7 from '../Spotlight/images/img7.png'



const blogData = [
  {
    image: img1,
    title: "Blockchain in Higher Education: Revolutionising Credentials and Degrees",
    description: "The surge in forging techniques has reached a point where distinguishing between traditionally awarded degrees and meticulously crafted duplicates is nearly impossible."
  },
  {
    image: img2,
    title: "India's Educational Landscape refashioned by Gig Economy: Enigmatic role of Brand Consultants",
    description: "The gig economy has snowballed significant traction in India. Part-time or short-term gigs allow people them to supplement their incomes and even pursue entrepreneurial endeavors."
  },
  {
    image: img3,
    title: "Unveiling the Choices: Stated Preference vs. Revealed Preference in Indian Higher Education",
    description: "Stated preferences are often shaped by factors such as reputation, location, programme offerings and personal aspirations."
  }
];

const newsData = [
  {
    image: img4,
    title: "Vidyashilp University Updates",
    description: "The surge in forging techniques has reached a point where distinguishing between traditionally awarded degrees and meticulously crafted duplicates is nearly impossible."
  },
  {
    image:img5,
    title: "Purpose Summit Updates",
    description: "The surge in forging techniques has reached a point where distinguishing between traditionally awarded degrees and meticulously crafted duplicates is nearly impossible."
  },
  {
    image: img6,
    title: "Flame University Updates",
    description: "The surge in forging techniques has reached a point where distinguishing between traditionally awarded degrees and meticulously crafted duplicates is nearly impossible."
  },
  {
    image: img7,
    title: "Emversity Updates",
    description: "The surge in forging techniques has reached a point where distinguishing between traditionally awarded degrees and meticulously crafted duplicates is nearly impossible."
  }
];

export const BlogSection = () => {
  return (
    <section className={styles.spotlight}>
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>BLOGS</h2>
            <div className={styles.titleUnderline} />
          </div>
          <p className={styles.sectionDescription}>
            Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni officiis eos galisum sint eum dolor voluptatem quo laudantium deleniti. Non accusantium iste ea consequatur distinctio ut dolorem quis quo quia alias est maxime maxime.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              onReadMore={() => {}}
            />
          ))}
        </div>

        <div className={styles.newsHeader}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>NEWS</h2>
            <div className={styles.titleUnderline} />
          </div>
          <p className={styles.sectionDescription}>
            Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni officiis eos galisum sint eum dolor voluptatem quo laudantium deleniti. Non accusantium iste ea consequatur distinctio ut dolorem quis quo quia alias est maxime maxime.
          </p>
        </div>

        <div className={styles.newsGrid}>
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
            />
          ))}
        </div>

        <div className={styles.eduRecs}>
          <div className={styles.eduRecsContent}>
            <div className={styles.eduRecsHeader}>
              <div className={styles.eduTitle}>EDU</div>
              <div className={styles.recsWrapper}>
                <div className={styles.recsTitle}>RECs</div>
                <div className={styles.editorsChoice}>EDITOR'S CHOICE</div>
              </div>
            </div>
            <h2 className={styles.podcastTitle}>
              Podcast Recommendation: Branding in Education
            </h2>
            <p className={styles.podcastDescription}>
              The surge in forging techniques has reached a point where distinguishing between traditionally awarded degrees and meticulously crafted duplicates is nearly impossible. Lorem ipsum dolor sit amet. Ut galisum corrupti qui magni officiis eos galisum sint eum dolor voluptatem quo laudantium deleniti. Non accusantium iste ea consequatur distinctio ut dolorem quis quo quia alias est maxime maxime.
            </p>
            <button className={styles.pastRecsButton} tabIndex={0}>
              See past recommendations
            </button>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8397598769884750a970fb52fe91672d/11f39550289cf80334325db09b547bad82729247df567f1b4450357158358437?apiKey=8397598769884750a970fb52fe91672d&"
            alt="Education recommendations"
            className={styles.eduRecsImage}
          />
        </div>
      </div>
      <NavBar/>
    </section>
  );
};

export default BlogSection;