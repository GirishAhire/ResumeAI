"use client";
import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";
import styles from "../style";

export default function About() {
    return (
        <Box>
            <Navbar />

            {/* Hero Section */}
            <Box style={styles.pageHero}>
                <Box style={styles.heroContent}>
                    <Typography style={styles.heroHeading}>About ResumeAI</Typography>
                    <Typography style={styles.heroParagraph}>
                        ResumeAI is designed to help job seekers craft professional, personalized resumes in minutes.
                        Powered by advanced AI, our platform makes your job application process faster, smarter, and more effective.
                    </Typography>
                </Box>
            </Box>

            {/* Feature Cards */}
            <Container>
                <Box style={styles.cardGrid}>
                    <Card style={styles.infoCard}>
                        <CardContent>
                            <Typography style={styles.cardTitle}>AI-Powered Builder</Typography>
                            <Typography style={styles.cardText}>
                                Our AI suggests the best content and format to make your resume stand out from the crowd.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={styles.infoCard}>
                        <CardContent>
                            <Typography style={styles.cardTitle}>Customizable Templates</Typography>
                            <Typography style={styles.cardText}>
                                Choose from a variety of modern, professional templates tailored to your industry.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={styles.infoCard}>
                        <CardContent>
                            <Typography style={styles.cardTitle}>Instant Download</Typography>
                            <Typography style={styles.cardText}>
                                Get your resume instantly in PDF or Word format, ready to send to employers.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
