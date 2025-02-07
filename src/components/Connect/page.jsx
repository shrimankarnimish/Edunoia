"use client";

import React, { useState } from 'react';
import styles from './ConnectSection.module.css'
import NavBar from '../Navbar/NavBar';
import work from '../../images/assets/Work.png'


const HeaderSection = () => (
    <header className={styles.headerSection}>
        <div className={styles.titleContainer}>
            <h1 className={styles.titleLeft}>Let's</h1>
            <div className={styles.imageContainer}>
                <img loading="lazy" src={work} alt="" className={styles.centerImage} />
            </div>
            <h1 className={styles.titleRight}>work</h1>
        </div>
        <h2 className={styles.togetherText}>together</h2>
        <p className={styles.tagline}>
            Ready for a <strong>breakthrough</strong>?
            <br />
            Let's revolutionise Education together.
        </p><br></br><br></br>
    </header>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGrid}>
                <div className={styles.formLabels}>
                    <h3 className={styles.contactLabel}>Contact</h3>
                    <span className={styles.careerLabel}>Career</span>
                    <span className={styles.collaborationLabel}>Collaboration</span>
                </div>
                <div className={styles.formFields}>
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.formInput}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email ID"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                        type="tel"
                        placeholder="Number"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
            </div>
            <div className={styles.additionalFields}>
                <input
                    type="text"
                    placeholder="Company or School"
                    className={styles.formInput}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <textarea
                    placeholder="Message"
                    className={styles.messageInput}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </div>
        </form>
    );
};

const ImageSection = () => (
    <div className={styles.imageSection}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4508.859591061216!2d72.8613327043729!3d19.12055786378052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94b49d96b49%3A0xda6cd437e5b3b2a6!2sAT%20By%20AGM%20VIJAYLAXMI%20VENTURE!5e0!3m2!1sen!2sin!4v1738659164018!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ minHeight: "40rem" }}
        ></iframe>
    </div>
);

const ConnectSection = () => {
    return (
        <><section className={styles.connect}>
            <div className={styles.container}>
                <HeaderSection />
                <div className={styles.contentGrid}>
                    <div className={styles.formContainer}>
                        <ContactForm />
                    </div>
                    <ImageSection />
                </div>
            </div>
        </section><NavBar />
        </>
    );
};

export default ConnectSection;