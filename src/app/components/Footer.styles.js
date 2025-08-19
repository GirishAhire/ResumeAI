const useStyles = (theme) => ({
    footer: {
        bgcolor: theme.palette.mode === "dark" ? "#1b1b1b" : "#f0f4f8",
        borderTop: `2px solid ${theme.palette.mode === "dark" ? "#333" : "#ddd"}`,
        py: 4,
        px: 3,
        boxShadow:
            theme.palette.mode === "dark"
                ? "0 0 12px rgba(255,255,255,0.05)"
                : "0 -4px 20px rgba(0,0,0,0.07)",
        borderRadius: "16px 16px 0 0",
        marginTop: theme.spacing(8),
    },

    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    },

    copyText: {
        color: theme.palette.mode === "dark" ? "#ccc" : "#555",
        fontWeight: 600,
        fontSize: "1.1rem",
        flex: "1 1 300px",
        [theme.breakpoints.down("sm")]: {
            flex: "unset",
            marginBottom: theme.spacing(2),
        },
    },

    brandLink: {
        fontWeight: 700,
        cursor: "pointer",
        color: theme.palette.primary.main,
        fontSize: "1.2rem",
        transition: "all 0.3s ease",
        "&:hover": {
            textDecoration: "underline",
            color: theme.palette.primary.dark,
            transform: "scale(1.05)",
        },
    },

    linkStack: {
        justifyContent: "flex-end",
        flex: "1 1 300px",
        display: "flex",
        gap: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            flexWrap: "wrap",
            gap: theme.spacing(2),
            marginTop: theme.spacing(2),
        },
    },

    footerLink: {
        color: theme.palette.mode === "dark" ? "#bbb" : "#444",
        fontWeight: 600,
        fontSize: "1.1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.primary.main,
            textDecoration: "underline",
            transform: "scale(1.05)",
        },
    },
});

export default useStyles;
