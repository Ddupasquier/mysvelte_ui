import { github, discord } from "./ui_components/icons";

export const NavComponentOptions = [
  {
    name: 'Tables',
    path: '?items=tables',
 },
  {
    name: 'Modals',
    path: '?items=modals',
  },
  {
    name: 'Textareas',
    path: '?items=textareas',
  },
  {
    name: 'ImageFilters',
    path: '?items=imagefilters',
  },
  {
    name: 'Toggles',
    path: '?items=toggles',
  },
  {
    name: 'Accordions',
    path: '?items=accordions',
  },
  {
    name: 'Avatars',
    path: '?items=avatars',
  },
  {
    name: 'Parallaxes',
    path: '?items=parallaxes',
  },
  {
    name: 'Checkboxes',
    path: '?items=checkboxes',
  },
  {
    name: 'Loaders',
    path: '?items=loaders',
  },
  // {
  //   name: 'Dropdowns',
  //   path: '?items=dropdowns',
  // },
  {
    name: 'Radios',
    path: '?items=radios',
  },
  {
    name: 'Popovers',
    path: '?items=popovers',
  },
  {
    name: 'Buttons',
    path: '?items=buttons',
  },
  {
    name: 'Inputs',
    path: '?items=inputs',
  },
  {
    name: 'Cards',
    path: '?items=cards',
  },
];

export const links = [
  {
    name: 'Github',
    icon: github,
    link: 'https://github.com/Ddupasquier/mysvelte_ui'
  },
  {
    name: 'Discord',
    icon: discord,
    link: 'https://discord.gg/5YV3ZVMnKX'
  },
  {
    name: 'NPM',
    icon: 'https://img.shields.io/npm/v/mysvelte-ui.svg?colorB=FF3579',
    link: 'https://www.npmjs.com/package/mysvelte-ui'
  },
]