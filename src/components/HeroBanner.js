import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg:"212px", xs:"70px"},
    ml:{sm:"50px"},
  }}position="relative" p ="20px" >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontsize:{lg:"44px", xs:"40px"}}}>
            sweat smile <br /> and repeat
        </Typography>
        <Typography fontSize="22px" lineheight="35px" mb={3}>
            check out best exercises
        </Typography>
        <Button varaint="contain" href="#exercises"color="error">Explore Exercises</Button>
        <img src="../assets/images/banner.png" alt="banner"  className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner