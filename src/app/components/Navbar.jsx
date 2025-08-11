"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import navbarStyles from "./navbar.style";

export default function Navbar() {
    const router = useRouter();

    // Hover effect handlers moved here (since inline styles don't support :hover)
    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = "#f0f0f0";
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = "transparent";
    };

    const handleLoginMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = "#1976d2";
        e.currentTarget.style.color = "#fff";
    };

    const handleLoginMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#1976d2";
    };

    const handleSignupMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = "#1565c0";
    };

    const handleSignupMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = "#1976d2";
    };

    return (
        <AppBar position="sticky" elevation={0} style={navbarStyles.navbar}>
            <Toolbar style={navbarStyles.toolbar}>
                {/* Logo */}
                <Typography
                    variant="h5"
                    style={navbarStyles.logo}
                    onClick={() => router.push("/")}
                >
                    ResumeAI
                </Typography>

                {/* Center Links */}
                <Box style={navbarStyles.navLinks}>
                    {["Home", "About", "Contact"].map((page) => (
                        <Button
                            key={page}
                            disableRipple
                            style={navbarStyles.navButton}
                            onClick={() => router.push(`/${page.toLowerCase() === "home" ? "" : page.toLowerCase()}`)}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                {/* Auth Buttons */}
                <Box style={navbarStyles.authButtons}>
                    <Button
                        variant="outlined"
                        style={navbarStyles.loginButton}
                        onClick={() => router.push("/login")}
                        onMouseOver={handleLoginMouseOver}
                        onMouseOut={handleLoginMouseOut}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        style={navbarStyles.signupButton}
                        onClick={() => router.push("/signup")}
                        onMouseOver={handleSignupMouseOver}
                        onMouseOut={handleSignupMouseOut}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
