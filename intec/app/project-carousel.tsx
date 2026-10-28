'use client';

import { useState, type ReactElement } from 'react';
import { projects } from '@/data/site-content';
import type { Project } from '@/types/site';

export default function ProjectCarousel(): ReactElement {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const activeProject: Project = projects[activeIndex] ?? projects[0];

	function showPrevious(): void {
		setActiveIndex(
			(current: number): number => (current - 1 + projects.length) % projects.length,
		);
	}

	function showNext(): void {
		setActiveIndex((current: number): number => (current + 1) % projects.length);
	}

	return (
		<section
			className="projects section-wrap"
			id="proyectos"
			aria-labelledby="projects-heading">
			<div className="section-heading">
				<div>
					<p className="eyebrow eyebrow--dark">
						<span className="eyebrow-dot" /> INTEGRACIÓN EN ACCIÓN
					</p>
					<h2 id="projects-heading">
						Ideas que toman
						<br />
						<em>forma en el mundo real.</em>
					</h2>
				</div>
				<p className="section-intro">
					Cada instalación es distinta. El punto de partida es entender qué necesitan
					sus espacios y las personas que los usan.
				</p>
			</div>

			<div className="project-slide" aria-live="polite" aria-atomic="true">
				<div
					className={`project-art image-placeholder ${activeProject.artClass}`}
					role="img"
					aria-label={`Marcador ${activeProject.image}`}>
					<span className="image-index">{activeProject.image}</span>
					<span className="project-art-label">{activeProject.marker}</span>
					<span
						className="project-art-shape project-art-shape--one"
						aria-hidden="true"
					/>
					<span
						className="project-art-shape project-art-shape--two"
						aria-hidden="true"
					/>
					<span className="project-art-grid" aria-hidden="true" />
				</div>

				<div className="project-story">
					<p className="project-category">
						<span className="eyebrow-dot" /> {activeProject.category}
					</p>
					<h3>{activeProject.title}</h3>
					<p className="project-description">{activeProject.description}</p>
					<a className="text-link project-link" href="#contacto">
						Hablemos de tu proyecto <span aria-hidden="true">↗</span>
					</a>

					<div className="carousel-controls">
						<span className="carousel-count">
							<strong>{String(activeIndex + 1).padStart(2, '0')}</strong> /{' '}
							{String(projects.length).padStart(2, '0')}
						</span>
						<div className="carousel-buttons">
							<button
								type="button"
								onClick={showPrevious}
								aria-label="Proyecto anterior">
								←
							</button>
							<button
								type="button"
								onClick={showNext}
								aria-label="Proyecto siguiente">
								→
							</button>
						</div>
					</div>
				</div>
			</div>

			<nav className="carousel-pagination" aria-label="Paginación de proyectos">
				{projects.map((project, index) => (
					<button
						aria-current={index === activeIndex ? 'page' : undefined}
						aria-label={`Mostrar proyecto ${index + 1}: ${project.title}`}
						className={index === activeIndex ? 'is-active' : ''}
						key={project.image}
						onClick={() => setActiveIndex(index)}
						type="button">
						<span>{String(index + 1).padStart(2, '0')}</span>
						<span className="pagination-title">{project.shortLabel}</span>
					</button>
				))}
			</nav>
		</section>
	);
}
