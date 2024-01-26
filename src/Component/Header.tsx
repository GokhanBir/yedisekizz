import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor:"#829460" }} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            yedisekiz
          </Typography>
          <Button color="inherit">Giriş Yap</Button>
          <Button color="inherit">Kayıt Ol</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}