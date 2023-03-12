import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import Layout from '../Components/Layout/Layout';
import { MenuList } from '../Data/Data';

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:"flex", flexWrap:'wrap', justifyContent:'center',mb:2}}>
          {MenuList.map((menu)=>(        
          <Card sx={{maxWidth:"300px",display:'flex' ,m:2, mb:2}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px',}} 
              component={'img'} 
              src={menu.image} alt={menu.name}/>
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.name}
                  </Typography>
                  <Typography>
                    {menu.description}
                  </Typography>
                </CardContent>             
            </CardActionArea>
          </Card> 
          ))}
        </Box>
    </Layout>
  )
}

export default Menu