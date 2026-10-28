import type { ReactElement } from 'react';
import type { NavigationLink } from '@/types/site';

interface SiteFooterProps {
	readonly links: readonly NavigationLink[];
}

export default function SiteFooter({ links }: SiteFooterProps): ReactElement {
	return (
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
				{links.map((link) => (
					<a href={link.href} key={link.href}>
						{link.label}
					</a>
				))}
			</nav>
			<span className="footer-note">© 2025 INTEC · INGENIERÍA CONECTADA</span>
		</footer>
	);
}
