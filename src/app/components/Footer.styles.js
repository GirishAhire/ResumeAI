const useStyles = (theme) => ({
    footer: {
        bgcolor: theme.palette.mode === "dark" ? "#212121" : "#f5f7fa",
        borderTop: `2px solid ${theme.palette.mode === "dark" ? "#222" : "#ddd"}`,
        py: 3,
        // mt: 8,
        boxShadow:
            theme.palette.mode === "dark"
                ? "0 0 10px rgba(255,255,255,0.05)"
                : "0 -2px 10px rgba(0,0,0,0.07)",
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    },
    copyText: {
        color: theme.palette.mode === "dark" ? "grey.500" : "text.secondary",
        fontWeight: 700,
        fontSize: "1.1rem",
        flex: "1 1 300px",
        [theme.breakpoints.down("sm")]: {
            flex: "unset",
            marginBottom: theme.spacing(2),
        },
    },
    brandLink: {
        fontWeight: "700",
        cursor: "pointer",
        color: theme.palette.primary.main,
        "&:hover": {
            textDecoration: "underline",
            color: theme.palette.primary.dark,
        },
    },
    linkStack: {
        justifyContent: "flex-end",
        flex: "1 1 300px",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            flexWrap: "wrap",
            gap: theme.spacing(2),
        },
    },
    footerLink: {
        color: theme.palette.mode === "dark" ? "grey.400" : "text.secondary",
        fontWeight: 700,
        fontSize: "1.2rem",
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": {
            color: theme.palette.primary.main,
            textDecoration: "underline",
        },
    },
});

export default useStyles;