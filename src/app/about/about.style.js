const aboutStyles = {
    // ✅ Hero Section
    pageHero: {
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        padding: "6rem 1rem 4rem",
        color: "#0d47a1",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heroContent: {
        margin: "0 auto",
        maxWidth: "900px",
        padding: "0 1rem",
    },
    heroHeading: {
        fontWeight: "700",
        fontSize: "clamp(2rem, 5vw, 3rem)", // ✅ Responsive font
        marginBottom: "1rem",
        color: "#1976d2",
    },
    heroParagraph: {
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        lineHeight: 1.7,
        maxWidth: "700px",
        margin: "0 auto",
        color: "#333",
    },

    // ✅ Mission / Vision Section
    sectionContainer: {
        marginTop: "3rem",
        marginBottom: "3rem",
        padding: "0 1.5rem",
    },
    missionVision: {
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    missionBox: {
        flex: "1 1 320px",
        backgroundColor: "#e3f2fd",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(33, 150, 243, 0.15)",
        color: "#0d47a1",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    visionBox: {
        flex: "1 1 320px",
        backgroundColor: "#bbdefb",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(33, 150, 243, 0.15)",
        color: "#0d47a1",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    sectionTitle: {
        fontWeight: "700",
        fontSize: "1.8rem",
        marginBottom: "0.75rem",
        color: "#1976d2",
    },
    sectionText: {
        fontSize: "1.2rem",
        color: "#555",
        lineHeight: 1.6,
    },

    // ✅ Info Cards
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        padding: "3rem 1rem",
    },
    infoCard: {
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 6px 18px rgba(25, 118, 210, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
    },
    infoCardHover: {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 30px rgba(25, 118, 210, 0.25)",
    },
    cardTitle: {
        color: "#1976d2",
        fontWeight: "700",
        fontSize: "1.5rem",
        marginBottom: "0.5rem",
    },
    cardText: {
        color: "#555",
        fontSize: "1.1rem",
        lineHeight: 1.6,
    },

    // ✅ Why Choose Section
    whyChooseContainer: {
        maxWidth: "900px",
        margin: "4rem auto 6rem",
        padding: "0 1rem",
        textAlign: "center",
    },
    whyChooseTitle: {
        fontWeight: "600",
        fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
        color: "#1976d2",
        marginBottom: "1rem",
    },
    whyChooseText: {
        fontSize: "clamp(1rem, 2vw, 1.2rem)",
        color: "#555",
        lineHeight: 1.7,
    },
};

export default aboutStyles;
