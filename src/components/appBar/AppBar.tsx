import React from 'react';
import { AppBar as MuiAppBar, Container, styled } from '@mui/material';
import mrYumLogo from 'assets/logo.svg';

const LogoLink = styled('img')({
  '&:hover': {
    filter: 'blur(1px)',
  },
});

const AppBar = () => (
  <MuiAppBar position="relative" color="transparent" elevation={0}>
    <Container
      component="header"
      sx={{
        padding: '12px 0',
        height: '52px',
      }}
    >
      <a href="https://www.mryum.com/" target="_blank" rel="noreferrer" data-cy="mr-yum-link">
        <LogoLink alt="Mr Yum Logo" src={mrYumLogo} height={52} />
      </a>
    </Container>
  </MuiAppBar>
);

export default AppBar;
