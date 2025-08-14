import { alpha } from "@mui/material";

const navbarStyles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#1976d2",
    borderBottom: `1px solid ${theme.palette.mode === "dark" ? "#333" : "#e0e0e0"}`,
    boxShadow: "none",
    height: 80,
    width: "100%",
    overflowX: "hidden", // Prevent horizontal scroll
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 1200, // Keep navbar content within max width
    width: "100%",
    margin: "0 auto",
    padding: "0 1rem", // consistent horizontal padding
    height: "100%",
    boxSizing: "border-box",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    cursor: "pointer",
    fontWeight: "bold",
    color: "inherit",
    userSelect: "none",
    letterSpacing: 1,
    "&:hover": {
      color: "#1565c0",
    },
  },
  navLinksContainer: {
    display: "flex",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0, // Prevent links from stretching toolbar
  },
  navButton: {
    color: theme.palette.mode === "dark" ? "#fff" : "#1976d2",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1.1rem",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" ? alpha("#fff", 0.15) : alpha("#1976d2", 0.15),
    },
  },
  authButtonsContainer: {
    display: "flex",
    gap: 1.5,
    justifyContent: "flex-end",
    flexShrink: 0,
  },
  loginButton: {
    textTransform: "none",
    fontWeight: 700,
    borderRadius: "8px",
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    borderColor: "#1976d2",
    color: "#1976d2",
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "#fff",
      borderColor: "#1976d2",
    },
    transition: "all 0.3s ease",
  },
  signupButton: {
    textTransform: "none",
    fontWeight: 700,
    borderRadius: "8px",
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    boxShadow: "0 5px 15px rgba(25,118,210,0.6)",
    "&:hover": {
      backgroundColor: "#1565c0",
      boxShadow: "0 7px 20px rgba(21,101,192,0.8)",
    },
    transition: "all 0.3s ease",
  },
  mobileMenuIcon: {
    marginLeft: 1,
  },
  mobileMenuItem: {
    fontSize: "1rem",
    padding: "0.8rem 1rem",
  },
  mobileMenuItemAuth: {
    fontWeight: 700,
    fontSize: "1rem",
    padding: "0.8rem 1rem",
  },
});

export default navbarStyles;
