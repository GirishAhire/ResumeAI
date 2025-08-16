"use client";
import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // TODO: Send data to backend/API

        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <>
            <Navbar />

            <Box sx={styles.container}>
                <Typography sx={styles.title}>Contact Us</Typography>
                <Typography sx={styles.subtitle}>
                    Got a technical issue? Want to send feedback about a beta feature?
                    Need details about our Business plan? Let us know.
                </Typography>

                <Container sx={styles.form}>
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
                    <Button type="submit" sx={styles.button} onClick={handleSubmit}>
                        Send Message
                    </Button>

                    {submitted && (
                        <Typography sx={styles.successMessage} role="alert">
                            Thank you! Your message has been sent.
                        </Typography>
                    )}
                </Container>

                {/* Optional: Contact Info */}
                <Box sx={{ display: "flex", gap: "20px", marginTop: "40px", flexWrap: "wrap", justifyContent: "center" }}>
                    <Card sx={styles.infoBox}>
                        <CardContent>
                            <Typography variant="h6">Email Us</Typography>
                            <Typography>support@resumeai.com</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.infoBox}>
                        <CardContent>
                            <Typography variant="h6">Call Us</Typography>
                            <Typography>+1 (555) 123-4567</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.infoBox}>
                        <CardContent>
                            <Typography variant="h6">Office</Typography>
                            <Typography>123 AI Street, Innovation City, Techland</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            <Footer />
        </>
    );
}
