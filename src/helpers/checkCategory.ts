type Category = 'home' | 'about' | 'blog' | 'works';

export const checkCategory = (pagePath: string): Category | '' => {
  if (pagePath === '/') return 'home';

  if (pagePath.startsWith('/about')) {
    return 'about';
  } else if (pagePath.startsWith('/blog')) {
    return 'blog';
  } else if (pagePath.startsWith('/works')) {
    return 'works';
  }

  return '';
};
