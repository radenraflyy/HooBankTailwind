import Styles from '../constants/style'
import { arrowUp } from '../assets'
import styles from '../constants/style'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-125 duration-300 ease-in`}>
      <div className={`${Styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${Styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px] '>
            <span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted