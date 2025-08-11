"use client";
import React from "react";
import { Box, Container, Typography, Card, CardContent, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import styles from "../style";

export default function Contact() {
    return (
        <Box>
            <Navbar />

            {/* Hero Section */}
            <Box style={styles.pageHero}>
                <Box style={styles.heroContent}>
                    <Typography style={styles.heroHeading}>Get in Touch</Typography>
                    <Typography style={styles.heroParagraph}>
                        We’d love to hear from you! Whether you have a question, feedback, or just want to say hi,
                        our team is here to help.
                    </Typography>
                </Box>
            </Box>

            {/* Contact Info */}
            <Container>
                <Box style={styles.cardGrid}>
                    <Card style={styles.infoCard}>
                        <CardContent>
                            <Typography style={styles.cardTitle}>Email Us</Typography>
                            <Typography style={styles.cardText}>support@resumeai.com</Typography>
                        </CardContent>
                    </Card>
                    <Card style={styles.infoCard}>
                        <CardContent>
                            <Typography style={styles.cardTitle}>Call Us</Typography>
                            <Typography style={styles.cardText}>+1 (555) 123-4567</Typography>
                        </CardContent>
                    </Card>
                    <Card style={styles.infoCard}>
                        <CardContent>
                            <Typography style={styles.cardTitle}>Office</Typography>
                            <Typography style={styles.cardText}>
                                123 AI Street, Innovation City, Techland
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Contact Button */}
                <Box textAlign="center" mt={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ padding: "10px 24px", borderRadius: "8px", fontWeight: "bold" }}
                    >
                        Send a Message
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
