import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import useCityStore from './Store';
const CssTextField = styled(TextField)({
    label: {
        fontWeight: "bold",
    },
    '& label.Mui-focused': {
        color: 'black'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
            border: "2px solid"
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            //borderColor: 'blue',
            border: "2px solid black"
        },
    },
});

interface CountryType {
    id: string;
    label: string;
}

const citys: readonly CountryType[] = [
    {
        id: "34",
        label: 'İstanbul'
    },
    {
        id: "6",
        label: 'Ankara'
    },
    {
        id: "35",
        label: 'İzmir'
    }
];



export default function Mainsearch() {
    const navigate=useNavigate();
    const [value,setValue]=React.useState<string>("")
    //const [num,setNum]=React.useState<string>("")
    const handleChange=(event:any,newValue:any,id:any)=>{
    setValue(newValue);

    }

    const final=citys.filter(items=>items.label===value).map(item=>item.id);
    const ids=final[0];

    const addCity=useCityStore((state)=>state.addCity);
    addCity(value);


    return (
        <>
        <Box sx={{ padding: "15px" }}>

            <Autocomplete
            inputValue={value}
            onInputChange={handleChange}
            id="country-select-demo"
            sx={{ width: 300 }}
            options={citys}
            autoHighlight
            renderInput={(params) => (
                <CssTextField
                {...params}
                label="Şehir seçiniz"
                
                />
                
                )}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        // Prevent's default 'Enter' behavior.
                        event.defaultPrevented=true;
                        navigate("results")
                    }
                }}
                />
           
        </Box>


                </>
    );
}



