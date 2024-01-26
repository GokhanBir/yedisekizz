import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import { FieldCard } from "./FieldCard";
import useCityStore from './Store'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));
const customerData=[
    {
      id:"1",
      city:"İstanbul",
      plaka:"34",
      ilce:"Kadıköy",
      kapali:true,
      isim:"Kardeşler Halı Saha",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },
    {
      id:"2",
      city:"İstanbul",
      plaka:"34",
      ilce:"Kartal",
      kapali:true,
      isim:"Kardeşler Halı Saha 2",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },

    {
      id:"3",
      city:"İstanbul",
      plaka:"34",
      ilce:"Pendik",
      kapali:false,
      isim:"Kardeşler Halı Saha 4",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },
    {
      id:"4",
      city:"İstanbul",
      plaka:"34",
      ilce:"Adalar",
      kapali:false,
      isim:"Kardeşler Halı Saha 5",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },
    {
      id:"5",
      city:"İstanbul",
      plaka:"34",
      ilce:"Beykoz",
      kapali:true,
      isim:"Kardeşler Halı Saha 6",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    }, 
    {
      id:"6",
      city:"İzmir",
      plaka:"35",
      ilce:"Foça",
      kapali:true,
      isim:"Kardeşler Halı Saha 7",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },
    {
      id:"7",
      city:"İzmir",
      plaka:"35",
      ilce:"Bergama",
      kapali:false,
      isim:"Kardeşler Halı Saha 8",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },
    {
      id:"8",
      city:"Ankara",
      plaka:"06",
      ilce:"Kazan",
      kapali:true,
      isim:"Kardeşler Halı Saha 10",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },  
    {
      id:"9",
      city:"Ankara",
      plaka:"06",
      ilce:"Gölbaşı",
      kapali:true,
      isim:"Kardeşler Halı Saha 11",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    },
    {
      id:"10",
      city:"Ankara",
      plaka:"06",
      ilce:"Sincan",
      kapali:false,
      isim:"Kardeşler Halı Saha 12",
      adres:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
      harita:"google map haritası"
    }
    
  ];



export const Results = () => {

  
    const [checkedClose, setCheckedClose] = React.useState(false);
/*     const [checkedOpen,setCheckedOpen]=React.useState(true); */

    const handleChangeClose = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedClose(event.target.checked);
    };

/*     const handleChangeOpen=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCheckedOpen(event.target.checked)
    } */

/*     console.log("kapalı durum: "+checkedClose);
    console.log("açık durum: "+checkedOpen); */

    const city=useCityStore((state)=>state.city);

    console.log(city);

    const datam=customerData.filter(i=>i.city===city);

    console.log(datam);
    return (
        <>
            <Box sx={{ flexGrow: 1, paddingTop: "18px", paddingLeft: "2px",height:"max" }}>
                <Grid container spacing={2} >
                    <Grid item xs={3} sx={{ bgcolor: "whitesmoke" }}>
                        <Box>
                            <Stack>ARAMA</Stack>
                            <Stack>
                                <FormControl sx={{ m: 1, minWidth: 80 }} variant="standard">
                                    <InputLabel htmlFor="demo-customized-select-native">Şehir</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        defaultValue={0}
                                        input={<BootstrapInput />}

                                    >
                                        <option value={0}>{city}</option>
{/*                                         <option value={10}>İstanbul</option>
                                        <option value={21}>Ankara</option>
                                        <option value={22}>İzmir</option>
 */}
                                    </NativeSelect>
                                </FormControl>
                            </Stack>
                            <Stack>
                                <FormControl sx={{ m: 1, minWidth: 80 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">İlçe</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        defaultValue={0}
                                        input={<BootstrapInput />}

                                    >
                                        <option value={0}>İlçe Seçiniz</option>
                                        {datam.map((item)=>(
                                          <option value={item.id} key={item.id}>{item.ilce}</option>
                                        ))}
{/*                                         <option value={10}>Kartal</option>
                                        <option value={21}>kadıköy</option>
                                        <option value={22}>İaazmir</option> */}
                                    </NativeSelect>
                                </FormControl>
                            </Stack>
                            <Stack>
                                <Stack>Özellikleri</Stack>
                                <FormControl>
                                    <FormGroup row>
                                        <FormControlLabel 
                                        control={<Checkbox  onChange={handleChangeClose}/>}
                                        label="Kapalı"
                                        labelPlacement="end"
                                        />
{/*                                         <FormControlLabel 
                                        control={<Checkbox onChange={handleChangeOpen}/>}
                                        label="Açık"
                                        labelPlacement="end"
                                        /> */}
                                    </FormGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={7}  >
                        {/* arama sonuçlarına göre databasede bulunan veriler kart şeklinde geliyor */}
                        <Stack spacing={2} sx={{pb:"5px"}}>                      
{/*                         <FieldCard/>
                        <FieldCard/>
                        <FieldCard/>
                        <FieldCard/>
                        <FieldCard/> */}
                        {/* KAPALI/AÇIK DURUMUNA GÖRE LİSTELEME */}
                        {checkedClose?datam.filter(items=>items.kapali===checkedClose).map((item)=>(<FieldCard id={item.id} city={item.city} plaka={item.plaka} ilce={item.plaka}
                        kapali={item.kapali} isim={item.isim} adres={item.adres} harita={item.harita} key={item.id} children={undefined}/>)):datam.map((item)=>(<FieldCard id={item.id} city={item.city} plaka={item.plaka} ilce={item.plaka}
                          kapali={item.kapali} isim={item.isim} adres={item.adres} harita={item.harita} key={item.id} children={undefined}/>))}

                        </Stack>  
                        {/* <Result/> */}

                    </Grid>
                </Grid>
            </Box>


        </>

    );
};

