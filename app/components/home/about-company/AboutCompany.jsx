import Image from 'next/image'

import styles from './AboutCompany.module.scss'

import Img from '../../../assets/images/home/about-company-1920.png'
const AboutCompany = () => {
    return (
        <div className={styles.about_company} id='about-company'>
            <div className="container">
                <h5 className={styles.title}>
                    О компании
                </h5>
                <div className={styles.about_company__wrapper}>
                    <Image src={Img} className={styles.img} alt='Наша Компания' />
                    <div className={styles.top_text}>
                        <p>
                            Торгово-Производственная Компания “МеталлДеталь” работает на рынке с 2019 года <br />
                            и зарекомендовала себя надежным Поставщиком.
                        </p>
                        <p>
                            Мы оказываем услуги металлообработки по всей России. Основными заказчиками являются: Содовые, Кирпичные, Известковые, Гипсовые, Крановые, Целлюлознобумажные, Машиностроительные заводы.
                        </p>
                    </div>
                    <div className={styles.bottom_text}>
                        <p>
                            Наша цель - это построение долговременных <br />
                            и взаимовыгодных партнерских отношений.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutCompany