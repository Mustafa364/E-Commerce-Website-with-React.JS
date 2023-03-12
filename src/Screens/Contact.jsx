import { Box, Table, TableContainer, TableHead, TableRow, Typography,TableCell, TableBody } from '@mui/material';
import React from 'react'
import Layout from '../Components/Layout/Layout';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';



const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:5, ml:10, "& h3": {fontWeight:"bold",mb:2}, "@media (max-width:600px)" : {
        width:'300px',
        ml:2
       }}}>
        <Typography variant="h3">
          This is Contact Page
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus illo sequi, ratione, a maxime quae voluptatibus aperiam libero iusto nam porro iste! Possimus molestiae, quasi eius cupiditate eligendi rem, adipisci temporibus ipsa iure asperiores doloribus ullam quo quisquam ad pariatur, eaque dolorem repellat esse distinctio a? A, et! Dolorem.
        </p>
       </Box>
       <Box sx={{m:2, width: '600px', ml:10, "@media (max-width:600px)" : {
        width:'300px',
        ml:2
       }}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  bgcolor:"black",
                  color:'white',

                }} align='center'>Contact Detalis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <PhoneInTalkIcon sx={{pt:1,}}/> +92-312-45678-90
                </TableCell>            
              </TableRow>
              <TableRow>
                <TableCell>
                <EmailIcon sx={{pt:1,}}/> abc123@email.com
                </TableCell>            
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact