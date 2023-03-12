import { Box, Typography } from '@mui/material';
import React from 'react'
import Layout from '../Components/Layout/Layout';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:10,
          textAlign:'center',
          p:2,
          "& h3":{
            fontWeight:'bold',
            my:2,
          },
          "& p":{
            textAlign:'justify',
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h3":{
              fontSize:'1.5rem',
            },
          },
          
        }}>
          <Typography variant="h3">
            Welcome To MG Resturant
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non nisi soluta voluptas saepe sapiente accusamus, obcaecati delectus laborum inventore eligendi praesentium voluptatum hic similique perspiciatis possimus labore explicabo iusto repellat atque sunt expedita dolores nostrum? Esse totam sunt qui odit temporibus suscipit voluptatem, quod expedita alias. Dolores, dicta voluptas?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus eum velit labore odio assumenda veritatis tempora incidunt, magnam dignissimos, laborum nesciunt? Eius quam quas dignissimos cupiditate laboriosam iusto et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus sequi cumque quae, nulla consequuntur ipsa unde soluta, iure nostrum explicabo. Impedit eos perferendis maiores accusantium voluptatibus harum corrupti ipsum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non nisi soluta voluptas saepe sapiente accusamus, obcaecati delectus laborum inventore eligendi praesentium voluptatum hic similique perspiciatis possimus labore explicabo iusto repellat atque sunt expedita dolores nostrum? Esse totam sunt qui odit temporibus suscipit voluptatem, quod expedita alias. Dolores, dicta voluptas?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus eum velit labore odio assumenda veritatis tempora incidunt, magnam dignissimos, laborum nesciunt? Eius quam quas dignissimos cupiditate laboriosam iusto et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus sequi cumque quae, nulla consequuntur ipsa unde soluta, iure nostrum explicabo. Impedit eos perferendis maiores accusantium voluptatibus harum corrupti ipsum.
          </p>
        </Box>
    </Layout>
  )
}

export default About