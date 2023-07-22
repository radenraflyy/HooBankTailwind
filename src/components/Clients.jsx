import Styles from "../constants/style"
import { clients } from "../constants/index"

const Clients = () => {
  return (
    <section id="clients">
      <div className={`${Styles.paddingY}`}>
        <div className="w-full flex flex-wrap items-center justify-center gap-20">
          {clients.map((el, i) => (
            <div key={i}>
              <img src={el.logo} alt="Air BNB" className="h-5 sm:h-14" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
