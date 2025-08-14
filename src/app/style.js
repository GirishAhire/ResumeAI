const styles = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#f7fbff",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden", // Prevent horizontal scroll
    },

    // Hero Section
    hero: {
        position: "relative",
        textAlign: "center",
        padding: "6rem 1rem",
        background: "linear-gradient(135deg, #2563eb, #1e40af)",
        color: "#fff",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
    },
    heroOverlay: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
    },
    heroTitle: {
        fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
        fontWeight: "bold",
        zIndex: 1,
        position: "relative",
        marginBottom: "1rem",
        padding: "0 1rem",
    },
    heroSubtitle: {
        fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
        maxWidth: "600px",
        margin: "0 auto",
        zIndex: 1,
        position: "relative",
        opacity: 0.9,
        padding: "0 1rem",
    },
    ctaButton: {
        marginTop: "2rem",
        padding: "0.8rem 2rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "none",
        borderRadius: "30px",
        backgroundColor: "#facc15",
        color: "#1e3a8a",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: 1,
        position: "relative",
        maxWidth: "90%",
    },
    ctaButtonHover: {
        backgroundColor: "#eab308",
        transform: "scale(1.05)",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
    },

    // Features Section
    featuresSection: {
        padding: "4rem 1rem",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
    },
    sectionTitle: {
        fontSize: "clamp(1.5rem, 4vw, 2rem)",
        fontWeight: "bold",
        marginBottom: "3rem",
        color: "#1e3a8a",
    },
    featuresGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
        width: "100%",
        boxSizing: "border-box",
    },
    featureCard: {
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        width: "100%",
        boxSizing: "border-box",
    },
    featureCardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
    },
    featureTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#1e3a8a",
    },
    featureText: {
        fontSize: "1rem",
        color: "#555",
    },

    // Testimonials Section
    testimonialSection: {
        backgroundColor: "#f1f5f9",
        padding: "4rem 1rem",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
    },
    testimonial: {
        fontStyle: "italic",
        maxWidth: "600px",
        margin: "1.5rem auto",
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        width: "100%",
        boxSizing: "border-box",
    },
    testimonialAuthor: {
        marginTop: "1rem",
        fontWeight: "bold",
        color: "#1e3a8a",
    },
};

export default styles;
