import Link from 'next/link'
import { useContext } from 'react'
import Image from "next/image"

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import styles from './Contacts.module.scss'

import { ModalContext } from '../../components/modal/ModalContext'
import { contacts } from '../../assets/data/contacts'
import ControlledModal from '../../components/modal/ControlledModal'
import Form from '../../components/form/Form'
import Layout from '../../layout/layout'

const Contacts = () => {

    const { setShouldShowModal, shouldShowModal } = useContext(ModalContext)

    return (
        <Layout
            title="Контакты"
            description='Контакты'
        >
            <div className={styles.contacts_wrapper}>
                <div className={styles.main_block}>
                    <div className="container">
                        <div className={styles.information}>
                            <div className={styles.information_wrapper}>
                                <Breadcrumbs page={'Контакты'} theme={'dark'} />
                                <h2 className={styles.title}>
                                    Контакты
                                </h2>
                                <p className={styles.description}>
                                    Свяжитесь с нами по телефону и мы ответим на все интересующие вас вопросы
                                </p>

                                <div className={styles.btn_order} onClick={() => setShouldShowModal(!shouldShowModal)}>
                                    Заказать <span> звонок</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.body}>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                Наши контакты:
                            </div>
                            <nav className={styles.contacts}>
                                <ul>
                                    {
                                        contacts.map(item => {
                                            if (item.type === 'phone') {
                                                return (
                                                    <li key={item.text} className={styles.item}>
                                                        <span className={styles.icon}>
                                                            {item.icon}
                                                        </span>
                                                        <span>
                                                            {
                                                                item.text.map((phone, i) => {
                                                                    return (
                                                                        <span className={styles.phone}>
                                                                            <Link key={i} type={item.type} href={"tel:" + phone.number}>
                                                                                {phone.number}
                                                                            </Link>
                                                                            <Image src={phone.icon} />
                                                                        </span>
                                                                    )
                                                                })
                                                            }
                                                        </span>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li key={item.text} className={styles.item}>
                                                        <span className={styles.icon}>
                                                            {item.icon}
                                                        </span>
                                                        <Link type={item.type} href={item.type === 'phone' ?
                                                            "tel:" + item.text : item.type === 'email' ? "mailto:" + item.text :
                                                                item.type === 'address' ? item?.link : item.text}>
                                                            {item.text}
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.map}>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUvjLTI-C" style={{ width: "100%", height: "460px" }} allowFullScreen frameBorder="0" rel="border:0" loading="lazy" >
                            </iframe>

                        </div>
                    </div>
                </div>
                <ControlledModal
                    shouldShow={shouldShowModal}
                    onRequestClose={() => setShouldShowModal(false)}
                >
                    <Form title={`Оставьте заявку \nи мы свяжемся с вами`} type='requestСall' />
                </ControlledModal>
            </div>
        </Layout>
    )
}
export default Contacts