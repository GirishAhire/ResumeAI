const styles = {
    pageHero: {
        backgroundColor: "#e3f2fd",
        padding: "4rem 1rem",
        textAlign: "center",
        borderRadius: "8px",
    },
    heroContent: {
        maxWidth: "600px",
        margin: "0 auto",
    },
    heroHeading: {
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "1rem",
        color: "#1976d2",
    },
    heroParagraph: {
        fontSize: "1.125rem",
        color: "#333",
    },
    cardGrid: {
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "3rem",
    },
    infoCard: {
        flex: "1 1 250px",
        minWidth: "250px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(25,118,210,0.15)",
    },
    cardTitle: {
        fontWeight: "700",
        fontSize: "1.125rem",
        color: "#1565c0",
        marginBottom: "0.5rem",
    },
    cardText: {
        fontSize: "1rem",
        color: "#555",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#fafafa",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(25,118,210,0.1)",
    },
    formTitle: {
        marginBottom: "1rem",
        fontWeight: "700",
        color: "#1976d2",
    },
    textField: {
        backgroundColor: "#fff",
        borderRadius: "8px",
    },
    submitButton: {
        marginTop: "1rem",
        padding: "12px",
        borderRadius: "8px",
        fontWeight: "600",
        backgroundColor: "#1976d2",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(25,118,210,0.6)",
        transition: "background-color 0.3s ease",
        "&:hover": {
            backgroundColor: "#1565c0",
        },
    },
    successMessage: {
        marginTop: "1rem",
        color: "#2e7d32",
        fontWeight: "600",
        animation: "fadeIn 0.5s ease-in",
    },
};

export default styles;
