import type { ReactElement } from 'react';
import type { ImpactArea } from '@/types/site';

interface ImpactStripProps {
	readonly areas: readonly ImpactArea[];
}

export default function ImpactStrip({ areas }: ImpactStripProps): ReactElement {
	return (
		<section className="signal-strip" id="impacto" aria-label="Áreas de impacto">
			<p>UNA MIRADA INTEGRAL</p>
			{areas.map((area) => (
				<div key={area.number}>
					<span>{area.number}</span> {area.label}
				</div>
			))}
			<span className="signal-arrow" aria-hidden="true">
				↘
			</span>
		</section>
	);
}
