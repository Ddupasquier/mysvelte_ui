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
import { avatars } from '../routes/components/avatars/constants';
import { accordions } from '../routes/components/accordions/constants';
import { toggles } from '../routes/components/toggles/constants';
import { imageFilters } from '../routes/components/imagefilters/constants';

export const getComponentIds = (): ComponentPropertyString[] => {
  const componentIds: ComponentPropertyString[] = [];
imageFilters.forEach((imageFilter) => {
    componentIds.push(`${imageFilter.id}_imageFilter`);
  });
toggles.forEach((toggle) => {
    componentIds.push(`${toggle.id}_toggle`);
  });
accordions.forEach((accordion) => {
    componentIds.push(`${accordion.id}_accordion`);
  });
avatars.forEach((avatar) => {
    componentIds.push(`${avatar.id}_avatar`);
  });
parallaxes.forEach((parallax) => {
    componentIds.push(`${parallax.id}_parallax`);
  });
  checkboxes.forEach((checkbox) => {
    componentIds.push(`${checkbox.id}_checkbox`);
  });
  loaders.forEach((loader) => {
    componentIds.push(`${loader.id}_loader`);
  });
  dropdowns.forEach((dropdown) => {
    componentIds.push(`${dropdown.id}_dropdown`);
  });
  radios.forEach((radio) => {
    componentIds.push(`${radio.id}_radio`);
  });
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
