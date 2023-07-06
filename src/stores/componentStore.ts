import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { buttons } from '../../docs/Button_docs';
import { inputs } from '../../docs/Input_docs';
import { cards } from '../../docs/Card_docs';
import { popovers } from '../routes/components/popovers/constants';
import { radios } from '../routes/components/radios/constants';
import { dropdowns } from '../routes/components/dropdowns/constants';
import { loaders } from '../../docs/Loader_docs';
import { checkboxes } from '../../docs/Checkbox_docs';
import { parallaxes } from '../../docs/Parallax_docs';
import { avatars } from '../../docs/Avatar_docs';
import { accordions } from '../../docs/Accordion_docs';
import { toggles } from '../routes/components/toggles/constants';
import { imageFilters } from '../../docs/ImageFilter_docs';
import { textareas } from '../../docs/Textarea_docs';

// Component mapping
const componentMapping = {
  textareas,
  buttons,
  inputs,
  cards,
  popovers,
  radios,
  dropdowns,
  loaders,
  checkboxes,
  parallaxes,
  avatars,
  accordions,
  toggles,
  imageFilters,
};

interface ComponentType {
  id: string;
  [key: string]: any;
}

const pushIds = (arr: ComponentType[], suffix: string): string[] =>
  arr.map(({ id }) => `${id}_${suffix}`);

export const getComponentIds = (): string[] => {
  const componentIds: string[] = [];

  Object.entries(componentMapping).forEach(([key, value]) => {
    componentIds.push(...pushIds(value, key));
  });

  return componentIds;
};

export const componentIds: Writable<string[]> = writable(getComponentIds());