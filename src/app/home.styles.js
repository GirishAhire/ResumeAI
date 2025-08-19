const styles = {
    page: {
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f7fbff 0%, #e3f2fd 100%)",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
    },

    // 🌟 Hero Section
    hero: {
        position: "relative",
        textAlign: "center",
        padding: "6rem 1rem",
        background: "linear-gradient(135deg, #1976d2, #0d47a1)",
        color: "#fff",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: "0 0 40px 40px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
    },
    heroOverlay: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.2)",
        borderRadius: "0 0 40px 40px",
    },
    heroTitle: {
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: "800",
        zIndex: 1,
        position: "relative",
        marginBottom: "1rem",
        padding: "0 1rem",
        textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
    },
    heroSubtitle: {
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        maxWidth: "650px",
        margin: "0 auto",
        zIndex: 1,
        position: "relative",
        opacity: 0.95,
        padding: "0 1rem",
        lineHeight: 1.6,
    },
    ctaButton: {
        marginTop: "2rem",
        padding: "1rem 2.5rem",
        fontSize: "1.2rem",
        fontWeight: "700",
        border: "none",
        borderRadius: "30px",
        background: "linear-gradient(135deg, #ffca28, #fdd835)",
        color: "#0d47a1",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: 1,
        position: "relative",
        maxWidth: "90%",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    },
    ctaButtonHover: {
        background: "linear-gradient(135deg, #fbc02d, #f9a825)",
        transform: "scale(1.05)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.3)",
    },

    // 🌟 Features Section
    featuresSection: {
        padding: "4rem 1rem",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
    },
    sectionTitle: {
        fontSize: "clamp(2rem, 4vw, 2.5rem)",
        fontWeight: "800",
        marginBottom: "4rem",
        color: "#0d47a1",
        textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
    },
    featuresGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
        width: "100%",
        boxSizing: "border-box",
    },
    featureCard: {
        padding: "2.5rem 2rem",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        width: "100%",
        boxSizing: "border-box",
    },
    featureCardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0px 12px 28px rgba(0,0,0,0.12)",
    },
    featureTitle: {
        fontSize: "1.5rem",
        fontWeight: "700",
        marginBottom: "0.75rem",
        color: "#1976d2",
    },
    featureText: {
        fontSize: "1.2rem",
        color: "#555",
        lineHeight: 1.6,
    },

    // 🌟 Testimonials Section
    testimonialSection: {
        backgroundColor: "#e3f2fd",
        padding: "4rem 1rem",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
    },
    testimonial: {
        fontSize: "1.2rem",
        fontStyle: "italic",
        maxWidth: "600px",
        margin: "1.5rem auto",
        background: "#fff",
        padding: "2rem",
        borderRadius: "15px",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
        width: "100%",
        boxSizing: "border-box",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    testimonialAuthor: {
        marginTop: "1rem",
        fontWeight: "700",
        color: "#0d47a1",
    },

    // 🌟 Responsive
    "@media (max-width: 768px)": {
        heroTitle: { fontSize: "2rem" },
        heroSubtitle: { fontSize: "1rem" },
        ctaButton: { padding: "0.8rem 2rem", fontSize: "1.1rem" },
        sectionTitle: { fontSize: "1.75rem" },
        featureTitle: { fontSize: "1.3rem" },
        featureText: { fontSize: "1.1rem" },
    },
};

export default styles;
