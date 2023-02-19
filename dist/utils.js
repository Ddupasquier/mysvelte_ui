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
export const copyToClipboard = (text) => {
    if (text) {
        const clipboardText = Array.isArray(text) ? text.join('\n') : text;
        navigator.clipboard.writeText(clipboardText);
    }
};
export const splitSearchResult = (result) => {
    const [id, component] = result.split('_');
    return { id, component };
};
