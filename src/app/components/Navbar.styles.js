import { alpha } from "@mui/material";

const navbarStyles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#1976d2",
    borderBottom: `1px solid ${theme.palette.mode === "dark" ? "#333" : "#e0e0e0"
      }`,
    boxShadow: "none",
    height: 80,
    width: "100%",
    overflowX: "hidden",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 1.5rem",
    height: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0.8rem",
    },
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    flex: "0 0 auto",
  },

  logoText: {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "inherit",
    userSelect: "none",
    letterSpacing: 1,
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#1565c0",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },

  navLinksContainer: {
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 auto",
    [theme.breakpoints.down("md")]: {
      display: "none", // Hide center links on tablet/mobile
    },
  },

  navButton: {
    color: theme.palette.mode === "dark" ? "#fff" : "#1976d2",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1.5rem",
    padding: "0.5rem 0.9rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? alpha("#fff", 0.15)
          : alpha("#1976d2", 0.15),
    },
  },

  authButtonsContainer: {
    display: "flex",
    gap: theme.spacing(1.5),
    justifyContent: "flex-end",
    flex: "0 0 auto",
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1),
    },
  },

  loginButton: {
    textTransform: "none",
    fontWeight: 700,
    borderRadius: "8px",
    padding: "0.5rem 1rem",
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
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    boxShadow: "0 5px 15px rgba(25,118,210,0.6)",
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1565c0",
      boxShadow: "0 7px 20px rgba(21,101,192,0.8)",
    },
    transition: "all 0.3s ease",
  },

  mobileMenuIcon: {
    display: "none",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "flex", // Show on mobile
      marginLeft: "auto",
    },
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
