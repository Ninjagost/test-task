import { useQuery, gql } from '@apollo/client';
import Box from '@mui/material/Box';
import CountryCard from './components/CountryCard';

const GET_COUNTRIES = gql`
query {
  countries(filter: {code: {in: "UZ"}}) {
		code
    name
    native
    phone
    capital
    currency
    languages {
     	name
      native
      rtl
    }
    continent {
			name
    }
    emoji
    states {
			name
    }
  }
}
`

function App() {

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.countries);
  
  return (
    <Box>
      {data.countries.map((item: any) => (
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
      ))}
    </Box>
  );
}

export default App;
