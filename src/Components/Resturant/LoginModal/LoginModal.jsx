import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import SignUpModal from '../../SignUpPage/SignUpModal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

const LoginModal = ({ open, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [openSignUp, setOpenSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        // Handle form submission (e.g., login logic)
        console.log(data);
        alert("Login successful!"); // Alert message after successful login
        handleClose(); // Close the modal after submission
    };

    const openSignUpModal = () => {
        setOpenSignUp(true); // Set the SignUp modal to open
    };

    return (
        <>
            <Modal open={open} onClose={handleClose} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
                <Box sx={{
                    position: 'relative',
                    bgcolor: '#ffe4e1', // Soft pink background
                    padding: 4,
                    boxShadow: 24,
                    borderRadius: 2,
                    width: "100%",
                    maxWidth: "400px",
                }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: '#e21b70',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography sx={{  color: '#e21b70',
                        fontWeight: 'bold',
                        marginBottom: 2,}} variant="h6" mb={2} align="center">Welcome!</Typography>
                    <Typography sx={{  color: '#e21b70',
                        fontWeight: 'bold',
                        marginBottom: 2,}} variant="subtitle1" mb={3} align="center">
                        Please log in to your account.
                    </Typography>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            label="Email"
                            {...register('email', { required: 'Email is required' })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            margin="normal"
                            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
                        />
                        <TextField
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            {...register('password', { required: 'Password is required' })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            margin="normal"
                            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, backgroundColor: '#e21b70', '&:hover': { backgroundColor: '#c2185b' } }}
                        >
                            Log In
                        </Button>
                        <Typography variant="body2" mb={2} mt={2} align="center" color="text.secondary">
                            By signing up, you agree to our <span style={{ cursor: 'pointer', color: '#e21b70', fontWeight: 'bold' }}>Terms and Conditions</span> and <span style={{ cursor: 'pointer', color: '#e21b70', fontWeight: 'bold' }}>Privacy Policy</span>.
                        </Typography>
                        <Button
                            fullWidth
                            sx={{ mt: 1 ,  color: '#C2185B', fontWeight:'bold', border:'2px solid #C2185B ' }}
                            onClick={openSignUpModal} // Open the SignUp modal
                        >
                            Don't have an account? Sign Up
                        </Button>
                    </form>
                </Box>
            </Modal>

            {/* SignUp Modal */}
            <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)} />
        </>
    );
};

export default LoginModal;