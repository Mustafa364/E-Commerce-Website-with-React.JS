import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import '../Styles/Home.css'

const Home = () => {
  return (
    <Layout>
         <div className="home" style={{backgroundImage:`url(https://png.pngtree.com/back_origin_pic/03/77/70/7fac46f6c330e7a42b72903f12334ca6.jpg)`}}>
          <div className="headercontainer">
            <h1>Food Website</h1>
            <p>Best Food in Karachi</p>
            <Link to="/menu">
            <button>
              Order Now
            </button>
            </Link>
          </div>
         </div>
    </Layout>
  )
}

export default Home