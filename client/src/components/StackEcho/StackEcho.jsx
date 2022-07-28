import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function StackEcho(allEchoes) {
    const newEchoes = allEchoes.allEchoes.allEchoes
        
  return (
    <Box sx={{ width: '60%', margin: 'auto' }}>
      <Stack spacing={2}>
        {newEchoes && newEchoes.slice(0).reverse().map((echo, index) => (
            <Item key={index} sx={{ border: '1px solid #e0e0e0' }}>
                {echo.text}
                {echo.palindrome === true ? <p style={{color:'green'}}>This is a palindrome</p> : null}
            </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default StackEcho;