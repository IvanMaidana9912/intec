"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import type { NavigationLink } from "@/types/site";

interface SiteHeaderProps {
  readonly links: readonly NavigationLink[];
}

export default function SiteHeader({ links }: SiteHeaderProps): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLElement>(null);

  const closeMenu = (): void => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow: string = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menuLinks: NodeListOf<HTMLAnchorElement> | undefined =
      menuPanelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
    menuLinks?.item(0)?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const firstElement: HTMLAnchorElement | null = brandRef.current;
      const lastElement: HTMLAnchorElement | null =
        menuLinks?.item((menuLinks?.length ?? 0) - 1) ?? null;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    const mobileQuery: MediaQueryList = window.matchMedia("(max-width: 760px)");
    const handleViewportChange = (event: MediaQueryListEvent): void => {
      if (!event.matches) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    mobileQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      mobileQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="announcement">
        <p>Ingeniería para los espacios que vienen</p>
        <a href="#contacto">
          Hablemos de tu proyecto <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="INTEC, inicio"
          ref={brandRef}
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            I
          </span>
          <span>
            INTEC<span className="brand-period">.</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          {links.map((link: NavigationLink) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contacto">
          Contacto <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`mobile-menu-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={(): void => setIsMenuOpen((previous: boolean): boolean => !previous)}
          ref={menuButtonRef}
        >
          <span className="mobile-menu-toggle-line" aria-hidden="true" />
          <span className="mobile-menu-toggle-line" aria-hidden="true" />
          <span className="mobile-menu-toggle-line" aria-hidden="true" />
        </button>

        <nav
          id="mobile-navigation"
          ref={menuPanelRef}
          className={`mobile-menu-panel${isMenuOpen ? " is-open" : ""}`}
          aria-label="Navegación móvil"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="mobile-menu-content">
            <p className="mobile-menu-eyebrow">EXPLORÁ INTEC</p>
            <div className="mobile-menu-links">
              {links.map((link: NavigationLink, index: number) => (
                <a href={link.href} key={link.href} onClick={closeMenu}>
                  <span className="mobile-menu-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{link.label}</span>
                  <span className="mobile-menu-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <a className="mobile-menu-contact" href="#contacto" onClick={closeMenu}>
              Hablemos de tu proyecto <span aria-hidden="true">↗</span>
            </a>
            <p className="mobile-menu-signature">INGENIERÍA PARA LOS ESPACIOS QUE VIENEN</p>
          </div>
        </nav>
      </header>
    </>
  );
}
