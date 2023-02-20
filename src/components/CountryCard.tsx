import { Card, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhoneIcon from '@mui/icons-material/Phone';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

interface CountryCardProps {
  emoji: string;
  name: string;
  capital: string;
  code: string;
  currency: string;
  phone: string;
  continent: any;
  languages: any;
}

const CountryCard: React.FC<CountryCardProps> = (props) => {

  return (
    <Card sx={{ padding:"7px", maxWidth:"400px" }} >
      <CardContent sx={{ display:"flex", justifyContent:"space-between" }}>
        <Box>
          {props.emoji} 
        </Box>
        <Box>
          <Typography variant='h5'>{props.name}</Typography>
          <Typography>{props.capital}</Typography>
        </Box>
        <Typography variant="h6" color="initial">{props.continent.name}</Typography>
      </CardContent> 
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap="5px">
            <PhoneIcon/>
            <Typography variant="h6" color="initial">{props.phone}</Typography>    
          </Box>
          <Box display="flex" gap="5px">
            <AttachMoneyIcon/>
            <Typography variant="h6" color="initial">{props.currency}</Typography>
          </Box>
          <Box display="flex" gap="5px">
            <RecordVoiceOverIcon/>
            {props.languages.map((item: any) => (
              <Box key={item.name} >
                <Typography variant="h6" color="initial">
                  {item.native}
                </Typography>
              </Box>
            ))}
          </Box>
          
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;