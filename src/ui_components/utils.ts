export const copyToClipboard = (text: string | string[] | undefined): void => {
  if (text) {
    const clipboardText = Array.isArray(text) ? text.join('\n') : text;
    navigator.clipboard.writeText(clipboardText);
  }
};

export const splitSearchResult = (result: ComponentPropertyString) => {
  const [id, component] = result.split('_');
  return { id, component };
};
