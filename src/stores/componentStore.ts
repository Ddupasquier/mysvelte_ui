import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { buttons } from '../routes/components/buttons/constants';
import { inputs } from '../routes/components/inputs/constants';
import { segments } from '../routes/components/segments/constants';
import { cards } from '../routes/components/cards/constants';
import { switches } from '../routes/components/switches/constants';
import { radials } from '../routes/components/radials/constants';

export const getComponentIds = (): ComponentPropertyString[] => {
  const componentIds: ComponentPropertyString[] = [];
  radials.forEach((radial) => {
    componentIds.push(`${radial.id}_radial`);
  });
  switches.forEach((toggle) => {
    componentIds.push(`${toggle.id}_switch`);
  });
  buttons.forEach((button) => {
    componentIds.push(`${button.id}_button`);
  });
  inputs.forEach((input) => {
    componentIds.push(`${input.id}_input`);
  });
  segments.forEach((segment) => {
    componentIds.push(`${segment.id}_segment`);
  });
  cards.forEach((card) => {
    componentIds.push(`${card.id}_card`);
  });
  return componentIds;
};

export const componentIds: Writable<ComponentPropertyString[]> = writable(
  getComponentIds()
);
