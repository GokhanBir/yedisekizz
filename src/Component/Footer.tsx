import { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import "../css/style.css";


export const Footer = () => {
  const topButtonRef = useRef<HTMLAnchorElement>(null);
  //go to up button
  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 200) {

        if (topButtonRef.current != null)
          topButtonRef.current.style.display = "block";
      } else {
        if (topButtonRef.current != null)
          topButtonRef.current.style.display = "none";
      }
    };

  }, []);

  function go2Top(event: React.SyntheticEvent) {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Box sx={{ backgroundColor: "#829460", bottom: 0, left: 0, right: 0}}>
      <Typography sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }} align="center" variant="h6" component="div" >
        App Footer
      </Typography>
      <a onClick={go2Top} ref={topButtonRef} id="topButton"><span className="arrow"></span></a>
    </Box>

  )
}
