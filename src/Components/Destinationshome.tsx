import { Box, Grid } from "@mui/material";
import ItemData from '../Data/Destinationshomelist';
import DestinationCard from './DestinationCards';

const Destinationshome = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f4f4f4', marginTop: 4 }}>
      <Grid container spacing={2} sx={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        padding: 2
      }}>
        {ItemData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <DestinationCard
              img={item.img}
              title={item.title}
              description={item.description}
              pricepergroup={item.pricepergroup}
              priceperindividual={item.priceperindividual}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Destinationshome;
