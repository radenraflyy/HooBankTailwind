import { bill, google, apple } from '../assets'
import Styles from '../constants/style'

const Billing = () => {
  return (
    <section id='payment'>
      <div className={`${Styles.paddingY} mt-16`}>
        <div className='flex flex-wrap font-poppins'>
          <div className='w-full self-start md:w-1/2'>
            <img src={bill} alt="Billing" />
          </div>
          <div className='w-full self-center md:w-1/2'>
            <h1 className='text-white text-4xl sm:text-6xl leading-[72px] max-w-md sm:max-w-none sm:mb-14'>Easily control your billing & invoicing.</h1>
            <p className='text-slate-300 max-w-[470px] leading-[30px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='flex flex-col xs:flex-row gap-10 items-center mt-8'>
              <img src={apple} alt="Apple" />
              <img src={google} alt="Google" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Billing