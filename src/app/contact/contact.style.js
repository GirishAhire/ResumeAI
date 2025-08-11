const contactStyles = {
    pageHero: {
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        padding: "6rem 1rem 4rem",
        color: "#0d47a1",
        textAlign: "center",
    },
    heroContent: {
        margin: "0 auto",
        maxWidth: "720px",
    },
    heroHeading: {
        fontWeight: "bold",
        fontSize: "2.75rem",
        marginBottom: "1rem",
        color: "#1976d2",
    },
    heroParagraph: {
        fontSize: "1.25rem",
        lineHeight: 1.6,
        maxWidth: "600px",
        margin: "0 auto",
        color: "#333",
    },

    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem",
    },
    infoCard: {
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(25, 118, 210, 0.2)",
        padding: "1.5rem",
        transition: "transform 0.3s ease",
        cursor: "default",
    },
    cardTitle: {
        color: "#1976d2",
        fontWeight: "700",
        fontSize: "1.25rem",
        marginBottom: "0.5rem",
    },
    cardText: {
        color: "#555",
        fontSize: "1rem",
        lineHeight: 1.5,
    },

    formContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        backgroundColor: "#fff",
        padding: "2.5rem 3rem",
        borderRadius: "16px",
        boxShadow: "0 8px 30px rgba(25, 118, 210, 0.12)",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
            boxShadow: "0 12px 45px rgba(25, 118, 210, 0.2)",
        },
    },
    formTitle: {
        color: "#1976d2",
        fontWeight: "700",
        fontSize: "1.8rem",
        marginBottom: "1rem",
        textAlign: "center",
    },
    textField: {
        backgroundColor: "#f7fbff",
        borderRadius: "8px",
        // Override MUI input styles if needed
    },
    submitButton: {
        backgroundColor: "#1976d2",
        color: "#fff",
        fontWeight: "700",
        padding: "0.85rem",
        fontSize: "1.1rem",
        borderRadius: "50px",
        boxShadow: "0 6px 15px rgba(25, 118, 210, 0.4)",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        border: "none",
        "&:hover": {
            backgroundColor: "#1565c0",
        },
    },
    successMessage: {
        marginTop: "1rem",
        color: "#2e7d32",
        fontWeight: "600",
        textAlign: "center",
        animation: "fadeInOut 3s ease forwards",
    },
};

export default contactStyles;
