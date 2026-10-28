import type { ReactElement } from 'react';
import type { Capability } from '@/types/site';

interface SolutionsProps {
	readonly capabilities: readonly Capability[];
}

export default function Solutions({ capabilities }: SolutionsProps): ReactElement {
	return (
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
					Diseñamos soluciones que unen edificios, energía y operaciones en una sola
					visión.
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
							<span>
								{capability.number} /{' '}
								{String(capabilities.length).padStart(2, '0')}
							</span>
							<span>INTEC</span>
						</div>
						<h3>{capability.title}</h3>
						<p>{capability.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
