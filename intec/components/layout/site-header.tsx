import type { ReactElement } from "react";
import type { NavigationLink } from "@/types/site";

interface SiteHeaderProps {
	readonly links: readonly NavigationLink[];
}

export default function SiteHeader({ links }: SiteHeaderProps): ReactElement {
	return (
		<>
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
					{links.map((link) => (
						<a href={link.href} key={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<a className="header-contact" href="#contacto">
					Contacto <span aria-hidden="true">↗</span>
				</a>
			</header>
		</>
	);
}
