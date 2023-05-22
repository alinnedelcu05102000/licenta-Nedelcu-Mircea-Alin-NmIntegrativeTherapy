import Navbar from "../../components/Navbar/Navbar"
import Hero from '../../components/Hero/Hero'
import AboutImg from '../../images/pexels-iam-hogir-7919366.jpg';
import background2 from '../../images/background2 - Copy.jpg';
import tata from '../../images/tata - Copy.jpg';
import './AboutUs.scss';
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom"


const AboutUs =()=>{
    return(
        <div>
         <Navbar></Navbar>
            <Hero 
                cName="hero hero-mid"
                heroImg={AboutImg}
                title="Despre Noi"
                
            />

        <section className="despre-noi-bck-test">
            <div className="despre-noi">
                <div className="row-despre-noi">
                    <div className="despre-noi-col">
                        <img className="background-unu" src={background2}></img>
                    </div>
                    <div className="despre-noi-col textdp">
                        <h1>Cel mai mare Centru de terapii alternative din Cluj-Napoca</h1>
                        <p>Centrul NM Integrative Therapy, abordează sănătatea omului la un nivel holistic, 
                            creând armonie între suflet, minte și trup. 
                            NM Integrative Therapy vă ghidează spre atingerea stării de sănătate completă. 
                            Mulți cred că își pot vindeca trupul fără să-și vindece sufletul. 
                            Este deja demonstrat, chiar și științific că orice simptom al corpului fizic este 
                            dat de o nealiniere a emoțiilor din interiorul nostru, amplificate apoi de mintea 
                            noastră. Putem spune că bolile vin ca o oportunitate puternică prin care învățam 
                            lecții importante de viata. De multe ori neiertarea, neacceptarea, furia și emoțiile 
                            negative duc la îmbolnăvirea corpului nostru.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="despre-noi-bck-test dpdoi">
            <div className="despre-noi">
                <div className="row-despre-noi rpdoi">
                    <div className="despre-noi-col">
                        <img className="background-unu" src={tata}></img>
                    </div>
                    <div className="despre-noi-col textdp">
                        <h1>MIRCEA NEDELCU - FONDATORUL CENTRULUI</h1>
                        <p>Fondatorul centrului, Mircea Nedelcu, explică care a fost ideea care a stat la temelia 
                            acestui spaţiu. “Centrul de tratament căruia i-am pus bazele se numeşte integrativ 
                            pentru că vreau să integrez cele două concepte: medicină alopată şi medicina naturistă.
                             Intr-un fel sau altul, acestea doua se combină si se se mulează între ele; 
                             ceea ce nu poate medicina alternativă, poate medicina alopată şi invers. 
                             Dacă le-am uni pe amândouă, beneficiile pentru pacienţi ar fi fantastice!”
                              Dă-ți voie să te vindeci, să crezi și să speri din nou! 
                              Te așteptăm la Centrul nostru să îți dai voie să fii ajutat!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="Programari">
            <div className="buton-about-us">
            <Link to='/Contact'><li>Contact</li></Link>
            </div>
        </section>
        <Footer></Footer>
        </div>
    )
}

export default AboutUs;