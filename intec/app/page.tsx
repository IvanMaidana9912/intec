import type { ReactElement } from 'react';
import {
	capabilities,
	footerNavigation,
	impactAreas,
	mainNavigation,
	perspectives,
	projects,
	sectors,
} from '@/data/site-content';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import Approach from '@/components/sections/approach';
import Hero from '@/components/sections/hero';
import ImpactStrip from '@/components/sections/impact-strip';
import Perspectives from '@/components/sections/perspectives';
import ProjectCarousel from '@/components/sections/project-carousel';
import Sectors from '@/components/sections/sectors';
import Solutions from '@/components/sections/solutions';

export default function Home(): ReactElement {
	return (
		<main>
			<SiteHeader links={mainNavigation} />
			<Hero />
			<ImpactStrip areas={impactAreas} />
			<Solutions capabilities={capabilities} />
			<ProjectCarousel projects={projects} />
			<Sectors sectors={sectors} />
			<Approach />
			<Perspectives perspectives={perspectives} />
			<SiteFooter links={footerNavigation} />
		</main>
	);
}
