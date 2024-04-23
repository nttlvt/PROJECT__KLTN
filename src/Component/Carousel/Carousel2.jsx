import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
export const Carousel2 = () => {
    return (
        <div className="container">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                Autoplay
            >
                <SwiperSlide className="">
                    <div >
                        <div className="carousel__flex">
                            <div className=" d-flex justify-center items-center p-8">
                                <div>
                                    <h2 className="banner-heading">
                                        LÊN ĐỜI ĐIỆN THOẠI MUA CŨ ĐỔI MỚI
                                    </h2>
                                    <button className="banner__btn">
                                        MUA NGAY
                                    </button>
                                </div>
                            </div>
                            <img src="public/image/redme-note-13-sliding.webp" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="carousel__flex ">
                            <div className="p-8">
                                <div>
                                    <h2 className="banner-heading">
                                        LAPTOP ASUS TUF GAMING A15
                                    </h2>
                                    <button className="banner__btn">
                                        MUA NGAY
                                    </button>
                                </div>
                            </div>
                            <img src="public/image/Asus_sliding.2.webp" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="carousel__flex">
                            <div className=" d-flex justify-center items-center p-8">
                                <div>
                                    <h2 className="banner-heading">
                                        LÊN ĐỜI ĐIỆN THOẠI MUA CŨ ĐỔI MỚI
                                    </h2>
                                    <button className="banner__btn">
                                        MUA NGAY
                                    </button>
                                </div>
                            </div>
                            <img src="public/image/iphone-15-17390-sliding.webp" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


    )
}
