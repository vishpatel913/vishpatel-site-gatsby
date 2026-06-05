// No top-level import/export — keeps these as GLOBAL ambient module
// declarations. (A top-level import would turn this file into a module and
// the wildcard declarations would stop applying globally.)

// Inline SVGs (gatsby-plugin-react-svg) are imported as React components.
declare module "*.inline.svg" {
  const content: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
  export default content;
}

// Plain SVG imports resolve to their URL.
declare module "*.svg" {
  const url: string;
  export default url;
}

// Static file imports (e.g. PDFs) resolve to their URL.
declare module "*.pdf" {
  const url: string;
  export default url;
}

// Static image imports (e.g. .png) resolve to their URL.
declare module "*.png" {
  const url: string;
  export default url;
}
