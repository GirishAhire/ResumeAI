"use client";
import React, { useState } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";

export default function Home() {
    const [hover, setHover] = useState(false);

    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh", backgroundColor: "#f7fbff" }}>
                <section style={styles.hero}>
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
            </main>
        </>
    );
}
