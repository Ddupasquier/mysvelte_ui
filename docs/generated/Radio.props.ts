// Auto-generated from src/lib/radios/Radio.svelte JSDoc. Do not edit by hand.
export const RadioPropRows = [
  {
    name: 'radio_options!',
    description: 'Options for the radio group (string or object with label).',
    type: '{(string | { label: string; [key: string]: any })[]}',
    default: '[]',
    nav: true,
  },
  {
    name: 'radio_selected',
    description: 'Currently selected option.',
    type: '{string | { label: string; [key: string]: any } | null}',
    default: 'null',
    nav: true,
  },
  {
    name: 'radio_labelColor',
    description: 'Text color for labels.',
    type: '{string}',
    default: '\"#000\"',
    nav: true,
  },
  {
    name: 'radio_color',
    description: 'Border color for the indicator.',
    type: '{string}',
    default: '\"#000\"',
    nav: true,
  },
  {
    name: 'radio_size',
    description: 'Indicator size preset.',
    type: '{"small" | "medium" | "large"}',
    default: '\"medium\"',
    nav: true,
  },
  {
    name: 'radio_disabled',
    description: 'Disable the radio group.',
    type: '{boolean}',
    default: 'false',
    nav: true,
  },
  {
    name: 'radio_groupId',
    description: 'Name\/id for grouping the radios.',
    type: '{string}',
    default: '\"radio-group\"',
    nav: true,
  },
  {
    name: 'radio_ariaLabel',
    description: 'Fired when selection changes; detail contains the new value.',
    type: '{string}',
    default: '\"Radio group\"',
    nav: true,
  }
];
