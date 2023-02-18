// export const htmlCode = (component: any): string | undefined => {
//   if (component) {
//     const container = document.createElement('div');
//     const instance = new component({
//       target: container,
//       props: component.props,
//     });
//     const html = container.innerHTML;

//     instance.$destroy();
//     return html;
//   }
// };

export const copyToClipboard = (text: string | string[] | undefined): void => {
  if (text) {
    const clipboardText = Array.isArray(text) ? text.join('\n') : text;
    navigator.clipboard.writeText(clipboardText);
  }
};

export type ComponentPropertyString = `${string}_${string}`;
export const splitSearchResult = (result: ComponentPropertyString) => {
  const [id, component] = result.split('_');
  return { id, component };
};
