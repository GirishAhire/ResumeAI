"use client";
import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    InputAdornment,
    IconButton,
    Link,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { loginStyles } from "./style";

// Validation Schema
const schema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = existingUsers.find((user) => user.email === data.email);

        if (!foundUser) {
            alert("No account found with this email. Please sign up first.");
            return;
        }

        if (foundUser.password !== data.password) {
            alert("Incorrect password. Please try again.");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        alert("Login successful!");
        router.push("/dashboard");
    };

    return (
        <Box sx={loginStyles.root}>
            <Container maxWidth="xs">
                <Paper elevation={8} sx={loginStyles.paper}>
                    <Typography variant="h4" align="center" sx={loginStyles.title}>
                        Login
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={loginStyles.form}>
                        {/* Email */}
                        <TextField
                            label="Email Address" 
                            fullWidth
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={loginStyles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* ✅ Updated Password with toggle */}
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            sx={loginStyles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button type="submit" fullWidth variant="contained" size="large" sx={loginStyles.button}>
                            Login
                        </Button>

                        <Typography sx={loginStyles.switchText}>
                            Don't have an account?{" "}
                            <Link
                                component="button"
                                onClick={() => router.push("/signup")}
                                underline="hover"
                                sx={loginStyles.link}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
