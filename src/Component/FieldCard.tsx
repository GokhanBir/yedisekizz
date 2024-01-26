import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
import LinkUI from "@mui/material/Link"
//import Link from '@mui/material/Link';

import img from "../Image/halısaha.jpg";
type dataProp={
  id:string,
  city:string,
  plaka:string,
  ilce:string,
  kapali:boolean,
  isim:string,
  adres:string,
  harita:string,
  children: React.ReactNode;
}


export const FieldCard = (props:dataProp) => {
  const id=props.id;
  return (
    <Card variant="outlined" >
      <Grid container spacing={3} sx={{ p: "10px" }}>
        <Grid item xs={4} sx={{ pl: "10px" }}>
          <Link to={`../result/${id}`} relative="path" target="_blank" >
            <CardMedia
              sx={{ height: "200px", weight: "200px" }}
              image={img}
              title="halı saha"
            />
          </Link>
        </Grid>
        <Grid item xs={8} direction="column" container  /* sx={{ backgroundColor: "blue"}} */ >
          <Grid item xs={6}>
            <Link to={`../result/${id}`} relative="path" target="_blank">{props.isim}</Link>
          </Grid>
          {/*           <Grid item xs={6}>
            BİLGİLER2
          </Grid> */}
          <Grid item xs={6}>
            {props.adres}
          </Grid>
          {/*           <Grid item xs={6}>
            BİLGİLER4
          </Grid> */}
        </Grid>
        <Grid item xs={8} direction="column" container /* s */>
          <Grid item>
            {props.kapali? "KAPALI" : "AÇIK"}
          </Grid>
{/*           <Grid item>
            -SICAK VE SOĞUK İÇECEK İKRAMI
          </Grid>
          <Grid item>
            -KRAMPON & ELDİVEN KİRALAMA
          </Grid> */}
          <Grid item>
            -Son 2 gün kala iptallerde %50 kesinti uygulanır
          </Grid>
          <Grid item>
            -Son gün iptallerde iade uygulanmaz.
          </Grid>
        </Grid>
        <Grid item xs={4} justifyContent="flex-end" container  /* sx={{ backgroundColor: "pink" }} */>
          <Grid item  >
          <Link to={`../result/${id}`} relative="path" target="_blank" ><LinkUI underline="none"><Button variant="contained">Rezervasyon Yap</Button></LinkUI></Link>
          </Grid>
        </Grid>
      </Grid>
    </Card>

  )
}
