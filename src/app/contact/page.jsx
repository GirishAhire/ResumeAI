"use client";
import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
} from "@mui/material";
import styles from "./contact.style";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // TODO: Send data to backend/API

        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setErrors({});
    };

    // Reset success message after 3 seconds, only on client after submit
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.pageHero}>
                <Box sx={styles.heroContent}>
                    <Typography sx={styles.heroHeading}>Get in Touch</Typography>
                    <Typography sx={styles.heroParagraph}>
                        We’d love to hear from you! Whether you have a question, feedback, or
                        just want to say hi, our team is here to help.
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
                {/* Contact Info Cards */}
                <Box sx={styles.cardGrid}>
                    <Card sx={styles.infoCard}>
                        <CardContent>
                            <Typography sx={styles.cardTitle}>Email Us</Typography>
                            <Typography sx={styles.cardText}>support@resumeai.com</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.infoCard}>
                        <CardContent>
                            <Typography sx={styles.cardTitle}>Call Us</Typography>
                            <Typography sx={styles.cardText}>+1 (555) 123-4567</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.infoCard}>
                        <CardContent>
                            <Typography sx={styles.cardTitle}>Office</Typography>
                            <Typography sx={styles.cardText}>
                                123 AI Street, Innovation City, Techland
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Contact Form */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={styles.formContainer}
                    noValidate
                    aria-live="polite"
                >
                    <Typography variant="h5" sx={styles.formTitle}>
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
                        sx={styles.textField}
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
                        sx={styles.textField}
                        autoComplete="email"
                        inputProps={{ suppressHydrationWarning: true }}
                    />
                    <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        sx={styles.textField}
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
                        sx={styles.textField}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={styles.submitButton}
                        aria-label="Send your message"
                    >
                        Send Message
                    </Button>

                    {submitted && (
                        <Typography
                            sx={styles.successMessage}
                            role="alert"
                            tabIndex={0}
                        >
                            Thank you! Your message has been sent.
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    );
}
