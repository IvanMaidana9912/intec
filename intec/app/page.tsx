import type { ReactElement } from 'react';
import {
	capabilities,
	footerNavigation,
	impactAreas,
	mainNavigation,
	perspectives,
	sectors,
} from '@/data/site-content';
import ProjectCarousel from './project-carousel';

export default function Home(): ReactElement {
	return (
		<main>
			<div className="announcement">
				<p>Ingeniería para los espacios que vienen</p>
				<a href="#contacto">
					Hablemos de tu proyecto <span aria-hidden="true">↗</span>
				</a>
			</div>

			<header className="site-header">
				<a className="brand" href="#inicio" aria-label="INTEC, inicio">
					<span className="brand-mark" aria-hidden="true">
						I
					</span>
					<span>
						INTEC<span className="brand-period">.</span>
					</span>
				</a>
				<nav className="main-nav" aria-label="Navegación principal">
					{mainNavigation.map((link) => (
						<a href={link.href} key={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<a className="header-contact" href="#contacto">
					Contacto <span aria-hidden="true">↗</span>
				</a>
			</header>

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
							instalaciones más inteligentes, eficientes y preparados para el
							futuro.
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

			<section className="signal-strip" id="impacto" aria-label="Áreas de impacto">
				<p>UNA MIRADA INTEGRAL</p>
				{impactAreas.map((area) => (
					<div key={area.number}>
						<span>{area.number}</span> {area.label}
					</div>
				))}
				<span className="signal-arrow" aria-hidden="true">
					↘
				</span>
			</section>

			<section className="solutions section-wrap" id="soluciones">
				<div className="section-heading">
					<div>
						<p className="eyebrow eyebrow--dark">
							<span className="eyebrow-dot" /> LO QUE HACEMOS
						</p>
						<h2>
							Un sistema.
							<br />
							<em>Mejores posibilidades.</em>
						</h2>
					</div>
					<p className="section-intro">
						Diseñamos soluciones que unen edificios, energía y operaciones en una
						sola visión.
					</p>
				</div>
				<div className="capability-grid">
					{capabilities.map((capability) => (
						<article className="capability" key={capability.number}>
							<div
								className={`capability-image image-placeholder ${capability.className}`}
								role="img"
								aria-label={`Marcador ${capability.image}`}>
								<span className="image-index">{capability.image}</span>
								<span className="image-corner" aria-hidden="true">
									↗
								</span>
								<span className="image-lines" aria-hidden="true" />
							</div>
							<div className="capability-meta">
								<span>{capability.number} / 03</span>
								<span>INTEC</span>
							</div>
							<h3>{capability.title}</h3>
							<p>{capability.description}</p>
						</article>
					))}
				</div>
			</section>

			<ProjectCarousel />

			<section className="sectors" aria-labelledby="sectors-heading">
				<div className="sectors-heading">
					<p className="eyebrow eyebrow--dark">
						<span className="eyebrow-dot" /> EXPERIENCIA QUE SE ADAPTA
					</p>
					<h2 id="sectors-heading">
						Cada sector tiene
						<br />
						<em>su propia energía.</em>
					</h2>
				</div>
				<div className="sector-list">
					{sectors.map((sector) => (
						<a href={sector.href} key={sector.number}>
							<span>{sector.number}</span> {sector.label}{' '}
							<span aria-hidden="true">↗</span>
						</a>
					))}
				</div>
			</section>

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
							Partimos de cómo las personas viven y trabajan. Después conectamos
							los sistemas, los datos y la experiencia para convertir complejidad
							en progreso tangible.
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

			<section
				className="perspectives section-wrap"
				aria-labelledby="perspectives-heading">
				<div className="section-heading">
					<div>
						<p className="eyebrow eyebrow--dark">
							<span className="eyebrow-dot" /> PERSPECTIVAS
						</p>
						<h2 id="perspectives-heading">
							Preguntas para
							<br />
							<em>imaginar lo que sigue.</em>
						</h2>
					</div>
					<a className="text-link perspectives-link" href="#contacto">
						Conversemos <span aria-hidden="true">↗</span>
					</a>
				</div>
				<div className="perspective-list">
					{perspectives.map((perspective) => (
						<article key={perspective.number}>
							<span className="perspective-number">{perspective.number}</span>
							<div>
								<p>{perspective.category}</p>
								<h3>{perspective.title}</h3>
							</div>
							<span className="perspective-arrow" aria-hidden="true">
								↗
							</span>
						</article>
					))}
				</div>
			</section>

			<footer className="site-footer" id="contacto">
				<a className="brand brand--footer" href="#inicio">
					<span className="brand-mark" aria-hidden="true">
						I
					</span>
					<span>
						INTEC<span className="brand-period">.</span>
					</span>
				</a>
				<p>
					Construimos espacios
					<br />
					listos para lo que sigue.
				</p>
				<a className="footer-contact" href="mailto:hola@intec.example">
					Hablemos <span aria-hidden="true">↗</span>
				</a>
				<nav className="footer-nav" aria-label="Navegación del pie de página">
					{footerNavigation.map((link) => (
						<a href={link.href} key={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<span className="footer-note">© 2025 INTEC · INGENIERÍA CONECTADA</span>
			</footer>
		</main>
	);
}
