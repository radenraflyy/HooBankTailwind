import Styles from "../constants/style"
import { star, send, shield } from "../assets"
import { features } from "../constants"

const Businnes = () => {
  return (
    <section id="features" className={`${Styles.paddingY} mt-16`}>
      <div className="flex flex-wrap font-poppins">
        <div className="w-full self-center lg:w-1/2">
          <h1 className="text-white text-5xl lg:text-[3rem] leading-[60px] md:leading-[72px] max-w-md lg:max-w-none">
            You do the business, we’ll handle the money.
          </h1>
          <p className="text-slate-300 leading-[30px] max-w-[470px] mb-14 mt-6">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <a href="" className="p-3 bg-blue-gradient rounded-lg">
            Get Started
          </a>
        </div>
        <div className="w-full self-end lg:w-1/2">
          {features.map((el, i) => (
            <div key={i} className="mt-14 p-8 bg-black-gradient rounded-3xl">
              <div className="flex xs:flex-row flex-col items-center">
                <div className="p-6 border rounded-full mr-5 bg-discount-gradient border-none md:mb-0 mb-5">
                  <img src={el.icon} alt="stars" className="w-7" />
                </div>
                <div>
                  <h1 className="text-white text-lg">{el.title}</h1>
                  <p className="text-slate-300">{el.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Businnes
