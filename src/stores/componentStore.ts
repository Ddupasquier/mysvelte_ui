import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { buttons } from '../routes/components/buttons/constants';
import { inputs } from '../routes/components/inputs/constants';
import { cards } from '../routes/components/cards/constants';
import { popovers } from '../routes/components/popovers/constants';
import { radios } from '../routes/components/radios/constants';
import { dropdowns } from '../routes/components/dropdowns/constants';
import { loaders } from '../routes/components/loaders/constants';
import { checkboxes } from '../routes/components/checkboxes/constants';
import { parallaxes } from '../routes/components/parallaxes/constants';
import { avatars } from '../../docs/Avatar_docs';
import { accordions } from '../routes/components/accordions/constants';
import { toggles } from '../routes/components/toggles/constants';
import {imageFilters} from '../routes/components/imagefilters/constants';

// Component mapping
const componentMapping = {
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
  [key: string]: any;  // This line allows other properties
}

// High order function to push ids
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