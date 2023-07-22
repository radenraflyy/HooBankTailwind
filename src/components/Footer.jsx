import Styles from "../constants/style"
import { logo, facebook, instagram, linkedin, twitter } from "../assets"
import { footerLinks, socialMedia } from '../constants/index'

const Footer = () => {
  return (
    <footer>
      <div className={`py-6 mt-16`}>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-[40%]">
            <img src={logo} alt="Logo" />
            <h1 className="text-slate-400 leading-7 max-w-[350px] text-xl sm:px-5 mt-5">
              A new way to make the payments easy, reliable and secure.
            </h1>
          </div>
          {footerLinks.map((section, i) => (
            <div key={i} className="w-full mt-5 sm:w-1/5">
              <h1 className="text-white text-2xl">{section.title}</h1>
              <ul className="text-slate-400 mt-5">
                {section.links.map((link, j) => (
                  <li key={`${i}-${j}`} className="mb-3">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`border flex-1 flex ${Styles.flexCenter} my-10 relative`}
        ></div>

        <div className="flex flex-col sm:flex-row text-center sm:text-left">
          <div className="w-full text-white block">
            <span className="mr-5">Copyright &#169;</span>
            <span>2023 HooBank All Rights Reserved.</span>
          </div>

          <div className="w-full flex gap-10 sm:mr-10 justify-center sm:justify-end mt-5 sm:mt-0">
            {socialMedia.map((el, i) =>(
            <a
              href={el.link}
              target="_blank"
              key={i}
            >
              <img src={el.icon} alt="SocialMedia" />
            </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
