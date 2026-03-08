import pokeball from '../assets/pokeball.png';
import pokeball2 from '../assets/pokeball2.png';

const Background = () => {
    return (
        <div className="absolute inset-0 grid grid-cols-3 place-items-center pointer-events-none">
            <img src={pokeball} alt="pokeball" className="w-80 h-80" />
            <img src={pokeball2} alt="pokeball" className="w-150 h-100" />
            <img src={pokeball} alt="pokeball" className="w-80 h-80" />
            <img src={pokeball2} alt="pokeball" className="w-150 h-100" />
            <img src={pokeball} alt="pokeball" className="w-80 h-80" />
            <img src={pokeball2} alt="pokeball" className="w-150 h-100" />
        </div>
    )
}

export default Background
