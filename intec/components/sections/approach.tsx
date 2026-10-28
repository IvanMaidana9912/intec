import type { ReactElement } from 'react';

export default function Approach(): ReactElement {
	return (
		<section className="approach" id="enfoque">
			<div className="approach-label">
				<span className="eyebrow-dot" /> UNA MEJOR FORMA DE AVANZAR
			</div>
			<div className="approach-content">
				<h2>
					La tecnología importa.
					<br />
					<em>Lo que hace posible, más.</em>
				</h2>
				<div className="approach-detail">
					<p>
						Partimos de cómo las personas viven y trabajan. Después conectamos los
						sistemas, los datos y la experiencia para convertir complejidad en
						progreso tangible.
					</p>
					<a className="text-link" href="#contacto">
						Conoce nuestro enfoque <span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>
			<div className="approach-index" aria-hidden="true">
				INTEC / 2025
			</div>
		</section>
	);
}
