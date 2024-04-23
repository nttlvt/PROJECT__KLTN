import React from 'react'
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import data from '../Sale/data.json'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const ListProduct = () => {
    const product = data
    return ( 
        <div className=" w-[70%] m-auto ">
            {/* <h2 className='text-center text-white text-4xl'>iPhone</h2> */}
                <Swiper
                
                    navigation={true}
            
                slidesPerView={4}
                spaceBetween={30}
                // autoplay={{
                //     delay: 5500,
                //     disableOnInteraction: false,
                // }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper p-10 "
            >
                {
                    product.map((value) => {
                        return <SwiperSlide className=' list_product sale card h-auto cursor-pointer hover:bg-[]'>
                            <div className="list__card ">
                                <img src={value.image} alt="..." />
                                <div className="card-body grid grid-row justify-center">
                                    <h3 className="text-white text-[18px] text-center font-normal h-[50px] mt-2">{value.name}</h3>
                                    <p className=" text-[#ff9921] text-center font-bold text-[18px]">{new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 2,
                                    }).format(value.price)}</p>
                                    <div className="flex items-center justify-center mt-1 mb-2">
                                        <p className="text-[#999] text-center line-through mx-[7px]">{value.price}$</p>
                                        <span className="p-[3px] font-bold bg-[red] text-white text-[14px] rounded">- 50%</span>
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
