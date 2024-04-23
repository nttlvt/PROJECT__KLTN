import React, { useEffect, useState } from 'react'
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import data from './data.json'
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';

export const Sale = () => {

    const [product, setProduct] = useState([])
    const fetchProduct = async () => {
        const result = await axios.get('http://localhost:8080/getAllProduct')
        setProduct(result.data)
    }
    const getImageUrl = (img) => "data:image/jpeg;base64," + img

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className=" sale__product ">

            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    product.map((value) => {
                        return <SwiperSlide className='sale card h-auto cursor-pointer'>
                            <div className="sale__card ">
                                <img className='h-[200px] rounded-t-[14px]' src={getImageUrl(value.productImg)} alt="" />
                                <div className="card-body grid grid-row justify-center">
                                    <h3 className="text-white text-[18px] text-center font-normal h-[50px] mt-2">{value.productName}</h3>
                                    <p className=" text-[#ff9921] text-center font-bold text-[18px]">{new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 2,
                                    }).format(value.productPrice)}</p>
                                    <div className="flex items-center justify-center mt-1 mb-2">
                                        <p className="text-[#999] text-center line-through mx-[7px]">{new Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                            minimumFractionDigits: 2,
                                        }).format(value.productPrice)}</p>
                                        <span className="p-[3px] font-bold bg-[red] text-white text-[14px] rounded">-50%</span>
                                    </div>
                                    <div>
                                        <div className='relative'>
                                            <img className="absolute top-[-20px] left-[-9px] z-1" src="./image/fs-iconfire.webp" alt="..." />
                                            <div className="progress mt-2 relative" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                {/* <div className="progress-bar bg-warning text-dark" style={{ width:`$(Math.floor(Math.random() * 50) + 1) / 50 + '%'`  }}>Còn {Math.floor(Math.random() * 50) + 1}</div> */}
                                                <div className="progress-bar bg-warning text-dark text-center" style={{ width: `${(Math.floor(Math.random() * 50) + 1) / 50 * 100}%` }}>
                                                    Còn {Math.floor(Math.random() * 50) + 1}
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>

                    })
                }


            </Swiper>

        </div >

    )
}
