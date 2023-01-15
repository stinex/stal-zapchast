
import { useRef } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import styles from './Carousel.module.scss'

import MainBannerOne1920 from '../../../assets/images/home/main-banner-one-1920.png'
import MainBannerOne768 from '../../../assets/images/home/main-banner-one-768.png'
import MainBannerOne375 from '../../../assets/images/home/main-banner-one-375.png'
import ArrowLeft from '../../../assets/images/svg/ArrowLeft'
import ArrowRight from '../../../assets/images/svg/ArrowRight'

const Carousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const pogination = {
        el: '.custom_pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><div class="index">' + '0' + (index + 1) + '</div><div class="dot"></div></div>';
        },
    }

    const swiperInit = (swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
    }

    return (
        <Swiper
            className={styles.carousel}
            slidesPerView={1}
            pagination={pogination}
            onInit={swiperInit}
            modules={[Autoplay, Navigation, Pagination]}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            <SwiperSlide className={styles.carousel_wrapper}>
                <Image src={MainBannerOne1920} className={`${styles.img} lg`} alt='banner' />
                <Image src={MainBannerOne768} className={`${styles.img} md`} alt='banner' />
                <Image src={MainBannerOne375} className={`${styles.img} xs`} alt='banner' />
            </SwiperSlide>
            <SwiperSlide className={styles.carousel_wrapper}>
                <Image src={MainBannerOne1920} className={`${styles.img} lg`} alt='banner' />
                <Image src={MainBannerOne768} className={`${styles.img} md`} alt='banner' />
                <Image src={MainBannerOne375} className={`${styles.img} xs`} alt='banner' />
            </SwiperSlide>
            <SwiperSlide className={styles.carousel_wrapper}>
                <Image src={MainBannerOne1920} className={`${styles.img} lg`} alt='banner' />
                <Image src={MainBannerOne768} className={`${styles.img} md`} alt='banner' />
                <Image src={MainBannerOne375} className={`${styles.img} xs`} alt='banner' />
            </SwiperSlide>
            <SwiperSlide className={styles.carousel_wrapper}>
                <Image src={MainBannerOne1920} className={`${styles.img} lg`} alt='banner' />
                <Image src={MainBannerOne768} className={`${styles.img} md`} alt='banner' />
                <Image src={MainBannerOne375} className={`${styles.img} xs`} alt='banner' />
            </SwiperSlide>

            <div className={`${styles.control} container`}>
                <div className={styles.control_wrapper}>
                    <div className='custom_pagination'></div>
                    <div className={styles.navigation}>
                        <div className={styles.navigation_prev} ref={prevRef}>
                            <ArrowLeft />
                        </div>
                        <div className={styles.navigation_next} ref={nextRef}>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </Swiper>
    )
}
export default Carousel