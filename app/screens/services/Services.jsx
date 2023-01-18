

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Form from '../../components/form/Form'

import 'swiper/css';
import styles from './Services.module.scss'
import styles_f from '../../components/form/Form.module.scss'

import ArrowLeft from '../../assets/images/svg/ArrowLeft';
import ArrowRight from '../../assets/images/svg/ArrowRight';


const Services = ({ service }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const swiperInit = (swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
    }

    return (
        <div className={styles.services}>
            <div className={styles.services_wrapper}>
                <div
                    className={styles.banner}
                    style={
                        {
                            backgroundImage: ` url(${service.bg[1920].src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }
                    }>
                    <div className="container">
                        <div className={styles.information}>
                            <Breadcrumbs page={service.name} theme={'light'} />
                            <div className={styles.title}>
                                {service.fullName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.form_services}>
                        <div className={styles_f.form_services}>
                            <Form title={`Заполните форму\n для получения расчета стоимости`} />
                        </div>
                    </div>

                    <div className={styles.carousel}>
                        <div className={styles.title}>
                            Примеры наших работ
                        </div>
                        <div className={styles.control}>
                            <div className={styles.control_wrapper}>
                                <div className={styles.navigation}>
                                    <div className={styles.navigation_prev} ref={prevRef}>
                                        <ArrowLeft color='#424551' />
                                    </div>
                                    <div className={styles.navigation_next} ref={nextRef}>
                                        <ArrowRight color='#424551' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            className={styles.carousel_wrapper}
                            slidesPerView={3}
                            spaceBetween={30}
                            onInit={swiperInit}
                            modules={[Navigation]}
                        >
                            {
                                service.images.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Image src={item} alt={service.fullName} style={{ width: "auto" }} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services