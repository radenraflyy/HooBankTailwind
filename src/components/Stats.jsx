import { stats } from "../constants"
import Styles from "../constants/style"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react"

const Stats = () => {
  const animationStats1 = useAnimation()

  const handleAnimationStats = async () => {
    await animationStats1.start({opacity: 1, y: 0})
  }

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      handleAnimationStats()
    }
  }, [inView])
  return (
    <section id="stats" className={`flex md:flex-row flex-col ${Styles.paddingY}`} ref={ref}>
      {stats.map((el, i) => (
        <motion.div
        initial={{opacity: 0, y: -200}}
        animate={animationStats1}
        transition={{
          duration: 3
        }}
          key={i}
          className="w-full md:flex flex-row items-center justify-center md:mt-0 mt-5"
        >
          <h1 className="text-center font-poppins font-semibold ss:text-[40px] text-[40px] text-white md:leading-[0px] leading-[50px] md:mr-5 mr-0">
            {el.value} {el.text}
          </h1>
          <h2 className="text-center text-gradient text-2xl md:mr-16 mr-0">
            {el.title}
          </h2>
            <div
              className={`md:w-10 w-[100%] border md:rotate-90 rotate-0 md:mt-0 mt-2`}
            ></div>
        </motion.div>
      ))}
    </section>
  )
}

export default Stats
