import Image1 from './sub-componentes/imagens-slide/imagem-ita.jpeg'
import Image2 from './sub-componentes/imagens-slide/imagem-unesp.png'
import Image3 from './sub-componentes/imagens-slide/imagem-unifesp.png'
import Image4 from './sub-componentes/imagens-slide/imagem-fatec.jpg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from "swiper/react";

function CarroselEscolas(){
    register()
    return(
        <>
            <div className="w-full h-[10%] p-10 mb-10 flex items-center justify-center overflow-hidden">
                <div className='w-full h-full flex flex-col'>
                    <div className='flex h-1/2 justify-center items-center'>
                        <h2 className='text-xl text-red-500 z-10 p-12 relative'>
                            Universidades públicas em <strong>São José dos Campos</strong>
                        </h2>
                    </div>
                    <div className='h-1/2'>
                        <Swiper
                            effect={'coverFlow'} 
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            autoplay={{ delay: 2000 }}
                            spaceBetween={-350}
                            loopAdditionalSlides={1}
                            className="w-2/4" 
                            >
                            <SwiperSlide>
                                <a href='http://www.ita.br' target='_blanck'>
                                    <img className="w-32 h-32 rounded-lg bg-clip-border bg-cover" src={Image1} alt='ita' />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www2.unesp.br' target='_blanck'>
                                    <img className="w-32 h-32 rounded-lg bg-clip-border bg-cover" src={Image2} alt='unesp' />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www.unifesp.br' target='_blanck'>
                                    <img className="w-32 h-32 rounded-lg bg-clip-border bg-cover" src={Image3} alt='unifesp-ods' />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www.vestibularfatec.com.br/home/' target='_blanck'>
                                    <img className="w-32 h-32 rounded-lg bg-clip-border bg-cover" src={Image4} alt='fatec' />
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarroselEscolas
