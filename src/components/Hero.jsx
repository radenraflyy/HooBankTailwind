import Styles from "../constants/style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"

const Hero = () => {
  const animationDiscount = useAnimation()
  const animationGenertion = useAnimation()
  const animationPayment = useAnimation()
  const animationText = useAnimation()
  const animationImage = useAnimation()

  const animationMotion = async () => {
    await animationImage.start({ opacity: 1, scale: 1 })
    await animationDiscount.start({ opacity: 1, scale: 1 })
    await animationGenertion.start({ opacity: 1, x: 0 })
    await animationPayment.start({ opacity: 1, x: 0 })
    return await animationText.start({ opacity: 1, x: 0 })
  }

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      animationMotion()
    }
  }, [inView])

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${Styles.paddingY}`}
      ref={ref}
    >
      <div
        className={`flex-1 ${Styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animationDiscount}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${Styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Acount
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={animationGenertion}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={animationGenertion}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          Payment Method
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -500 }}
          animate={animationGenertion}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className={`${Styles.paragraph} max-w-[470px] mt-5`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est
          doloremque deserunt molestias fugit ipsa, ipsum labore saepe voluptate
          in ipsam vero expedita iure ea a praesentium consectetur odit
          accusamus.
        </motion.p>
      </div>

      <div
        className={`flex-1 flex ${Styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.img
          initial={{ opacity: 0.4, scale: 0.5 }}
          animate={animationImage}
          transition={{
            duration: 1,
          }}
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${Styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
