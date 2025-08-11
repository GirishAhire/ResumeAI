const aboutStyles = {
    pageHero: {
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)", // same as home hero background
        padding: "6rem 1rem 4rem",
        color: "#0d47a1", // deeper blue for text like home page
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
        color: "#1976d2", // primary blue, same as home heroTitle
    },
    heroParagraph: {
        fontSize: "1.25rem",
        lineHeight: 1.6,
        maxWidth: "600px",
        margin: "0 auto",
        color: "#333", // dark gray text like home heroSubtitle
    },

    sectionContainer: {
        marginTop: "3rem",
        marginBottom: "3rem",
        padding: "0 1rem",
    },
    missionVision: {
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    missionBox: {
        flex: "1 1 300px",
        backgroundColor: "#e3f2fd", // subtle blue shade
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(33, 150, 243, 0.15)", // softer blue shadow
        color: "#0d47a1",
    },
    visionBox: {
        flex: "1 1 300px",
        backgroundColor: "#bbdefb", // lighter blue shade
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(33, 150, 243, 0.15)",
        color: "#0d47a1",
    },
    sectionTitle: {
        fontWeight: "700",
        fontSize: "1.75rem",
        marginBottom: "0.75rem",
        color: "#1976d2",
    },
    sectionText: {
        fontSize: "1rem",
        color: "#333",
        lineHeight: 1.5,
    },

    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        padding: "3rem 1rem",
    },
    infoCard: {
        backgroundColor: "#fff", // white background for cards
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(25, 118, 210, 0.2)", // subtle blue shadow like home cards
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
    },
    cardTitle: {
        color: "#1976d2", // primary blue for titles
        fontWeight: "700",
        fontSize: "1.25rem",
    },
    cardText: {
        color: "#555",
        fontSize: "1rem",
        lineHeight: 1.5,
    },

    whyChooseContainer: {
        maxWidth: "720px",
        margin: "4rem auto 6rem",
        padding: "0 1rem",
        textAlign: "center",
    },
    whyChooseTitle: {
        fontWeight: "700",
        fontSize: "2.25rem",
        color: "#1976d2",
        marginBottom: "1rem",
    },
    whyChooseText: {
        fontSize: "1.15rem",
        color: "#1976d2",
        lineHeight: 1.7,
    },
};

export default aboutStyles;
