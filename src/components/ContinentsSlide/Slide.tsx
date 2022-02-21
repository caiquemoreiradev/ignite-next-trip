import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex } from '@chakra-ui/react';
import { SlideItem } from './SlideItem';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slide() {
    return (
        <Flex height='400' p='8' m='8'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                <SwiperSlide>
                    <SlideItem title='Europa' description='O continente mais antigo.' image='https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80' />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem title='América do Norte' description='O continente com as praias mais paradisiacas' image='https://images.unsplash.com/photo-1606117329626-6e0469d76dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80' />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem title='América do Sul' description='A gastronomia que agrada todos os paladares' image='https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80' />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem title='Ásia' description='A arquitetura milenar que ainda enche os olhos' image='https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80' />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem title='África' description='Da savana as festas típicas, uma aventura completa' image='https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80' />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem title='Oceania' description='O continente mais antigo.' image='https://images.unsplash.com/photo-1595263187083-1334b774dfb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80' />
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}