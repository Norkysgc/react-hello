import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 gy-2">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://pepedivecenter.com/images/Articulos/Curso_Primeros_Auxilios.jpg"
							cardTitle="Buceo Recreativo"
							cardDescription="El buceo, es el acto por medio del cual el ser humano se sumerge en el agua, ya sea el mar, un lago, un río, una cantera inundada o una piscina, con el fin de desarrollar una actividad deportiva, profesional, científica o militar con o sin ayuda de equipos especiales. Se denomina escafandrismo al buceo con escafandra, mientras que al buceo a pulmón (sin aparatos de respiración) se le llama apnea o buceo libre. El término submarinismo define con exactitud la práctica del buceo en el mar, que es además, y con creces, el buceo más practicado en todo el mundo."
							buttonUrl="https://es.wikipedia.org/wiki/Buceo"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://www.nauticalnewstoday.com/wp-content/uploads/2017/03/Orda-cave-900x595.jpg"
							cardTitle="Buceo en Cuevas"
							cardDescription="El buceo en cuevas es una especialización para el buceador aventurero. El buceador aprende a explorar cuevas submarinas de forma responsable. Hay muchas razones para considerar esta especializacion. En primer lugar,  el agua en las cuevas es por lo general muy clara y las formaciones rocosas son hermosas. Además hay flora y fuana especiales en las cuevas submarinas."
							buttonUrl="http://www.snorkelybuceo.com/buceo-en-cuevas-y-cavernas/#:~:text=El%20buceo%20en%20cuevas%20es,las%20formaciones%20rocosas%20son%20hermosas."
							buttonLabel="Articulo Buceo en Cuevas"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://costaricadivers.com/wp-content/uploads/2020/07/Technical-diving-what-it-is-and-how-to-become-a-technical-diver.-3.jpg"
							cardTitle="Buceo Tecnico"
							cardDescription="El buceo técnico te permite ampliar tus límites más allá del buceo recreativo «sin paradas». Podrás planear inmersiones más largas en menor profundidad o en una variedad más amplia de lugares y a profundidades más avanzadas. El buceo técnico (tec) te permite expandir enormemente tus habilidades y conocimientos y amplía el número de oportunidades para vivir nuevas experiencias y explorar lugares a los que muy pocas personas pueden acceder. "
							buttonUrl="https://www.padi.com/es/education/technical-diving"
							buttonLabel="Go to Padi"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://aquaworld.com.mx/wp-content/uploads/2021/04/buceo-en-naufragios-toda-una-experiencia-en-cancun_1100x619.jpeg"
							cardTitle="Buceo en Naufragios"
							cardDescription="El buceo en naufragios es una de las ramas del buceo recreativo en el cual se exploran los restos de barcos, aviones u otras estructuras artificiales. Estas estructuras submarinas pueden ser el resultado de accidentes o bien haber sido colocadas allí intencionalmente para formar arrecifes artificiales.

							Algunos buzos opinan que el buceo en Naufragios es particularmente especial porque nos transporta en el tiempo y nos permite sentir, ver e imaginar las cosas que ocurrieron antes de que esas estructuras se aferraran al lecho marino para siempre. Es como visitar un mundo que antes fué y quedó inmóvil bajo el sonido de las profundidades marinas."
							buttonUrl="https://www.padi.com/es/cursos/wreck-diver"
							buttonLabel="Go to Padi"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with ❤️ using React.js - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
