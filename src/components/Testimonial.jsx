import Styles from '../constants/style'
import { quotes } from '../assets'
import { feedback } from '../constants/index'

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <div className={`${Styles.paddingY} mt-16`}>
        <div className='flex flex-wrap items-center gap-10 sm:gap-y-20 sm:gap-0'>
          <div className='w-full sm:w-1/2 text-white text-6xl'>
            <h1 className='max-w-sm lg:max-w-none'>What people are saying about us</h1>
          </div>
          <div className='w-full sm:w-1/2 text-slate-300 text-2xl'>
            <h2 className='sm:text-center'>Everything you need to accept card payments and grow your business anywhere on the planet.</h2>
          </div>

          {feedback.map((el, i) => (
          <div key={i} className='w-full hover:border hover:rounded-3xl p-10 md:w-1/3'>
            <img src={quotes} alt="quetes" />
            <p className='text-slate-300 leading-9 mt-7 max-w-xs'>{el.content}</p>
            <div className='flex items-center mt-5'>
              <img src={el.img} alt="People 01" className='w-12 h-12 mr-2' />
              <div>
                <h2 className='text-white block'>{el.name}</h2>
                <p className='text-slate-300'>{el.title}</p>
              </div>
            </div>
          </div>
          ))}
          <div
            className={`border flex-1 flex ${Styles.flexCenter} md:my-0 my-10 relative`}
          >
      </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial