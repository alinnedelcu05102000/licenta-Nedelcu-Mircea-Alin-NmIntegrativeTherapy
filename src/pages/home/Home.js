import Navbar from "../../components/Navbar/Navbar"
import Hero from '../../components/Hero/Hero'
import background from '../../images/background2.jpg';
import contact from '../../images/contact.jpg';
import bioenergie from '../../images/bioenergie_mircea.jpg';
import biorezonanta from '../../images/biorezonanta.png';
import './Home.scss'
import Footer from "../../components/Footer/Footer";
import Mircea from "../../images/Mircea-transformed.png";
import Claudiu from "../../images/CLAUDIU-transformed.png";
import Crina from "../../images/Crina-transformed.png";
import Olimpia from "../../images/Olimpia-transformed.png";
import Programe from "../../components/Programe/Programe";




const Home = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Hero 
                cName="hero"
                heroImg={background}
                title="Centrul NM Integrative Therapy"
                text="Sănătate și armonie - Abordează sănătatea omului la un nivel holistic,
                creând armonie între suflet, minte și trup."
                buttonText="Contacteaza-ne"
                url='/Contact'
                btnClass='btn'
            />

<div className="zona1" id="1">
        <div className="poza">
          <img className="img" src={contact} alt="house"></img>
        </div>
        <div className="text-zona1">
          <div className="text">
            <h1>NM Integrative Therapy</h1>
            <p>
            Medicina holistică privește omul ca un întreg, concentrându-se pe legatura 
            dintre minte și corp. Scopul acesteia este armonizarea pe plan fizic, mental, 
            emoțional și spiritual în procesul de descoperire a cauzei bolilor și găsirea 
            căii spre vindecare prin diverse terapii complementare. 
            Centrul nostru își propune să vină în sprijinul medicinei alopate printr-o 
            multitudine de tehnici și metode terapeutice, cum ar fi: bioenergie, 
            psihoterapie, fitoterapie, homeopatie, nutriție, apiterapie, gemoterapie, 
            aromoterapie, meloterapie, cromoterapie, tehnici de masaj terapeutic și de 
            relaxare, tehnici de eliberare emoțională, aurometrie, seminarii și 
            workshop-uri de dezvoltare personală pentru obținerea și menținerea sănătății.
             
            </p>
          </div>
        </div>
      </div>

<div className="content-servicii">
<div className="servicii-home">
  <h1>O parte din serviciile oferite</h1>
  <div className="first-serv">
    <div className="des-text">

      <h2>Terapie bioenergegtică</h2>
      <p>Este terapia bazată pe forța câmpului energetic uman și se realizează prin pase
         magnetice cu ajutorul mâinilor, cu sau fără atingere. Fiecare organism viu are un 
         câmp electromagnetic.Prin terapia energetica, se obtine un proces de stimulare si 
         echilibrare a intregului organism fizic, energetic si emotional.</p>


      <h2>Biorezonanţă</h2>
      <p>Biorezonanţa este o metodă modernă de diagnostic şi tratament, dezvoltată pe baza 
        cercetărilor efectuate de Institutele de Psihofizică din Rusia. Aparatul de biorezonanţă
         constă dintr-un sistem computerizat care poate detecta din timp deficienţele sau 
         modificările patologice la nivelul structurilor de unde energetice generate la nivelul
          ţesuturilor, organelor sau celulelor organismului.</p>

    </div>
    <div className="photo">
      <img alt="bioenergie" src={bioenergie}></img>
      <img alt="biorezonanta" src={biorezonanta}></img>
    </div>
  </div>
</div>
</div>

<div className="terapeuti-bck">
      <div className="terapeuti">
        <h1> Terapeutii nostrii </h1>

        <div className="rand-ter">
          <div className="terapeuti-col">
            <img src={Mircea} alt="Nedelcu Mircea" />
            <div className="layer">
              <h3>Nedelcu Mircea</h3>
            </div>
          </div>

          <div className="terapeuti-col">
            <img src={Claudiu} alt="Claudiu Timar" />
            <div className="layer">
              <h3>Claudiu Timar</h3>

            </div>
          </div>

          <div className="terapeuti-col">
            <img src={Crina} alt="Crina Iuga" />
            <div className="layer">
              <h3>Crina Iuga</h3>

            </div>
          </div>

          <div className="terapeuti-col">
            <img src={Olimpia} alt="Olimpia Stan" />
            <div className="layer">
              <h3>Olimpia Stan</h3>
              
          </div>
          </div>
        </div>
      </div>
</div>


<Programe></Programe>
<Footer></Footer>
        </div>
    )
}


export default Home;