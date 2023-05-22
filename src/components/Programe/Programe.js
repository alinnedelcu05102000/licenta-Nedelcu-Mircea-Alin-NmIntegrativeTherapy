import './Programe.scss'

const Programe =()=>{
    return(
        <div>
        <div className="titlu-programe">
        <h1 className="h1-programe">Programele oferite de noi</h1>
      </div>

      <section className="container" >
        <div className="package-container">
          <div className="packages">
            <h1>Revigorarea coloanei</h1>
            <p className="domain">PACHET 6 ŞEDINŢE</p>
            <h2 className="text2">700 lei<sup> 850 lei</sup></h2>
            <ul className="list">
              <li className="first">Pe perioada a 4 saptamani</li>
              <li>
                Prima saptamana 2 sedinte<br />
                (45 min) de masaj terapeutic
              </li>
              <li>
                A doua saptamana o sedinta <br />
                (90 min) de masaj terapeutic<br />
                Thai Regal
              </li>
              <li>A treia saptamana 2 sedinte<br />(45 min) de masaj terapeutic</li>
              <li>
                A patra saptamana o sedinta <br />
                (90 min) de masaj terapeutic<br />
                Thai Regal
              </li>
              <li>
                15 min sedinta de evaluare<br /> finala efectuata de catre <br />bioterapeutul Nedelcu Mircea
              </li>
            </ul>
            <p className="roman">
              Programul are ca si scop cresterea mobilitatii corpului prin eliminarea contracturilor musculare,
              eliminarea durerilor de spate, îmbunătățirea flexibilității articulațiilor, îmbunătățirea circulației
              sanguine si reducerea considerabilă a nivelului de stress prin relaxare fizică și mentală.
            </p>
          </div>

          <div className="packages">
            <h1>Revitalizarea corpului</h1>
            <p className="domain">PACHET 8 ŞEDINŢE</p>
            <h2 className="text2">1000 lei<sup> 1220 lei</sup></h2>
            <ul className="list">
              <li className="first">4 sedinte/saptamana</li>
              <li>30 min masaj terapeutic</li>
              <li>30 min reflexoterapie</li>
              <li>
                15 min sedinta de evaluare<br /> finala efectuata de catre <br />bioterapeutul Nedelcu Mircea
              </li>
            </ul>

            <p class="domain">PACHET 5 ŞEDINŢE</p>
                <h2 class="text2"> 650 lei<sup> 800 lei</sup></h2>
                <ul class="list">
                    <li class="first">5 sedinte/saptamana</li>
                    <li>30 min masaj terapeutic</li>
                    <li>
                        30 min reflexoterapie
                    </li>
                    <li>15 min sedinta de evaluare<br /> finala efectuata de catre <br />bioterapeutul Nedelcu Mircea</li>
                </ul>
                <p class="roman">
                    Programul are ca si scop dobandirea reechilibrarii fizice prin eliminarea contracturilor musculare, eliminarea durerilor de spate,
                    stimularea functionarii normale a organelor interne si a glandelor endocrine, imbunatatirea circulatiei sanguine, detoxifierea organismului
                    si cresterea gradului de relaxare fizica
                </p>
        </div>

            <div class="packages">
                <h1>Detoxifierea corpului</h1>
                <p class="domain">PACHET 7 ŞEDINŢE</p>
                <h2 class="text2"> 1230 lei<sup> 1430 lei</sup></h2>
                <ul class="list">
                    <li class="first">Pe perioada a 4 saptamani</li>
                    <li>Prima saptamana o sedinta <br />(90 min) de biorezonanta cu <br />prescriere de tratament <br />filoterapeutic</li>
                    <li>
                        2 sedinte/saptamana in <br />urmatoarele 3 saptamani <br /> care constau intr-o sedinta <br />(90 min) de masaj cu pietre
                        <br />de sare incalzite+reflexoterapie <br />si
                        o sedinta (90 min) de drenaj <br />limfatic cu ulei cald
                    </li>
                    <li>15 min sedinta de evaluare<br /> finala efectuata de catre <br />bioterapeutul Nedelcu Mircea</li>
                </ul>
                <p class="roman">
                    Programul are ca si scop detoxifierea organismului prin îmbunătățirea funcționării organelor interne,
                    îmbunătățirea circulației sanguine si prin ameliorarea drenajului limfatic
                </p>
            </div>

            <div class="packages">
                <h1>Stimularea Organelor Interne</h1>
                <p class="domain">PACHET 10 ŞEDINŢE</p>
                <h2 class="text2"> 1050 lei<sup> 1250 lei</sup></h2>
                <ul class="list">
                    <li class="first">Durata intre 2 si 4 saptamani</li>
                    <li>3 sau 5 sedinte pe saptamana</li>
                    <li> 30 min reflexoterapie planetara <br /> si 30 min tratament cu aparatul <br />de ionizare</li>
                    <li>15 min sedinta de evaluare<br /> finala efectuata de catre <br />bioterapeutul Nedelcu Mircea</li>
                </ul>
                <p class="roman">
                    Programul are ca si scop detoxifierea organismului, îmbunătățirea functionarii organelor interne, îmbunătățirea circulaţiei sanguine,
                    si ameliorarea drenajului limfatic. Se pot face la alegere 5 şedinţe consecutive pe săptămână (de luni până vineri) SAU 3 şedinţe pe
                    săptămână (cu interval de 1 zi pauză între şedinţe, în zilele de luni, miercuri, vineri).
                </p>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Programe