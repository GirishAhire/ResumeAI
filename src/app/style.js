const styles = {
    
    /* ===== NAVBAR ===== */
        navbar: {
            backgroundColor: "#ffffff",
            padding: "0.75rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
        },

        navLeft: {
            display: "flex",
            alignItems: "center",
            gap: "2rem",
        },

        navLogo: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1976d2",
            textDecoration: "none",
        },

        navLinks: {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
        },

        navLink: {
            textDecoration: "none",
            color: "#555",
            fontSize: "1rem",
            fontWeight: 500,
            padding: "0.5rem 0.8rem",
            borderRadius: "6px",
            transition: "all 0.3s ease",
        },

        navLinkHover: {
            backgroundColor: "#f0f0f0",
        },

        navRight: {
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
        },

        loginBtn: {
            border: "2px solid #1976d2",
            color: "#1976d2",
            backgroundColor: "transparent",
            fontWeight: "bold",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            textDecoration: "none",
            transition: "all 0.3s ease",
        },
        loginBtnHover: {
            backgroundColor: "#1976d2",
            color: "#fff",
        },

        signupBtn: {
            backgroundColor: "#1976d2",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
        },
        signupBtnHover: {
            backgroundColor: "#1565c0",
        },

        /* ===== HERO SECTION ===== */
        hero: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "4rem 2rem",
            background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            minHeight: "calc(100vh - 70px)",
        },

        heroTitle: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#0d47a1",
            maxWidth: "700px",
            marginBottom: "1rem",
        },

        heroSubtitle: {
            fontSize: "1.1rem",
            color: "#333",
            maxWidth: "600px",
            marginBottom: "2rem",
        },

        ctaButton: {
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: "0.8rem 2rem",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
        },

        ctaButtonHover: {
            backgroundColor: "#1565c0",
        },


    /* ===== CARD LAYOUT ===== */
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        marginTop: "2rem",
    },
    infoCard: {
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
    },
    infoCardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
        color: "#1976d2",
    },
    cardText: {
        color: "#666",
        fontSize: "0.95rem",
        lineHeight: "1.5",
    },

    /* ===== FORM PAGES (Login/Signup) ===== */
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #80deea)",
    },
    formBox: {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
    },
    formTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.8rem",
        marginBottom: "1.5rem",
        color: "#1976d2",
    },
    textField: {
        marginBottom: "1rem",
    },
    submitButton: {
        marginTop: "1rem",
        padding: "0.75rem",
        fontWeight: "bold",
        fontSize: "1rem",
    },
};

export default styles;
