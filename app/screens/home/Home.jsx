import Carousel from '../../components/home/carousel/Carousel'
import styles from './Home.module.scss'


const Home = () => {
  return (
    <div className={styles.home_wrapper} >
      <Carousel />
    </div>
  )
}
export default Home