

import ProjectCarousel from "./project-carousel";

const capabilities = [
  {
    number: "01",
    title: "Edificios inteligentes",
    description:
      "Sistemas conectados que hacen que cada espacio trabaje mejor para las personas.",
    image: "Image 01",
    className: "capability-image--building",
  },
  {
    number: "02",
    title: "Operaciones eficientes",
    description:
      "Control y automatización para instalaciones más eficientes, seguras y resilientes.",
    image: "Image 02",
    className: "capability-image--operations",
  },
  {
    number: "03",
    title: "Energía responsable",
    description:
      "Decisiones basadas en datos para avanzar hacia un futuro de menor impacto.",
    image: "Image 03",
    className: "capability-image--energy",
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>Ingeniería para los espacios que vienen</p>
        <a href="#contacto">Hablemos de tu proyecto <span aria-hidden="true">↗</span></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="INTEC, inicio">
          <span className="brand-mark" aria-hidden="true">I</span>
          <span>INTEC<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#enfoque">Nuestro enfoque</a>
          <a href="#impacto">Impacto</a>
        </nav>
        <a className="header-contact" href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> INGENIERÍA · AUTOMATIZACIÓN · ENERGÍA</p>
          <h1>Hacemos que los espacios <em>funcionen mejor.</em></h1>
          <div className="hero-bottom">
            <p>Integramos tecnología y conocimiento para crear edificios e instalaciones más inteligentes, eficientes y preparados para el futuro.</p>
            <a className="round-link" href="#soluciones" aria-label="Explorar soluciones"><span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual image-placeholder image-placeholder--hero" role="img" aria-label="Marcador de imagen 00">
          <span className="image-index">Image 00</span>
          <span className="visual-coordinate">19°25&apos;57.9&quot;N<br />99°08&apos;57.1&quot;W</span>
          <div className="visual-caption"><span>INTEC / SISTEMAS CONECTADOS</span><span>01 — 04</span></div>
          <div className="visual-orbit visual-orbit--one" aria-hidden="true" />
          <div className="visual-orbit visual-orbit--two" aria-hidden="true" />
          <div className="visual-core" aria-hidden="true"><span>i</span></div>
          <span className="visual-cross visual-cross--one" aria-hidden="true">+</span>
          <span className="visual-cross visual-cross--two" aria-hidden="true">+</span>
        </div>
      </section>

      <section className="signal-strip" id="impacto" aria-label="Áreas de impacto">
        <p>UNA MIRADA INTEGRAL</p>
        <div><span>01</span> Personas primero</div>
        <div><span>02</span> Sistemas conectados</div>
        <div><span>03</span> Rendimiento medible</div>
        <span className="signal-arrow" aria-hidden="true">↘</span>
      </section>

      <section className="solutions section-wrap" id="soluciones">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark"><span className="eyebrow-dot" /> LO QUE HACEMOS</p>
            <h2>Un sistema.<br /><em>Mejores posibilidades.</em></h2>
          </div>
          <p className="section-intro">Diseñamos soluciones que unen edificios, energía y operaciones en una sola visión.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <div className={`capability-image image-placeholder ${capability.className}`} role="img" aria-label={`Marcador ${capability.image}`}>
                <span className="image-index">{capability.image}</span>
                <span className="image-corner" aria-hidden="true">↗</span>
                <span className="image-lines" aria-hidden="true" />
              </div>
              <div className="capability-meta"><span>{capability.number} / 03</span><span>INTEC</span></div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ProjectCarousel />

      <section className="sectors" aria-labelledby="sectors-heading">
        <div className="sectors-heading">
          <p className="eyebrow eyebrow--dark"><span className="eyebrow-dot" /> EXPERIENCIA QUE SE ADAPTA</p>
          <h2 id="sectors-heading">Cada sector tiene<br /><em>su propia energía.</em></h2>
        </div>
        <div className="sector-list">
          <a href="#contacto"><span>01</span> Edificios comerciales <span aria-hidden="true">↗</span></a>
          <a href="#contacto"><span>02</span> Salud y bienestar <span aria-hidden="true">↗</span></a>
          <a href="#contacto"><span>03</span> Educación <span aria-hidden="true">↗</span></a>
          <a href="#contacto"><span>04</span> Industria e infraestructura <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="approach" id="enfoque">
        <div className="approach-label"><span className="eyebrow-dot" /> UNA MEJOR FORMA DE AVANZAR</div>
        <div className="approach-content">
          <h2>La tecnología importa.<br /><em>Lo que hace posible, más.</em></h2>
          <div className="approach-detail">
            <p>Partimos de cómo las personas viven y trabajan. Después conectamos los sistemas, los datos y la experiencia para convertir complejidad en progreso tangible.</p>
            <a className="text-link" href="#contacto">Conoce nuestro enfoque <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="approach-index" aria-hidden="true">INTEC / 2025</div>
      </section>

      <section className="perspectives section-wrap" aria-labelledby="perspectives-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark"><span className="eyebrow-dot" /> PERSPECTIVAS</p>
            <h2 id="perspectives-heading">Preguntas para<br /><em>imaginar lo que sigue.</em></h2>
          </div>
          <a className="text-link perspectives-link" href="#contacto">Conversemos <span aria-hidden="true">↗</span></a>
        </div>
        <div className="perspective-list">
          <article>
            <span className="perspective-number">01</span>
            <div><p>DISEÑO INTEGRADO</p><h3>¿Qué cambia cuando los sistemas se diseñan para trabajar juntos?</h3></div>
            <span className="perspective-arrow" aria-hidden="true">↗</span>
          </article>
          <article>
            <span className="perspective-number">02</span>
            <div><p>ENERGÍA Y DATOS</p><h3>De medir el consumo a comprender cómo mejorar.</h3></div>
            <span className="perspective-arrow" aria-hidden="true">↗</span>
          </article>
          <article>
            <span className="perspective-number">03</span>
            <div><p>EXPERIENCIA HUMANA</p><h3>Los espacios inteligentes empiezan por escuchar a las personas.</h3></div>
            <span className="perspective-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <footer className="site-footer" id="contacto">
        <a className="brand brand--footer" href="#inicio">
          <span className="brand-mark" aria-hidden="true">I</span>
          <span>INTEC<span className="brand-period">.</span></span>
        </a>
        <p>Construimos espacios<br />listos para lo que sigue.</p>
        <a className="footer-contact" href="mailto:hola@intec.example">Hablemos <span aria-hidden="true">↗</span></a>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <a href="#soluciones">Soluciones</a><a href="#proyectos">Proyectos</a><a href="#enfoque">Enfoque</a>
        </nav>
        <span className="footer-note">© 2025 INTEC · INGENIERÍA CONECTADA</span>
      </footer>
    </main>
  );
}