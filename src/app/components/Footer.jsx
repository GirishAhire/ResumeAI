"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Link, Stack, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "./Footer.styles";

export default function Footer() {
    const theme = useTheme();
    const styles = useStyles(theme);
    const router = useRouter();

    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const footerLinks = [
        { label: "About", href: "/about" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Licensing", href: "/licensing" },
        { label: "Contact", href: "/contact" },
    ];

    if (year === null) return null; // Prevent SSR hydration mismatch

    return (
        <Box component="footer" sx={styles.footer}>
            <Container maxWidth="xl" sx={styles.container}>
                <Typography variant="body2" sx={styles.copyText}>
                    © {year}{" "}
                    <Link
                        href="/"
                        underline="hover"
                        sx={styles.brandLink}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/");
                        }}
                    >
                        ResumeAI™
                    </Link>
                    . All Rights Reserved.
                </Typography>

                <Stack direction="row" spacing={4} sx={styles.linkStack}>
                    {footerLinks.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            underline="hover"
                            sx={styles.footerLink}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(href);
                            }}
                        >
                            {label}
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
