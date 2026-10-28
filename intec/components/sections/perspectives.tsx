import type { ReactElement } from "react";
import type { Perspective } from "@/types/site";

interface PerspectivesProps {
	readonly perspectives: readonly Perspective[];
}

export default function Perspectives({ perspectives }: PerspectivesProps): ReactElement {
	return (
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
	);
}
