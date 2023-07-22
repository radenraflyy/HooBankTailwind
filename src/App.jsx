import styles from './constants/style'
import {
  Navbar,
  Hero,
  Stats,
  Businnes,
  Billing,
  CardDeal,
  Testimonial,
  Clients,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full">
      <div className={`${styles.flexCenter} sticky top-0 z-50`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Businnes/>
          <Billing/>
          <CardDeal/>
          <Testimonial/>
          <Clients/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App