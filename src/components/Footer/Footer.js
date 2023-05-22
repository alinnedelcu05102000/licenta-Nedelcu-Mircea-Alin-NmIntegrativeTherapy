import "./Footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="background-footer">
            <div className="hihi">
                <div className="footer">
                    <div className="footer1">
                        <h1>Va așteptăm cu drag!</h1>
                        <span>
                        NM Integrative Therapy - Sănătate și armonie - Abordează sănătatea omului la un nivel holistic, creând armonie între suflet, minte și trup.
                        </span>
                    </div>
                    <div className="footer2">
                        <h1>Contact</h1>
                        <div className="f2-span">
                            <span><span className="tl">Email : </span> contact@nmintegrativetherapy.ro</span>
                            <span><span className="tl">Adresa : </span> Str Ion Pop Reteganu nr.35 <br></br>Cluj-Napoca, România</span>
                            <span><span className="tl">Telefon : </span> +40 (0722) 889 944</span>
                        </div>
                    </div>
                    <div className="footer3">
                        <h1>Link-uri folositoare</h1>
                        <div className="footer3-x">
                            <div className="footer3-1">
                                <Link to="/"><li>Acasa</li></Link>
                                <Link to='/AboutUs'><li>Despre Noi</li></Link>
                                <Link to='/Services-pag'><li>Servicii</li></Link>
                                <Link to='/Prices'><li>Preturi</li></Link>
                                <Link to='/Contact'><li>Contact</li></Link>
                                {/* <Link to='/Programari'><li>Programari</li></Link> */}
                            </div>
                            <div className="Footer3-2">
                                <a href="https://www.instagram.com/nmintegrative/"><div className="Insta"><AiOutlineInstagram /></div><span>Instagram</span></a>
                                <a href="https://www.facebook.com/NMIntegrative/"><div className="Facebook"><AiOutlineFacebook /></div><span>Facebook</span></a>
                            </div>
                        </div>
                    </div>
                </div>
             <div className="span"><span>© 2019 NM Integrative Therapy</span></div>
            </div>
        </div>
    )
}

export default Footer;