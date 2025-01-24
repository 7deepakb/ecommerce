import React from 'react'

import FeaturedProducts from './common/FeaturedProducts';
import HeroSlider from './common/HeroSlider';
import Layout from './common/Layout';


const Home = () => {
  return (
    <>
        <Layout>
            <HeroSlider/>
            <FeaturedProducts/>
        </Layout>
    </>
  )
}

export default Home