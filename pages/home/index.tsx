import { Box, Grid } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = ()=> {
  return (
    <Box w="100%" h="100%" bgColor="tealLight">
        <Grid >
            
            <Image src="homeImage.png" alt="homeImage" height="50rem" width="50rem"/>
        </Grid>
    </Box>
  )
}

export default Home
