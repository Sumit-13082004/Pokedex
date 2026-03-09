import pokeball from '../assets/pokeball.png';
import { Menu } from 'lucide-react';
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    name: "Search",
    route: "/search",
  },
  {
    name: "Compare",
    route: "/compare",
  },
  {
    name: "Pokemon",
    route: "/pokemon",
  },
  {
    name: "My List",
    route: "/list",
  },
  {
    name: "About",
    route: "/about",
  },
];

const Header = () => {
  const [active, setActive] = useState(0);
  const [slider, setSlider] = useState({ left: 0, width: 0 });

  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  useEffect(() => {
    const index = navItems.findIndex(({ route }) =>
      location.pathname.startsWith(route)
    );

    if (index !== -1) {
      setActive(index);
    }
  }, [location.pathname]);

  useEffect(() => {
    const el = navRef.current?.children[active] as HTMLElement
    if (el) {
      setSlider({
        left: el.offsetLeft,
        width: el.offsetWidth,
      })
    }
  }, [active]);

  return (
    <header className="relative h-[10vh] w-full border-b-[0.5px] border-b-[rgba(255,255,255,0.203)] grid grid-cols-[5rem_auto_5rem]">

      {/* Left Icon */}
      <div className="flex justify-center items-center h-full cursor-pointer">
        <img src={pokeball} alt="pokeball" className="w-12 h-12" />
      </div>

      {/* Center Navigation */}
      <nav className="flex justify-center items-center h-full border-r-[0.5px] border-r-[rgba(255,255,255,0.203)] border-l-[0.5px] border-l-[rgba(255,255,255,0.203)]">
        <ul
          ref={navRef}
          className="relative flex items-center h-full text-lg font-medium uppercase"
        >
          {navItems.map(({ name, route }, i) => (
            <li
              key={name}
              className={`px-8 h-full flex items-center cursor-pointer transition-colors
                ${active === i ? "text-white" : "text-white/60 hover:text-white"}
              `}
            >
              <Link to={route} className='flex items-center justify-center h-full'>
                {name}
              </Link>
            </li>
          ))}

          {/* Slider */}
          <span
            className="absolute bottom-0 h-0.75 bg-white transition-all duration-300"
            style={{
              left: slider.left,
              width: slider.width,
            }}
          />
        </ul>
      </nav>

      {/* Right Hamburger */}
      <div className="flex justify-center items-center h-full cursor-pointer">
        <Menu size={28} />
      </div>

    </header>
  )
}

export default Header;