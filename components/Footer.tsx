import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        px: 20,
        textAlign: 'center',
        backgroundColor: '#1d2b35',
        color: 'white',
        mt: 8,
      }}
    >
      <Typography
        variant="body1"
        component="p"
      >
        Copyright 2024 - All Rights Reserved.
      </Typography>
    </Box>
  );
};





