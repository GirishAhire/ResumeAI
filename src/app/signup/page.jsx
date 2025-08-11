"use client";
import React from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    InputAdornment,
    Link,
} from "@mui/material";
import { Email, Lock, Person } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signupStyles } from "./style";

// ✅ Validation Schema
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export default function SignupPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        // Get existing users or empty array
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        const emailExists = existingUsers.some((user) => user.email === data.email);
        if (emailExists) {
            alert("This email is already registered. Please login instead.");
            return;
        }

        // Add new user
        const updatedUsers = [...existingUsers, data];

        // Save back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        alert("Signup successful!");
        router.push("/login");
    };

    return (
        <Box sx={signupStyles.root}>
            <Container maxWidth="xs">
                <Paper elevation={8} sx={signupStyles.paper}>
                    <Typography variant="h4" align="center" sx={signupStyles.title}>
                        Sign Up
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={signupStyles.form}>
                        {/* Name */}
                        <TextField
                            label="Full Name"
                            fullWidth
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            sx={signupStyles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Email */}
                        <TextField
                            label="Email Address"
                            fullWidth
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={signupStyles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Password */}
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            sx={signupStyles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button type="submit" fullWidth variant="contained" size="large" sx={signupStyles.button}>
                            Sign Up
                        </Button>

                        {/* Switch to Login */}
                        <Typography sx={signupStyles.switchText}>
                            Already have an account?{" "}
                            <Link component="button" onClick={() => router.push("/login")} underline="hover" sx={signupStyles.link}>
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
