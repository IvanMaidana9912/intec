import type {
  Capability,
  ImpactArea,
  NavigationLink,
  NonEmptyReadonlyArray,
  Perspective,
  Project,
  Sector,
} from "@/types/site";

export const mainNavigation: readonly NavigationLink[] = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nuestro enfoque", href: "#enfoque" },
  { label: "Impacto", href: "#impacto" },
];

export const footerNavigation: readonly NavigationLink[] = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Enfoque", href: "#enfoque" },
];

export const capabilities: readonly Capability[] = [
  {
    number: "01",
    title: "Edificios inteligentes",
    description:
      "Sistemas conectados que hacen que cada espacio trabaje mejor para las personas.",
    image: "Image 01",
    className: "capability-image--building",
  },
  {
    number: "02",
    title: "Operaciones eficientes",
    description:
      "Control y automatización para instalaciones más eficientes, seguras y resilientes.",
    image: "Image 02",
    className: "capability-image--operations",
  },
  {
    number: "03",
    title: "Energía responsable",
    description:
      "Decisiones basadas en datos para avanzar hacia un futuro de menor impacto.",
    image: "Image 03",
    className: "capability-image--energy",
  },
];

export const impactAreas: readonly ImpactArea[] = [
  { number: "01", label: "Personas primero" },
  { number: "02", label: "Sistemas conectados" },
  { number: "03", label: "Rendimiento medible" },
];

export const projects: NonEmptyReadonlyArray<Project> = [
  {
    category: "EDIFICIOS INTELIGENTES · DISEÑO INTEGRADO",
    title: "Un edificio que trabaja en sintonía con las personas.",
    description:
      "Conectar iluminación, climatización y control permite crear espacios más cómodos y operaciones más sencillas.",
    image: "Image 04",
    artClass: "project-art--building",
    marker: "01 / ESPACIOS",
    shortLabel: "ESPACIOS",
  },
  {
    category: "ENERGÍA · GESTIÓN ACTIVA",
    title: "Cada dato abre una nueva oportunidad de mejorar.",
    description:
      "La visibilidad del consumo ayuda a los equipos a entender sus instalaciones y tomar decisiones con más contexto.",
    image: "Image 05",
    artClass: "project-art--energy",
    marker: "02 / ENERGÍA",
    shortLabel: "ENERGÍA",
  },
  {
    category: "OPERACIONES · AUTOMATIZACIÓN",
    title: "Tecnología conectada para operaciones más claras.",
    description:
      "Integrar sistemas críticos ofrece una visión común para anticipar necesidades y responder con agilidad.",
    image: "Image 06",
    artClass: "project-art--operations",
    marker: "03 / OPERACIONES",
    shortLabel: "OPERACIONES",
  },
];

export const sectors: readonly Sector[] = [
  { number: "01", label: "Edificios comerciales", href: "#contacto" },
  { number: "02", label: "Salud y bienestar", href: "#contacto" },
  { number: "03", label: "Educación", href: "#contacto" },
  { number: "04", label: "Industria e infraestructura", href: "#contacto" },
];

export const perspectives: readonly Perspective[] = [
  {
    number: "01",
    category: "DISEÑO INTEGRADO",
    title: "¿Qué cambia cuando los sistemas se diseñan para trabajar juntos?",
  },
  {
    number: "02",
    category: "ENERGÍA Y DATOS",
    title: "De medir el consumo a comprender cómo mejorar.",
  },
  {
    number: "03",
    category: "EXPERIENCIA HUMANA",
    title: "Los espacios inteligentes empiezan por escuchar a las personas.",
  },
];
