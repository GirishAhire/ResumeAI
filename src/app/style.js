const styles = {
    hero: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem 4rem",
        backgroundColor: "#1976d2",
        color: "#fff",
        overflow: "hidden",
    },

    heroOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.15), transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
    },

    heroTitle: {
        position: "relative",
        fontSize: "3rem",
        fontWeight: "900",
        marginBottom: "1rem",
        zIndex: 1,
        maxWidth: "900px",
    },

    heroSubtitle: {
        position: "relative",
        fontSize: "1.3rem",
        fontWeight: "500",
        maxWidth: "600px",
        marginBottom: "2.5rem",
        zIndex: 1,
        lineHeight: "1.5",
    },

    ctaButton: {
        position: "relative",
        padding: "1rem 3rem",
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "#1976d2",
        backgroundColor: "#fff",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0 6px 15px rgba(25, 118, 210, 0.4)",
        transition: "all 0.3s ease",
        zIndex: 1,
    },

    ctaButtonHover: {
        backgroundColor: "#1565c0",
        color: "#fff",
        boxShadow: "0 8px 25px rgba(21, 101, 192, 0.7)",
        transform: "translateY(-3px)",
    },

    featuresSection: {
        padding: "3rem 2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
    },

    sectionTitle: {
        fontSize: "2rem",
        fontWeight: "900",
        marginBottom: "2rem",
        color: "#1976d2",
    },

    featuresGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
    },

    featureCard: {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(25, 118, 210, 0.15)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
    },

    featureCardHover: {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 40px rgba(21, 101, 192, 0.3)",
    },

    featureTitle: {
        fontSize: "1.3rem",
        fontWeight: "700",
        color: "#1976d2",
        marginBottom: "0.5rem",
    },

    featureText: {
        fontSize: "1rem",
        color: "#555",
        lineHeight: "1.6",
    },

    testimonialSection: {
        padding: "3rem 2rem",
        maxWidth: "720px",
        margin: "4rem auto 6rem",
        backgroundColor: "#e3f2fd",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(25, 118, 210, 0.1)",
        textAlign: "center",
    },

    testimonial: {
        fontStyle: "italic",
        fontSize: "1.1rem",
        marginBottom: "1.5rem",
        color: "#1976d2",
        lineHeight: "1.5",
    },

    testimonialAuthor: {
        fontWeight: "700",
        fontSize: "1rem",
        color: "#0d47a1",
    },
};

export default styles;
