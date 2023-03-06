import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { buttons } from '../routes/components/buttons/constants';
import { inputs } from '../routes/components/inputs/constants';
import { cards } from '../routes/components/cards/constants';
import { popovers } from '../routes/components/popovers/constants';

export const getComponentIds = (): ComponentPropertyString[] => {
  const componentIds: ComponentPropertyString[] = [];
popovers.forEach((popover) => {
    componentIds.push(`${popover.id}_popover`);
  });
  buttons.forEach((button) => {
    componentIds.push(`${button.id}_button`);
  });
  inputs.forEach((input) => {
    componentIds.push(`${input.id}_input`);
  });
  cards.forEach((card) => {
    componentIds.push(`${card.id}_card`);
  });
  return componentIds;
};

export const componentIds: Writable<ComponentPropertyString[]> = writable(
  getComponentIds()
);
