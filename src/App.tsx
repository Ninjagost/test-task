import { useQuery, gql } from '@apollo/client';

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
    <div className="">
      
    </div>
  );
}

export default App;
