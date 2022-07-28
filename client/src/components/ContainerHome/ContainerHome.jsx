import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import StackEcho from '../StackEcho/StackEcho';

function ContainerHome(allEchoes) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
      maxWidth="fixed" 
      sx={{ 
        bgcolor: 'white', 
        height: '65vh', 
        width: '70%', 
        margin: 'auto', 
        marginTop: '2rem',
        paddingTop: '2rem',
        }}>
        Results:
        <StackEcho allEchoes={allEchoes}/>
      </Container>
    </React.Fragment>
  );
}

export default ContainerHome;