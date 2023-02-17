import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { buttons } from '../../../src/routes/components/buttons/constants';
import { inputs } from '../../../src/routes/components/inputs/constants';
import { segments } from '../../../src/routes/components/segments/constants';

export const getComponentIds = (): ComponentPropertyString[] => {
  const componentIds: ComponentPropertyString[] = [];
  buttons.forEach((button) => {
    componentIds.push(`${button.id}_button`);
  });
  inputs.forEach((input) => {
    componentIds.push(`${input.id}_input`);
  });
  segments.forEach((segment) => {
    componentIds.push(`${segment.id}_segment`);
  });
  return componentIds;
};

export const componentIds: Writable<ComponentPropertyString[]> = writable(
  getComponentIds()
);
