import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemData from '../Data/Destinationshomelist';
import DestinationCard from './DestinationCards';

const Destinationshome = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f4f4f4', marginTop: 4 }}>
      <Grid container spacing={2} sx={{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        padding: 2
      }}>
        {ItemData.map((item, index) => (
          <Grid key={index} size={{xs: 12, sm: 6  , md: 4}}>
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
