"use client";
import React, { useState } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
    const [hover, setHover] = useState(false);

    return (
        <>
            <Navbar />
            <main style={styles.page}>
                {/* Hero Section */}
                <section style={styles.hero}>
                    <div style={styles.heroOverlay}></div>
                    <h1 style={styles.heroTitle}>
                        Build Your Professional Resume with AI Assistance
                    </h1>
                    <p style={styles.heroSubtitle}>
                        ResumeAI helps you create job-winning resumes in minutes using
                        cutting-edge artificial intelligence. No design skills needed.
                    </p>
                    <button
                        style={
                            hover
                                ? { ...styles.ctaButton, ...styles.ctaButtonHover }
                                : styles.ctaButton
                        }
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={() => (window.location.href = "/signup")}
                    >
                        Get Started
                    </button>
                </section>

                {/* Features Section */}
                <section style={styles.featuresSection}>
                    <h2 style={styles.sectionTitle}>Why Choose ResumeAI?</h2>
                    <div style={styles.featuresGrid}>
                        {[
                            {
                                title: "AI-Powered Suggestions",
                                text: "Let our AI craft the perfect content tailored to your experience and role.",
                            },
                            {
                                title: "Modern, Professional Templates",
                                text: "Select from various sleek templates that impress recruiters instantly.",
                            },
                            {
                                title: "Instant Download",
                                text: "Get your resume in PDF or Word formats instantly, ready to apply.",
                            },
                        ].map(({ title, text }) => (
                            <div key={title} style={styles.featureCard}>
                                <h3 style={styles.featureTitle}>{title}</h3>
                                <p style={styles.featureText}>{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section style={styles.testimonialSection}>
                    <h2 style={styles.sectionTitle}>What Our Users Say</h2>
                    <blockquote style={styles.testimonial}>
                        "ResumeAI helped me build a professional resume in no time! The AI
                        suggestions were spot on."
                        <footer style={styles.testimonialAuthor}>
                            — Priya S., Software Engineer
                        </footer>
                    </blockquote>
                    <blockquote style={styles.testimonial}>
                        "The templates are beautiful and easy to customize. Landed my dream
                        job thanks to ResumeAI!"
                        <footer style={styles.testimonialAuthor}>
                            — Rahul M., Marketing Specialist
                        </footer>
                    </blockquote>
                </section>
            </main>
            <Footer/>
        </>
    );
}
