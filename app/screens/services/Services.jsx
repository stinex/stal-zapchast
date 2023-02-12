

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Form from '../../components/form/Form'

import 'swiper/css';
import styles from './Services.module.scss'
import styles_f from '../../components/form/Form.module.scss'

import ArrowLeft from '../../assets/images/svg/ArrowLeft';
import ArrowRight from '../../assets/images/svg/ArrowRight';
import Layout from '../../layout/layout';


const Services = ({ service }) => {
    const [width, setWidth] = useState(null)
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const ref = useRef(null);

    const swiperInit = (swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
    }

    const resizeHandler = () => {
        const { clientWidth } = ref.current || {};
        setWidth(clientWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [])

    return (
        <Layout
            title={service.name}
            description={service.fullName}
        >
            <div className={styles.services}>
                <div className={styles.services_wrapper}>
                    <div
                        ref={ref}
                        className={styles.banner}
                        style={
                            {
                                backgroundImage: ` url(${width > 1200 ? service.bg1920.url :
                                    width <= 1200 && width > 480 ? service.bg768.url :
                                        service.bg375.url})`,
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
                        <div className={styles.html}>
                            <div dangerouslySetInnerHTML={{__html: service.descriptionMain.html}} />
                        </div>
                    </div>
                    <div className="container">
                        <div className={styles.form_services}>
                            <div className={styles_f.form_services}>
                                <Form title={`Заполните форму \nдля получения расчета стоимости`} />
                            </div>
                        </div>

                        <div className={styles.carousel}>
                            <div className={styles.control}>
                                <div className={styles.control_wrapper}>
                                    <div className={styles.title}>
                                        Примеры наших работ
                                    </div>
                                    <div className={styles.navigation}>
                                        <div className={styles.navigation_prev} ref={prevRef}>
                                            <ArrowLeft color='#424551' />
                                        </div>
                                        <div className={styles.navigation_next} ref={nextRef}>
                                            <ArrowRight color='#424551' />
                                        </div>
                                    </div>
                                </div>
                                <Swiper
                                    className={styles.carousel_wrapper}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    onInit={swiperInit}
                                    modules={[Navigation]}

                                    breakpoints={{
                                        320: {
                                            slidesPerView: 'auto',
                                            spaceBetween: 20
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        }
                                    }}
                                >
                                    {
                                        service.images.map((item, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <img src={item.url} alt="" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Services