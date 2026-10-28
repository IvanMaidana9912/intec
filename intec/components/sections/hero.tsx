import type { ReactElement } from 'react';

export default function Hero(): ReactElement {
	return (
		<section className="hero" id="inicio">
			<div className="hero-copy">
				<p className="eyebrow">
					<span className="eyebrow-dot" /> INGENIERÍA · AUTOMATIZACIÓN · ENERGÍA
				</p>
				<h1>
					Hacemos que los espacios <em>funcionen mejor.</em>
				</h1>
				<div className="hero-bottom">
					<p>
						Integramos tecnología y conocimiento para crear edificios e
						instalaciones más inteligentes, eficientes y preparados para el futuro.
					</p>
					<a
						className="round-link"
						href="#soluciones"
						aria-label="Explorar soluciones">
						<span aria-hidden="true">↓</span>
					</a>
				</div>
			</div>

			<div
				className="hero-visual image-placeholder image-placeholder--hero"
				role="img"
				aria-label="Marcador de imagen 00">
				<span className="image-index">Image 00</span>
				<span className="visual-coordinate">
					19°25&apos;57.9&quot;N
					<br />
					99°08&apos;57.1&quot;W
				</span>
				<div className="visual-caption">
					<span>INTEC / SISTEMAS CONECTADOS</span>
					<span>01 — 04</span>
				</div>
				<div className="visual-orbit visual-orbit--one" aria-hidden="true" />
				<div className="visual-orbit visual-orbit--two" aria-hidden="true" />
				<div className="visual-core" aria-hidden="true">
					<span>i</span>
				</div>
				<span className="visual-cross visual-cross--one" aria-hidden="true">
					+
				</span>
				<span className="visual-cross visual-cross--two" aria-hidden="true">
					+
				</span>
			</div>
		</section>
	);
}
