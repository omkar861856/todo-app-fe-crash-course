import React from 'react'
import { useState, useEffect } from 'react'
import { useAsyncError } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { countriesApi } from './api'

import { useNavigate } from 'react-router-dom';


const CountriesPage = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{

        async function fetchCountries() {

            try {

                const result = await fetch(countriesApi)
                const resultJson = await result.json();
                setCountries(resultJson);
                console.log(resultJson)
                
            } catch (error) {

                console.log(error)                
            }


            
        }

        fetchCountries()

    },[])
  return (
    <div>
        {countries.length!==0?<div id="countriesDiv">
            {
                countries.map((e)=>{
                    return(
                        <Country key={e.flag} country={e}/>
                    )
                })
            }
        </div>:<h1>Loading...</h1>}
    </div>
  )
}

export default CountriesPage


function Country({country}){
    const navigate = useNavigate();
    function learnMore(){
        navigate(`/country/${country.area}`)
    }
    return(
    <Card className='countryCard' sx={{ width: 345, margin: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={country.flags.png}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.altSpellings[1]}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Capital: {country.capital}
            <hr/>
            Area: {country.area} sq.kms
            <hr />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button onClick={learnMore} size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}