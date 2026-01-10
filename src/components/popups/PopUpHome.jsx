import imgPopUpHome from '/popups/popup-home.jpg';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import './PopUpHome.scss';

export default function PopUpHome() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <section className="popup-home">
            <div>
                <img src={imgPopUpHome} alt="inscrição jovem aprendiz" />
                <IoClose 
                    className='icon-close' 
                    onClick={() => setIsVisible(false)} 
                />
            </div>
        </section>
    );
}
