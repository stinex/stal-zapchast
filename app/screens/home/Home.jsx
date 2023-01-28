
import { useContext } from 'react'
import { ModalContext } from '../../components/modal/ModalContext'

import Carousel from '../../components/home/carousel/Carousel'
import Advantage from '../../components/home/advantage/Advantage'
import Services from '../../components/home/services/Services'
import AboutCompany from '../../components/home/about-company/AboutCompany'
import FormBlock from '../../components/home/form-block/FormBlock'

import styles from './Home.module.scss'
import ControlledModal from '../../components/modal/ControlledModal'
import Form from '../../components/form/Form'
import Layout from '../../layout/layout'

const Home = ({ services }) => {

  const { setShouldShowModal, shouldShowModal } = useContext(ModalContext)

  return (
    <Layout
      title="Главная"
      description='Главная'
    >
      <div className={styles.home_wrapper} >
        <div className={styles.main_section} >
          <div className={`${styles.content} container`}>
            <h1 className={styles.title}>
              Услуги металлообработки
            </h1>
            <p className={styles.description}>
              Осуществляем свою деятельность на рынке  металлообработки литых запасных частей и комплектующих к оборудованию. <span> Гарантируем конкурентоспособную цену и качество.</span>
            </p>
            <div className={`${styles.btn} ${styles.order}`} onClick={() => setShouldShowModal(!shouldShowModal)}>
              Заказать
            </div>
          </div>
          <Carousel />
        </div>
        <ControlledModal
          shouldShow={shouldShowModal}
          onRequestClose={() => setShouldShowModal(false)}
        >
          <Form title={`Заполните форму \nдля получения расчета стоимости`} />
        </ControlledModal>
        <Advantage />
        <Services services={services} />
        <AboutCompany />
        <FormBlock />
      </div>
    </Layout>
  )
}
export default Home