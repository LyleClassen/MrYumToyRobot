import React from 'react';
import { AppBar as MuiAppBar, Container, styled } from '@mui/material';
import mrYumLogo from 'assets/logo.svg';

const LogoLink = styled('img')({
  '&:hover': {
    filter: 'blur(1px)',
  },
});

const AppBar = () => (
  <MuiAppBar position="static" color="transparent" elevation={0}>
    <Container
      sx={{
        padding: '10px 0',
      }}
    >
      <a href="https://www.mryum.com/" target="_blank" rel="noreferrer">
        <LogoLink alt="Mr Yum Logo" src={mrYumLogo} height={52} />
      </a>
    </Container>
  </MuiAppBar>
);

export default AppBar;
