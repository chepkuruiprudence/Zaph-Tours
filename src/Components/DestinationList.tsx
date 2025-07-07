import ItemData from '../Data/Destinationdata'
import DestinationCard from './DestinationCards'
import { Box, Grid } from '@mui/material'

const DestinationList = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f4f4f4', marginTop: 4 }}>
      <Grid container spacing={4} sx ={{ justifyContent: 'center' }}>
        {ItemData.map((item, index) => (
          <Grid  key={index}>
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

export default DestinationList