// import { useLocation } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react"

import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules'

import slide_image1 from './sub-componentes/imagens-slide/educacao-ods.jpeg'
import slide_image2 from './sub-componentes/imagens-slide/saude-ods.jpg'
import slide_image3 from './sub-componentes/imagens-slide/inovacao-ods.jpg'

import { MoveRight, MoveLeft } from 'lucide-react';

function Navbar(){
    register();
    return(
        <>
            <div className="w-full h-[100vh] p-24 flex items-center justify-between overflow-hidden">
                <div className='w-full flex flex-col bg-slate-100'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-3xl text-slate-500 z-10 p-12 relative sm:text-1xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-9xl'>
                            Sessions
                        </h2>
                    </div>
                    <Swiper
                    effect={'coverFlow'} 
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    
                    slidesPerView={'auto'}
                    coverFlowEffect={
                        {
                            rotate: 15,
                            streetch: 50,
                            depth: 100,
                            modifier: 1,
                            }
                            
                        }
                        spaceBetween={-500}
                        pagination={{el:'.swiper-pagination', clickable:true}}
                        navigation={{
                            nextEl:'.swipper-button-next',
                            prevEl:'.swipper-button-prev',
                            clickable: true
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="max-w-full flex flex-col items-center justify-center px-20 h-full"
                        >
                        <SwiperSlide>
                            <a href='/#educaco'>
                                <img className="w-1/3 h-1/3 rounded-lg object-cover" src={slide_image1} alt='educação-ods' />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='/#saude'>
                                <img className="w-1/3 h-1/3 rounded-lg object-cover" src={slide_image2} alt='saude-ods' />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='/#inovacao'>
                                <img className="w-1/3 h-1/3 rounded-lg object-cover" src={slide_image3} alt='inovação-ods' />
                            </a>
                        </SwiperSlide>

                        <div className=" flex w-full  mt-4 justify-between items-center">
                            <div className=" self-start swipper-button-prev slider-arrow">
                                <MoveLeft className='w-12 h-12 text-green-400' />
                            </div>

                            <div className=" self-center swiper-pagination"></div>

                            <div className=" self-end w-14 h-14 swipper-button-next slider-arrow">
                                <MoveRight className='w-12 h-12 text-green-400' />
                            </div>
                        </div>
                        
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Navbar