import Styles from "../constants/style"
import { card } from "../assets"

const CardDeal = () => {
  return (
    <section id="product">
      <div className={`${Styles.paddingY} mt-16`}>
        <div className="flex flex-wrap font-poppins">
          <div className="w-full self-start lg:w-1/2 py-14">
            <h1 className='text-white text-4xl sm:text-6xl leading-[72px] max-w-md sm:max-w-none md:mb-12'>Find a better card deal in few easy steps.</h1>
            <p className='text-slate-300 max-w-[470px] leading-[30px] mb-12'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <a href="" className="bg-blue-gradient p-4 mt-52 rounded-md">Get Started</a>
          </div>
          <div className="w-full self-start lg:w-1/2">
            <img src={card} alt="Card Deal"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDeal
