"use client";
import React, { useState } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";

export default function Home() {
    const [hover, setHover] = useState(false);

    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh", backgroundColor: "#f7fbff", paddingBottom: "4rem" }}>
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
                        aria-label="Get Started with ResumeAI"
                    >
                        Get Started
                    </button>
                </section>

                {/* Features Section */}
                <section style={styles.featuresSection}>
                    <h2 style={styles.sectionTitle}>Why Choose ResumeAI?</h2>
                    <div style={styles.featuresGrid}>
                        <div style={styles.featureCard}>
                            <h3 style={styles.featureTitle}>AI-Powered Suggestions</h3>
                            <p style={styles.featureText}>
                                Let our AI craft the perfect content tailored to your experience and role.
                            </p>
                        </div>
                        <div style={styles.featureCard}>
                            <h3 style={styles.featureTitle}>Modern, Professional Templates</h3>
                            <p style={styles.featureText}>
                                Select from various sleek templates that impress recruiters instantly.
                            </p>
                        </div>
                        <div style={styles.featureCard}>
                            <h3 style={styles.featureTitle}>Instant Download</h3>
                            <p style={styles.featureText}>
                                Get your resume in PDF or Word formats instantly, ready to apply.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section style={styles.testimonialSection}>
                    <h2 style={styles.sectionTitle}>What Our Users Say</h2>
                    <blockquote style={styles.testimonial}>
                        "ResumeAI helped me build a professional resume in no time! The AI suggestions were spot on."
                        <footer style={styles.testimonialAuthor}>— Priya S., Software Engineer</footer>
                    </blockquote>
                    <blockquote style={styles.testimonial}>
                        "The templates are beautiful and easy to customize. Landed my dream job thanks to ResumeAI!"
                        <footer style={styles.testimonialAuthor}>— Rahul M., Marketing Specialist</footer>
                    </blockquote>
                </section>
            </main>
        </>
    );
}
