"use client";
import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";
import aboutStyles from "./about.style";

export default function About() {
    return (
        <Box>
            <Navbar />

            {/* Hero Section */}
            <Box style={aboutStyles.pageHero}>
                <Box style={aboutStyles.heroContent}>
                    <Typography style={aboutStyles.heroHeading}>About ResumeAI</Typography>
                    <Typography style={aboutStyles.heroParagraph}>
                        ResumeAI is designed to help job seekers craft professional, personalized resumes in minutes.
                        Powered by advanced AI, our platform makes your job application process faster, smarter, and more effective.
                    </Typography>
                </Box>
            </Box>

            {/* Mission & Vision Section */}
            <Box style={aboutStyles.sectionContainer}>
                <Box style={aboutStyles.missionVision}>
                    <Box style={aboutStyles.missionBox}>
                        <Typography style={aboutStyles.sectionTitle}>Our Mission</Typography>
                        <Typography style={aboutStyles.sectionText}>
                            To empower every job seeker with smart, AI-driven tools that simplify resume creation and boost employment opportunities.
                        </Typography>
                    </Box>
                    <Box style={aboutStyles.visionBox}>
                        <Typography style={aboutStyles.sectionTitle}>Our Vision</Typography>
                        <Typography style={aboutStyles.sectionText}>
                            To be the leading AI-powered career assistant platform known for innovation, usability, and impactful results.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Feature Cards */}
            <Container>
                <Box style={aboutStyles.cardGrid}>
                    <Card style={aboutStyles.infoCard} elevation={0}>
                        <CardContent>
                            <Typography style={aboutStyles.cardTitle}>AI-Powered Builder</Typography>
                            <Typography style={aboutStyles.cardText}>
                                Our AI suggests the best content and format to make your resume stand out from the crowd.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={aboutStyles.infoCard} elevation={0}>
                        <CardContent>
                            <Typography style={aboutStyles.cardTitle}>Customizable Templates</Typography>
                            <Typography style={aboutStyles.cardText}>
                                Choose from a variety of modern, professional templates tailored to your industry.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={aboutStyles.infoCard} elevation={0}>
                        <CardContent>
                            <Typography style={aboutStyles.cardTitle}>Instant Download</Typography>
                            <Typography style={aboutStyles.cardText}>
                                Get your resume instantly in PDF or Word format, ready to send to employers.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>

            {/* Why Choose Us Section */}
            <Box style={aboutStyles.whyChooseContainer}>
                <Typography style={aboutStyles.whyChooseTitle}>Why Choose ResumeAI?</Typography>
                <Typography style={aboutStyles.whyChooseText}>
                    We combine cutting-edge AI technology with user-friendly design to deliver a seamless resume building experience. Our platform saves you time, increases your chances of landing interviews, and helps you present your skills professionally.
                </Typography>
            </Box>
        </Box>
    );
}
