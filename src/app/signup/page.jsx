"use client";
import { Box, Button, Container, TextField, Typography, Avatar, Paper } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object({
    name: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

export default function SignupPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log("Signup Data:", data);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, mt: 8 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar sx={{ bgcolor: "secondary.main", mb: 2 }}>
                        <PersonAddAltIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                        Create Account
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            {...register("name")}
                            label="Full Name"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            {...register("email")}
                            label="Email Address"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            {...register("password")}
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <TextField
                            {...register("confirmPassword")}
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                        />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
