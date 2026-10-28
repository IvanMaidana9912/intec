import type { ReactElement } from 'react';
import type { Sector } from '@/types/site';

interface SectorsProps {
	readonly sectors: readonly Sector[];
}

export default function Sectors({ sectors }: SectorsProps): ReactElement {
	return (
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
	);
}
