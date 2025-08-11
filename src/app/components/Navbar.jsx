"use client";
import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import navbarStyles from "./Navbar.styles";

export default function Navbar() {
    const theme = useTheme();
    const styles = navbarStyles(theme);
    const router = useRouter();

    // State to track if component is mounted (client)
    const [mounted, setMounted] = useState(false);

    // Setup isMobile only after mounted to avoid SSR mismatch
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        setMounted(true);
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ];

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const handleNavClick = (href) => {
        router.push(href);
        handleMenuClose();
    };

    if (!mounted) {
        // Prevent rendering during SSR to avoid mismatch
        return null;
    }

    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                {/* Logo */}
                <Box sx={styles.logoBox}>
                    <Typography
                        variant="h4"
                        onClick={() => router.push("/")}
                        sx={styles.logoText}
                    >
                        ResumeAI
                    </Typography>
                </Box>

                {/* Desktop nav links */}
                {!isMobile && (
                    <Box sx={styles.navLinksContainer}>
                        {navLinks.map(({ title, href }) => (
                            <Button
                                key={title}
                                onClick={() => handleNavClick(href)}
                                sx={styles.navButton}
                            >
                                {title}
                            </Button>
                        ))}
                    </Box>
                )}

                {/* Login / Sign Up buttons */}
                {!isMobile && (
                    <Box sx={styles.authButtonsContainer}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => router.push("/login")}
                            sx={styles.loginButton}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router.push("/signup")}
                            sx={styles.signupButton}
                        >
                            Sign Up
                        </Button>
                    </Box>
                )}

                {/* Mobile menu */}
                {isMobile && (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="mobile-menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            sx={styles.mobileMenuIcon}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>

                        <Menu
                            id="mobile-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            keepMounted
                            sx={{ mt: 1 }}
                        >
                            {navLinks.map(({ title, href }) => (
                                <MenuItem
                                    key={title}
                                    onClick={() => handleNavClick(href)}
                                    sx={styles.mobileMenuItem}
                                >
                                    {title}
                                </MenuItem>
                            ))}
                            <MenuItem
                                onClick={() => {
                                    handleMenuClose();
                                    router.push("/login");
                                }}
                                sx={styles.mobileMenuItemAuth}
                            >
                                Login
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleMenuClose();
                                    router.push("/signup");
                                }}
                                sx={styles.mobileMenuItemAuth}
                            >
                                Sign Up
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}
