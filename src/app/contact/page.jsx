"use client";
import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import styles from "./contact.style";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Validate email format
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!validateEmail(formData.email))
            newErrors.email = "Please enter a valid email.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // Here you can connect to backend API or service

        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setErrors({});
    };

    return (
        <Box>
            <Navbar />

            {/* Hero Section */}
            <Box style={styles.pageHero}>
                <Box style={styles.heroContent}>
                    <Typography style={styles.heroHeading}>Get in Touch</Typography>
                    <Typography style={styles.heroParagraph}>
                        We’d love to hear from you! Whether you have a question, feedback, or
                        just want to say hi, our team is here to help.
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="md" style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                {/* Contact Info Cards */}
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

                {/* Contact Form */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    style={styles.formContainer}
                    noValidate
                    aria-live="polite"
                >
                    <Typography variant="h5" style={styles.formTitle}>
                        Send us a message
                    </Typography>

                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        style={styles.textField}
                        autoComplete="name"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        style={styles.textField}
                        autoComplete="email"
                    />
                    <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={styles.textField}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        style={styles.textField}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        style={styles.submitButton}
                        aria-label="Send your message"
                    >
                        Send Message
                    </Button>

                    {submitted && (
                        <Typography
                            style={styles.successMessage}
                            role="alert"
                            tabIndex={0}
                            onAnimationEnd={() => setSubmitted(false)} // Reset success message after animation
                        >
                            Thank you! Your message has been sent.
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    );
}
