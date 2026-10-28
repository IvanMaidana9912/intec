/** Identificadores de las secciones presentes en la página. */
export type SectionId =  | "inicio"  | "impacto"  | "soluciones"  | "proyectos"  | "enfoque"  | "contacto";

/** Enlaces internos válidos de INTEC. */
export type SectionHref = `#${SectionId}`;

/** Nombre que se muestra mientras se usan imágenes de prueba. */
export type ImagePlaceholder = `Image ${string}`;

export interface NavigationLink {
  readonly label: string;
  readonly href: SectionHref;
}

export interface NumberedItem {
  /** Se guarda como texto para preservar el cero inicial (01, 02...). */
  readonly number: string;
}

export type CapabilityImageClass =  | "capability-image--building"  | "capability-image--operations"  | "capability-image--energy";

export interface Capability extends NumberedItem {
  readonly title: string;
  readonly description: string;
  readonly image: ImagePlaceholder;
  readonly className: CapabilityImageClass;
}

export type ProjectArtClass =  | "project-art--building"  | "project-art--energy"  | "project-art--operations";

export interface Project {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image: ImagePlaceholder;
  readonly artClass: ProjectArtClass;
  readonly marker: string;
  
  readonly shortLabel: string;
}

export interface ImpactArea extends NumberedItem {
  readonly label: string;
}

export interface Sector extends NumberedItem {
  readonly label: string;
  readonly href: SectionHref;
}

export interface Perspective extends NumberedItem {
  readonly category: string;
  readonly title: string;
}

/** Impide declarar un carrusel sin proyectos. */
export type NonEmptyReadonlyArray<T> = readonly [T, ...T[]];
