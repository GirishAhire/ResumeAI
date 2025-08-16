export const loginStyles = {
    root: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)", // same as about hero
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    },
    paper: {
        width: "100%",
        maxWidth: "420px", // keeps it responsive
        padding: "36px 28px",
        borderRadius: "18px",
        backdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.95)", // glassmorphism effect
        boxShadow: "0 10px 30px rgba(25, 118, 210, 0.25)", // soft floating card
        color: "#0d47a1",
        transition: "all 0.3s ease",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "18px",
        fontSize: "2.2rem",
        textAlign: "center",
        color: "#1976d2", // primary heading
        letterSpacing: "0.5px",
    },
    form: {
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
    },
    textField: {
        marginTop: "16px",
        marginBottom: "16px",
        "& .MuiInputBase-root": {
            color: "#0d47a1",
            borderRadius: "10px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(25,118,210,0.4)",
            transition: "all 0.3s ease",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
        },
        "& .MuiInputLabel-root": {
            color: "rgba(13,71,161,0.8)",
        },
    },
    button: {
        marginTop: "28px",
        padding: "14px 0",
        fontSize: "1.05rem",
        fontWeight: "bold",
        borderRadius: "12px",
        color: "#fff",
        background: "linear-gradient(45deg, #1976d2, #42a5f5)", // blue gradient
        boxShadow: "0 4px 14px rgba(25, 118, 210, 0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
            background: "linear-gradient(45deg, #1565c0, #1e88e5)",
            boxShadow: "0 8px 22px rgba(25, 118, 210, 0.45)",
            transform: "translateY(-2px)", // smooth lift
        },
    },
    switchText: {
        marginTop: "20px",
        textAlign: "center",
        fontSize: "1rem",
        color: "#0d47a1",
    },
    link: {
        fontWeight: "bold",
        cursor: "pointer",
        color: "#1976d2",
        transition: "all 0.2s ease",
        "&:hover": {
            textDecoration: "underline",
            color: "#0d47a1",
        },
    },

    // 🔹 Responsive tweaks
    "@media (max-width: 600px)": {
        paper: {
            padding: "28px 20px",
            borderRadius: "14px",
        },
        title: {
            fontSize: "1.8rem",
        },
        button: {
            fontSize: "0.95rem",
            padding: "12px 0",
        },
    },
};
