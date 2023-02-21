import { GET_COUNTRIES } from './queries/getCountries';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CountryCard from './components/CountryCard';




function App() {

  const [filterValue, setFilterValue] = useState('')

  const handleChange = (e: any) => {
    setFilterValue(e.target.value)
  }

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.countries);
  
  return (
    <Box display="flex" flexDirection="column" gap="15px" alignItems="center">
        <input 
          type="text" 
          onChange={handleChange} 
          placeholder="Пожалуйста вводите только заглавные буквы пр:RU" 
          style={{width:"400px", height:"20px"}} 
        />
      <Box 
        display="flex" 
        gap="15px" 
        flexWrap="wrap" 
        justifyContent="center"
      >  
        {
          filterValue? (
            data.countries.filter((item: any) => item.code == filterValue).map((item: any) => (
              <div key={item.code}>
                <CountryCard 
                  code={''} 
                  emoji={item.emoji} 
                  name={item.name} 
                  capital={item.capital} 
                  continent={item.continent} 
                  currency={item.currency} 
                  languages={item.languages} 
                  phone={item.phone}
                />
              </div>
            ))
          ) : (
          data.countries.map((item: any) => (
            <div key={item.code}>
              <CountryCard 
                code={''} 
                emoji={item.emoji} 
                name={item.name} 
                capital={item.capital} 
                continent={item.continent} 
                currency={item.currency} 
                languages={item.languages} 
                phone={item.phone}
              />
            </div>
          ))) 
        }
      </Box>
    </Box>
  );
}

export default App;
