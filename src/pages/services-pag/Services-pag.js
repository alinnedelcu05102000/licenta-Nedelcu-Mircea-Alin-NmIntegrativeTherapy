import Navbar from "../../components/Navbar/Navbar"
import Hero from '../../components/Hero/Hero'
import AboutImg from '../../images/stones-2043707.jpg';
import bioenergetica from '../../images/terapia-bioenergetica.png'
import biofrecventa from '../../images/biofrecventa.png'
import bowtech from '../../images/bowtech-servicii.png'
import thai from '../../images/thai-nmit.jpg'
import biorezonanta from '../../images/biorezonanta.png'
import madero8 from '../../images/m-madero8.jpg'
import Reflexoterapie from '../../images/REFLEXOTERAPIE.jpg'
import drenaj from '../../images/drenaj-limfatic_cluj.jpg'
import madero1 from '../../images/madero-1.jpg'
import masaj from '../../images/MasajVuclanic - Copy.jpg'
import ayurvedic from '../../images/masaj-ayurvedic-cu-bete-de-bambus.jpg'
import './Services-pag.scss'
import Footer from "../../components/Footer/Footer";


const Services =()=>{
    return(
        <div>
         <Navbar></Navbar>
            <Hero 
                cName="hero hero-mid"
                heroImg={AboutImg}
                title="Servicii"
                
            />

<div class="servicii-pag">
        <div class="servicii-content">
        <div class="row">
            <div class="centru-col">
                <img src={bioenergetica}></img>
                <h3> Terapia Bioenergetica </h3>
                <p>
                    Este terapia bazată pe forța câmpului energetic uman și se realizează prin pase magnetice cu ajutorul mâinilor, cu sau fără
                    atingere. Fiecare organism viu are un câmp electromagnetic.Prin terapia energetica, se obtine un proces de stimulare si echilibrare
                    a intregului organism fizic, energetic si emotional.
                </p>
            </div>

            <div class="centru-col">
                <img src={biorezonanta}></img>
                <h3>Biofrecventa: Aparatul MAFG</h3>
                <p>
                    Aproape o treime din celulele
                    corpului nostru, sunt microorganisme(virusi, bacterii, paraziti si ciuperci) care traiesc intr-o simbioza perfecta cu corpul
                    nostru datorita sistemului imunitar.Cand sistemul imunitar este scazut, aceste microorganisme se dezvolta intr-un ritm alarmant
                    si incep sa creeeze tot felul de boli in organism. Aparatul de biofrecventa merge pe frecventa microorganismelor in distrugerea acestora.
                </p>
            </div>

            <div class="centru-col">
                <img src={biofrecventa}></img>
                <h3> Biorezonanţă </h3>
                <p>
                    Biorezonanţa este o metodă modernă de diagnostic şi tratament, dezvoltată pe baza cercetărilor efectuate de Institutele
                    de Psihofizică din Rusia. Aparatul de biorezonanţă constă dintr-un sistem computerizat care poate detecta din timp
                    deficienţele sau modificările patologice la nivelul structurilor de unde energetice generate la nivelul ţesuturilor,
                    organelor sau celulelor organismului.
                </p>
            </div>

        </div>

        <div class="row">
            <div class="centru-col">
                <img src={bowtech}></img>
                <h3> Bowen si baby Bowen</h3>
                <p>
                    Terapia Bowen prezintă unul dintre cele mai profunde concepte terapeutice existente în lume, în prezent. Se bazează pe teoria conform
                    căreia, odată ce s-a realizat relaxarea totală a corpului,se activează abilitatea proprie organismului de a redresa orice problemă a
                    corpului și a minții, prin readucerea acestora intr-o stare de echilibru si armonie.
                </p>
            </div>

            <div class="centru-col">
                <img src={thai}></img>
                <h3> Masaj Thai</h3>
                <p>
                    Masajul Thai este cunoscut in Thailanda si este o tehnica de masaj vindecatoare care implica masaj terapeutic cu elemente
                    de streching. Cu ajutorul mainilor, terapeutul misca corpul
                    pacientului intr-o serie de pozitii de intindere si aplica presiune folosindu-si degetele, palmele, coatele si picioarele.Acest
                    masaj este o terapie complexa pentru corp si minte, energizanta si relaxanta in acelasi timp
                </p>
            </div>

            <div class="centru-col">
                <img src={drenaj}></img>
                <h3> Drenaj Limfatic </h3>
                <p>
                    Drenajul limfatic este o tehnica manuala de masaj pentru a stimula fluxul limfei cu scopul de a reduce inflamatia si de a imbunatati
                    starea de sanatate  in corp. In timpul unui drenaj limfatic se aplica o presiune usoara si precisa asupra ganglionilor limfatici cu scopul
                    de a accelera volumul fluxului limfatic care este responsabil de eliminarea toxinelor si a materialelor infectioase din corp. Efectele
                    pot viza grabirea recuperarii dintr-o raceala sau eliminarea mai rapida a oboselii dar si tonifierea pielii sau vindecarea afectiunilor
                    limfedematoase.
                </p>
            </div>


        </div>

        <div class="row">
            <div class="centru-col">
                <img src={madero8}></img>
                <h3> Masaj Terapeutic </h3>
                <p>
                    Masajul este benefic pentru organism, indiferent de tipul de masaj aplicat si de momentul zilei cand se desfasoara o astfel
                    de terapie. Este una dintre cele mai vechi metode de tratament, iar de-a lungul anilor tehnici au fost imbunatatite, ajungandu-se
                    la tot felul de terapii prin masaj. Masajul inseamna o stare de bine, castigata instant in care corpul se simte revigorat, si efectele
                    acestuia fiind pe termen lung.
                </p>
            </div>

            <div class="centru-col">
                <img src={Reflexoterapie}></img>
                <h3> Reflexoterapie </h3>
                <p>
                    Reflexoterapia este o forma de masaj localizat, realizat la nivelul talpilor, palmelor si lobului urechii. Se stie din medicina
                    chineza ca organele au puncte de reflexie pe talpa piciorului si prin presare se creeaza o stimulare a organelor bolnave spre vindecare.
                    Terapia propriu zisa
                    consta in sedinte de masaj concentrate pe zonele cu probleme de o intensitate medie sau mare pentru a facilita dizolvarea depunerilor
                    de cristale care inhiba buna functionare a organelor.
                </p>
            </div>

            <div class="centru-col">
                <img src={ayurvedic}></img>
                <h3> Masaj ayurvedic cu bețe de bambus </h3>
                <p>
                    Acest tip de masaj detoxifica si curata organismul prin intarirea sistemului imunitar. S-au inregistrat rezultate foarte bune
                    la probleme de sanatate precum artrita, spondiloza, lumbago, sciatica si altele, acolo unde tratamentele alopate sunt limitate.
                    Masajul are efect diferit in functie de momentul din zi cand este facut. Masajul din timpul zilei confera relaxare si reimprospatare
                    iar cel e seara are un efect tranchilizant. Tehnicile de masaj ayurvedic sunt practicate in terapii individualizate in functie de
                    tipul de problema al fiecarei persoane.
                </p>
            </div>

        </div>

        <div class="row Lrow">
            <div class="centru-col">
                <img src={madero1}></img>
                <h3> Maderoterapie </h3>
                <p>
                    Maderoterapia este o tehnica de masaj din America de Sud, utilizata in remodelarea corporala, in recuperare fizica si reabilitare.
                    Este folosita pentru a modela si relaxa corpul cu ajutorul unor instrumente din lemn. Considerata o tehnica holistica capabila sa
                    stimuleze si sa echilibreze energia, maderoterapia reduce nivelul de stres si amelioreaza durerile musculare.
                </p>
            </div>

            <div class="centru-col">
                <img src={masaj}></img>
                <h3> Masaj cu roci vulcanice </h3>
                <p>
                    De origine amerindiana, terapia de masaj cu roci vulcanice se utilizeaza cu pietre vulcanice foarte netede care datorita continutului
                    ridicat de fier pastreaza caldura acumulata timp de 45 de min. Aceste pietre incalzite se aplica pe corp si ofera un sentiment de bunastare,
                    avand tot odata si diferite virtuti terapeutice. Studiile arata ca un masaj cu pietre calde poate fi o metoda eficienta si imediata de reducere
                    a stresului, a anxietatii si de a induce stare de relaxare si usurare a durerilor si tensiunilor musculare din corp
                </p>
            </div>

        </div>
            </div>

    </div>
    <Footer></Footer>
        </div>

    )
}

export default Services;