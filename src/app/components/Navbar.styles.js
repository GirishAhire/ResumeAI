import { alpha } from "@mui/material";

const navbarStyles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#1976d2",
    borderBottom: `1px solid ${theme.palette.mode === "dark" ? "#333" : "#e0e0e0"}`,
    boxShadow: "none",
    height: 80,
  },
  toolbar: {
    maxWidth: 1800,
    mx: "auto",
    width: "100%",
    px: 2,
    height: "100%",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
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
    gap: 4,
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    color: (theme.palette.mode === "dark" ? "#ffff" : "#1976d2"),
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1.5rem",
    px: 2.5,
    py: 1.5,
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
    gap: 2,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    textTransform: "none",
    fontWeight: 700,
    borderRadius: "8px",
    px: 4,
    py: 1.25,
    fontSize: "1.1rem",
    borderColor: "#1976d2",
    color: "#1976d2",
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "#ffff",
      borderColor: "#1976d2",
    },
    transition: "all 0.3s ease",
  },
  signupButton: {
    textTransform: "none",
    fontWeight: 700,
    borderRadius: "8px",
    px: 4,
    py: 1.25,
    fontSize: "1.1rem",
    boxShadow: "0 5px 15px rgba(25,118,210,0.6)",
    "&:hover": {
      backgroundColor: "#1565c0",
      boxShadow: "0 7px 20px rgba(21,101,192,0.8)",
    },
    transition: "all 0.3s ease",
  },
  mobileMenuIcon: {
    ml: 1,
  },
  mobileMenuItem: {
    fontSize: "1.1rem",
    py: 1.5,
  },
  mobileMenuItemAuth: {
    fontWeight: 700,
    fontSize: "1.1rem",
    py: 1.5,
  },
});

export default navbarStyles;
