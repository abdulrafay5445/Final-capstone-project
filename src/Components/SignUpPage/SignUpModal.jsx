import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import LoginModal from '../Resturant/LoginModal/LoginModal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

const SignUpModal = ({ open, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [openLogin, setOpenLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        // Save user data to localStorage on sign-up
        localStorage.setItem('user', JSON.stringify(data));

        // Show success alert
        alert('Sign up successful! Please log in.');

        // Open the login modal
        setOpenLogin(true);

        // Close the sign-up modal
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    backgroundColor: '#ffe4e1', // Soft pink background
                    borderRadius: '12px',
                    padding: 4,
                    boxShadow: 4,
                    position: 'relative',
                }}
            >
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
                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        color: '#e21b70',
                        fontWeight: 'bold',
                        marginBottom: 3,
                    }}
                >
                    Welcome!  <br />Sign up to get started.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        sx={{
                            marginBottom: 2,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        {...register('email', { required: 'Email is required' })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{
                            marginBottom: 2,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                        }}
                    />
                    <TextField
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={{
                            marginBottom: 2,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                        }}
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
                        sx={{
                            mt: 2,
                            backgroundColor: '#e21b70',
                            '&:hover': { backgroundColor: '#c2185b' },
                            fontWeight: 'bold',
                            borderRadius: '8px',
                        }}
                    >
                        Sign Up
                    </Button>
                    <Typography
                        variant="body2"
                        align="center"
                        color="text.secondary"
                        sx={{ marginTop: 3, fontSize: '14px' }}
                    >
                        By signing up, you agree to our{' '}
                        <span
                            style={{
                                cursor: 'pointer',
                                color: '#e21b70',
                                fontWeight: 'bold',
                            }}
                        >
                            Terms and Conditions
                        </span>{' '}
                        and{' '}
                        <span
                            style={{
                                cursor: 'pointer',
                                color: '#e21b70',
                                fontWeight: 'bold',
                            }}
                        >
                            Privacy Policy
                        </span>.
                    </Typography>
                    <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
                </form>
            </Box>
        </Modal>
    );
};

export default SignUpModal;