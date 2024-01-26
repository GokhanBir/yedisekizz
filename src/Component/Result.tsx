/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/system';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useParams } from 'react-router-dom';

import InputLabel from "@mui/material/InputLabel";
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//arama sonucu gelen verilerin detaylı sayfası
const itemDataFinal = [

  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football1',
    id: "1",
    city: "İstanbul",
    plaka: "34",
    ilce: "Kadıköy",
    kapali: true,
    isim: "Kardeşler Halı Saha",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/fa0/fussball-table-players-1243639.jpg',
    title: 'Football2',
    id: "2",
    city: "İstanbul",
    plaka: "34",
    ilce: "Kartal",
    kapali: true,
    isim: "Kardeşler Halı Saha 2",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football3',
    id: "3",
    city: "İstanbul",
    plaka: "34",
    ilce: "Pendik",
    kapali: false,
    isim: "Kardeşler Halı Saha 4",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/fa0/fussball-table-players-1243639.jpg',
    title: 'Football4',
    id: "4",
    city: "İstanbul",
    plaka: "34",
    ilce: "Adalar",
    kapali: false,
    isim: "Kardeşler Halı Saha 5",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football5',
    id: "5",
    city: "İstanbul",
    plaka: "34",
    ilce: "Beykoz",
    kapali: true,
    isim: "Kardeşler Halı Saha 6",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/fa0/fussball-table-players-1243639.jpg',
    title: 'Football6',
    id: "6",
    city: "İzmir",
    plaka: "35",
    ilce: "Foça",
    kapali: true,
    isim: "Kardeşler Halı Saha 7",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football7',
    id: "7",
    city: "İzmir",
    plaka: "35",
    ilce: "Bergama",
    kapali: false,
    isim: "Kardeşler Halı Saha 8",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football8',
    id: "8",
    city: "Ankara",
    plaka: "06",
    ilce: "Kazan",
    kapali: true,
    isim: "Kardeşler Halı Saha 10",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football9',
    id: "9",
    city: "Ankara",
    plaka: "06",
    ilce: "Gölbaşı",
    kapali: true,
    isim: "Kardeşler Halı Saha 11",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football9',
    id: "10",
    city: "Ankara",
    plaka: "06",
    ilce: "Sincan",
    kapali: false,
    isim: "Kardeşler Halı Saha 12",
    adres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae molestiae voluptatibus aut provident commodi",
    harita: "google map haritası"
  }

];

const imgData = [

  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football1',
    id: "1",

  },
  {
    img: 'https://images.freeimages.com/images/large-previews/fa0/fussball-table-players-1243639.jpg',
    title: 'Football2',
    id: "2",

  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football3',
    id: "3",

  },
  {
    img: 'https://images.freeimages.com/images/large-previews/fa0/fussball-table-players-1243639.jpg',
    title: 'Football4',
    id: "4",

  },
  {
    img: 'https://images.freeimages.com/images/large-previews/e50/artificial-grass-field-1147018.jpg',
    title: 'Football5',
    id: "5",

  },
  {
    img: 'https://images.freeimages.com/images/large-previews/fa0/fussball-table-players-1243639.jpg',
    title: 'Football6',
    id: "6",

  }

]
const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

export const Result = () => {
  let { id } = useParams();

  console.log("sayfa idsi: " + id);
  //time pick operation state
  const [time, setTime] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };

  //For payment modal examp.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const datam = itemDataFinal.filter(i => i.id === id)

  console.log(time);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "18px", paddingLeft: "2px", height: "max" }}>
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
                  <option value={0}>{datam.map(i => i.city)}</option>
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
                  <option value={0}>{datam.map(i => i.ilce)}</option>

                </NativeSelect>
              </FormControl>
            </Stack>

          </Box>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={7}  >

          {/*ana bölüm */}

          {datam.map(item => (
            <Box sx={{ pb: "25px" }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={0.5}
              >
                <p>{item.isim}</p>
                <p>{item.adres}</p>
                {/* HARİTa
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6022.533917515469!2d39.64482634159506!3d40.997529782130705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643fcc08b95e23%3A0x971d73d6e184bdf1!2s%C5%9Eenol%20G%C3%BCne%C5%9F%20Spor%20Kompleksi%20Akyaz%C4%B1%20Stadyumu!5e0!3m2!1str!2str!4v1685624936439!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    */}
                <p><a href="">Haritayı Göster</a></p>

              </Stack>
              <ImageList sx={{ height: 800 }} cols={3} rowHeight={164}>
                {imgData.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <Grid container spacing={2}>
                <Grid item xs={6} >
                  <Stack>
                    1-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, earum?
                  </Stack>
                  <Stack>
                    2-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, earum?
                  </Stack>
                  <Stack>
                    3-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, earum?
                  </Stack>
                </Grid>
                <Grid item xs={6} justifyContent="center" alignItems="center" container >
                  <Stack direction="row" spacing={3}  justifyContent="center" alignItems="flex-end" >
                    <FormControl sx={{ width: "150px" }}>
                      <Select
                        value={time}
                        onChange={handleChange}
                        displayEmpty
                      >
                        <MenuItem value="">Saatler</MenuItem>
                        <MenuItem value={10}>10:00</MenuItem>
                        <MenuItem value={11}>11:00</MenuItem>
                        <MenuItem value={12}>12:00</MenuItem>
                        <MenuItem value={13}>13:00</MenuItem>
                        <MenuItem value={14}>14:00</MenuItem>
                        <MenuItem value={15}>15:00</MenuItem>
                        <MenuItem value={16}>16:00</MenuItem>
                        <MenuItem value={17}>17:00</MenuItem>
                        <MenuItem value={18}>18:00</MenuItem>
                        <MenuItem value={19}>19:00</MenuItem>
                        <MenuItem value={20}>20:00</MenuItem>
                        <MenuItem value={21}>21:00</MenuItem>
                        <MenuItem value={22}>22:00</MenuItem>
                        <MenuItem value={23}>23:00</MenuItem>
                        <MenuItem value={24}>24:00</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                          <DatePicker
                            label="Tarih Seçiniz"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                      
                    </FormControl>
                    <Button variant="contained" onClick={handleOpen} >Rezervasyon Yap</Button>
                    {/*ÖDEME SAYFASI İÇİN GEÇİCİ ÖRNEK YÖNLENDİRME*/}
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={modalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          ÖDEME
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {time === "" ? "Lütfen Rezervasyon İçin Saat Seçiniz" : `Seçilen saat ${time}:00 Ödeme Sayfasına Yönlendirilecek...`}
                        </Typography>
                      </Box>
                    </Modal>
                  </Stack>
                </Grid>

              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}



