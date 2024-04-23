import React, { useEffect,useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import data from '../Sale/data.json'
import axios from 'axios';
export const Product = ({ type }) => {

    const [product, setProduct] = useState([])
    const [brand, setBrand] = useState('')
    const fetchProduct = async () => {
        const result = await axios.get(`http://localhost:8080/getProductByBrand/${type}`)
        setProduct(result.data)
    }
    // const fetchBrandById = async () => {
    //     const result = await axios.get(`http://localhost:8080/getProductByBrand/`)
    //     setBrand(result.data)
    // }
    const getImageUrl = (img) => "data:image/jpeg;base64," + img

    useEffect(() => {
        fetchProduct()
        // fetchBrandById()
    }, [])

    return (
        <div className='mt-9'>
            <h2 className='text-center text-white text-4xl'>{type}</h2>
            <Swiper

                navigation={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper mySwiper__product"
            >
                {
                    product.map((val) => {
                        return <SwiperSlide className='card' >
                            <a href="">
                                <img src={getImageUrl(val.productImg) } alt="" />
                                <div className="card-body">
                                    <h1 className="text-center text-white text-lg py-0 px-3 my-3 leading-4">{val.name}</h1>
                                    <h1 className="text-center text-white text-lg py-0 px-3 my-3 leading-4 font-bold">{new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 2,
                                    }).format(val.productPrice)}</h1>
                                </div>
                            </a>



                        </SwiperSlide>
                    })
                }


            </Swiper>
        </div>
    )
}
