import { useState, useRef, useEffect } from "react"
import { MdOutlinePowerSettingsNew } from "react-icons/md"

const footerItems = ["description", "evolution", "catching", "capable moves"]

const Footer = () => {
  const [active, setActive] = useState(0)
  const [slider, setSlider] = useState({ left: 0, width: 0 })

  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const el = listRef.current?.children[active] as HTMLElement
    if (el) {
      setSlider({
        left: el.offsetLeft,
        width: el.offsetWidth
      })
    }
  }, [active])

  return (
    <footer className="relative h-[10vh] w-full border-t-[0.5px] border-t-[rgba(255,255,255,0.203)] grid grid-cols-[5rem_auto_5rem]">

      <div />

      {/* Center Section */}
      <div className="flex items-center h-full border-r-[0.5px] border-r-[rgba(255,255,255,0.203)] border-l-[0.5px] border-l-[rgba(255,255,255,0.203)]">

        <ul
          ref={listRef}
          className="relative flex items-center h-full text-lg font-medium uppercase w-full"
        >

          {/* Sliding Background */}
          <span
            className="absolute h-full bg-white/10 transition-all duration-300"
            style={{
              left: slider.left,
              width: slider.width
            }}
          />

          {footerItems.map((item, i) => (
            <li
              key={item}
              onClick={() => setActive(i)}
              className="flex-1 flex items-center justify-center h-full cursor-pointer z-10"
            >
              {item}
            </li>
          ))}

        </ul>

      </div>

      {/* Power button */}
      <div className="flex justify-center items-center h-full cursor-pointer">
        <MdOutlinePowerSettingsNew size={28} />
      </div>

    </footer>
  )
}

export default Footer