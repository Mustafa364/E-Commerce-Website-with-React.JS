import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: "#1A1A19", color: 'white', p: 3 }}>
                <Box
                    sx={{
                        my: 3,
                        "& svg": {
                            fontSize: '60px',
                            cursor: 'pointer',
                            mr: 2
                        },
                        "& svg:hover": {
                            color: '#2979ff',
                            transform: 'translateX(5px)',
                            transition: 'all 400ms',
                        }
                    }}>
                    <FacebookIcon />
                    <GitHubIcon />
                    <TwitterIcon />
                </Box>
                <Typography variant='h5'
                    sx={{
                        "@media (max-width:600px)":
                            { fontSize: '1rem', }
                    }}>
                    All Rights Reserved &copy; MG Dev
                </Typography>
            </Box>
        </>
    )
}

export default Footer