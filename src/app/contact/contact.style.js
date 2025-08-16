const contactStyles = {
    // 🌟 Container
    container: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9f9f9 0%, #e3f2fd 100%)",
        borderRadius: "24px",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
    },

    // 🌟 Title
    title: {
        fontSize: "2.75rem",
        fontWeight: "800",
        textAlign: "center",
        marginBottom: "15px",
        color: "#0d47a1",
        letterSpacing: "1px",
        textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
    },

    // 🌟 Subtitle
    subtitle: {
        fontSize: "1.1rem",
        textAlign: "center",
        marginBottom: "50px",
        color: "#333",
        maxWidth: "650px",
        lineHeight: 1.7,
        letterSpacing: "0.5px",
    },

    // 🌟 Form
    form: {
        width: "100%",
        display: "grid",
        gap: "20px",
    },

    // 🌟 TextField Styles
    textField: {
        "& .MuiInputBase-root": {
            borderRadius: "14px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
        },
        "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                borderColor: "#1976d2",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
                boxShadow: "0 0 0 4px rgba(25, 118, 210, 0.15)",
            },
        },
    },

    // 🌟 Button
    button: {
        padding: "14px 24px",
        borderRadius: "14px",
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        color: "#fff",
        fontWeight: "700",
        fontSize: "1rem",
        textTransform: "none",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 16px rgba(25, 118, 210, 0.25)",
        "&:hover": {
            background: "linear-gradient(135deg, #1565c0, #1e88e5)",
            transform: "translateY(-3px)",
            boxShadow: "0 10px 20px rgba(25, 118, 210, 0.35)",
        },
    },

    // 🌟 Info Cards
    infoBox: {
        marginTop: "40px",
        padding: "25px",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        textAlign: "center",
        color: "#222",
        lineHeight: 1.7,
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
        },
    },

    // 🌟 Success Message
    successMessage: {
        marginTop: "20px",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "600",
        color: "#2e7d32",
        backgroundColor: "rgba(46, 125, 50, 0.15)",
        borderRadius: "12px",
        padding: "12px 20px",
        boxShadow: "0 4px 12px rgba(46, 125, 50, 0.1)",
    },

    // 🌟 Responsive
    "@media (max-width: 768px)": {
        container: { padding: "40px 15px" },
        title: { fontSize: "2.25rem" },
        subtitle: { fontSize: "1rem" },
    },
};

export default contactStyles;
