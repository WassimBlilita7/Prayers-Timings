/* eslint-disable no-unused-vars */
import React from 'react';
import Grid from '@mui/material/Grid2';
import { Divider, FormControl, InputLabel, MenuItem, Stack } from '@mui/material';
import Prayers from './Prayers';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState , useEffect } from 'react';

const MainContent =  () => {
  const getTimings = async ()=>{
    const response = await axios.get("https://api.aladhan.com/v1/timingsByCity?country=DZ&city=SETIF");
    setTimings(response.data.data.timings);
  }
  useEffect(()=>{
    getTimings();
  },[])
     const [timings , setTimings] = useState({});
  
    const [selectedCity , setSelectedCity] = useState({
      displayName : 'مكة المكرمة',
      apiName : 'Makkah al Mukarramah'
    });

    const avilableCities = [
      {
        displayName : "مكة المكرمة",
        apiName : "Makkah al Mukarramah"
      }, 
      {
        displayName : "القاهرة",
        apiName : "Cairo"

      },
      {
        displayName : "سطيف",
        apiName : "Setif"
      }
    ]



  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  };
  return (
    
    <>
    <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid xs={6}>
            <div>
                <h2>7 نوفمبر 2024</h2>
                <h1>{selectedCity.displayName}</h1>
            </div>
        </Grid>

        <Grid xs={6}>
            <div>
                <h2>متبقي حتى الصلاة</h2>
                <h1>00:10:20</h1>
            </div>

        </Grid>

    </Grid>

    <Divider style={{borderColor : "white" , opacity : "0.1"}}/>

    <Stack direction={'row'} justifyContent={'space-around'} style={{marginTop : '50px'}}>
        <Prayers name = "الفجر" time= {timings.Fajr} image=".\src\assets\Fajr.jpg"/>
        <Prayers name = "الظهر" time= {timings.Duhr} image=".\src\assets\Duhr.jpeg"/>
        <Prayers name = "العصر" time= {timings.Asr} image=".\src\assets\Assr.jpeg"/>
        <Prayers name = "المغرب" time= {timings.Maghrib} image=".\src\assets\Maghreb.jpg"/>
        <Prayers name = "العشاء" time= {timings.Isha} image=".\src\assets\Eisha.jpeg"/>
    </Stack>

    {/*SELECT CITY*/}
    <Stack direction={'row'} justifyContent={'center'} style={{marginTop:"30px"}}>
    <FormControl style={{width:"20%"}}>
        <InputLabel id="demo-simple-select-label">
        <span style={{color:'white'}}>المدينة</span>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Age"
          onChange={handleCityChange}
          sx={{borderColor:"white"}}
        >
          {avilableCities.map((city)=>{
            return(
              // eslint-disable-next-line react/jsx-key
              <MenuItem value={city.apiName}>
                {city.displayName}
              </MenuItem>
            )
          })}
          
          <MenuItem value={{
            displayName : 'مكة المكرمة',
            apiName : 'Makkah al Mukarramah'
          }}>مكة المكرمة</MenuItem>
          <MenuItem value={{
            displayName : "القاهرة",
            apiName : 'Cairo'
          }}>القاهرة</MenuItem>
          <MenuItem value={{
            displayName : "سطيف",
            apiName : 'Setif'
          }}>سطيف</MenuItem>
        </Select>
      </FormControl>

    </Stack>
    
    </>
  );
}

export default MainContent
