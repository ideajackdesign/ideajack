export const filterHtmlTag = (content: string): string => {
  return content.replace(/<.*?>/gu, '');
};
