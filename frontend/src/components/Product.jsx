import React, { useState } from 'react'

import Layout from './common/Layout';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ProductImgOne from '../assets/images/Mens/men/five.jpg'
import ProductImgTwo from '../assets/images/Mens/men/six.jpg'
import ProductImgThree from '../assets/images/Mens/men/seven.jpg'

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
        <div className='container product-detail'>
            <div className='row'>
                <div className='col-md-12'>
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol class='breadcrumb'>
                            <li class="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="breadcrumb-item">
                                <Link to="/shop" aria-current="page">Shop</Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Product title
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-md-5'>
                    <div className='row'>
                        <div className='col-2'>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    direction={`vertical`}
                                    spaceBetween={10}
                                    slidesPerView={6}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper mt-2"
                                >         
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={ProductImgOne} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={ProductImgTwo} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={ProductImgThree} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='col-10'>
                            <Swiper
                                style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                                }}
                                loop={true}
                                spaceBetween={0}
                                navigation={true}
                                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                                >
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={ProductImgOne} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={ProductImgTwo} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={ProductImgThree} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>           
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <h2>Product title</h2>
                    <div className='price h3 py-3'>
                        €20
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing <br />
                        Duis ipsum est, imperdiet eu sem a,<br />
                        ultrices pharetra augue
                    </div>
                    <div className='add-to-cart mt-4'>
                        <button className='btn btn-primary text-uppercase'>Add To Cart</button> 
                    </div>

                    <hr />

                    <div>
                        <strong>SKU:</strong>sauhgshgh4324
                    </div>
                </div>

            </div>
            <div className='row pb-5'>
                <div className='col-md-12'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Description">
                            Tab content for Description
                        </Tab>
                        <Tab eventKey="profile" title="Reviews">
                            Tab content for Reviews
                        </Tab>
                    </Tabs>            
                </div>
            </div>
        </div>

    </Layout>
  )
}

export default Product