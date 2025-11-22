// Auto-generated from src/lib/parallaxes/Parallax.svelte JSDoc. Do not edit by hand.
export const ParallaxPropRows = [
  {
    name: 'parallax_image!',
    description: 'URL of the image used for the parallax effect.',
    type: '{string}',
    default: '\"\"',
    nav: true,
  },
  {
    name: 'parallax_alt!',
    description: 'Alt text for the image.',
    type: '{string}',
    default: '\"\"',
    nav: true,
  },
  {
    name: 'parallax_height',
    description: 'Height of the parallax viewport.',
    type: '{string}',
    default: '\"300px\"',
    nav: true,
  },
  {
    name: 'parallax_width',
    description: 'Width of the parallax viewport.',
    type: '{string}',
    default: '\"100%\"',
    nav: true,
  },
  {
    name: 'parallax_speed',
    description: 'Parallax speed multiplier (clamped between -2 and 2).',
    type: '{number}',
    default: '0.5',
    nav: true,
  },
  {
    name: 'parallax_position',
    description: 'Starting position of the image as [x%, y%].',
    type: '{[number, number]}',
    default: '[0, 0]',
    nav: true,
  },
  {
    name: 'parallax_loadObserver',
    description: 'Show loader slot until image load completes.',
    type: '{boolean}',
    default: 'true',
    nav: true,
  },
  {
    name: 'parallax_ariaLabel',
    description: 'Accessible label for the image.',
    type: '{string}',
    default: '\"Parallax image\"',
    nav: true,
  }
];
