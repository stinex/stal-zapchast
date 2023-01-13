
import styles from './Home.module.scss'

import Carousel from '../../components/home/carousel/Carousel'
import Advantage from '../../components/home/advantage/Advantage'
import Services from '../../components/home/services/Services'
import AboutCompany from '../../components/home/about-company/AboutCompany'
import Form from '../../components/home/form-block/FormBlock'


const Home = () => {
  return (
    <div className={styles.home_wrapper} >
      <div className={styles.main_section} >
        <div className={`${styles.content} container`}>
          <h1 className={styles.title}>
            Услуги металлообработки
          </h1>
          <p className={styles.description}>
            Осуществляем свою деятельность на рынке  металлообработки литых запасных частей и комплектующих к оборудованию. <span> Гарантируем конкурентоспособную цену и качество.</span>
          </p>
          <div className={styles.btns}>
            <div className={`${styles.btn} ${styles.lore_more}`}>
              Подробнее
            </div>
            <div className={`${styles.btn} ${styles.order}`}>
              Заказать
            </div>
          </div>
        </div>
        <Carousel />
      </div>
      <Advantage />
      <Services />
      <AboutCompany />
      <Form />
    </div>
  )
}
export default Home