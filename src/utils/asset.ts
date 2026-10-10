/**
 * Utility to resolve asset URLs with the configured Vite base path.
 * When deployed on GitHub Pages (/K-S-Tours-Sri-Lanka/), prefixes paths with /K-S-Tours-Sri-Lanka/.
 * When deployed on custom root domain (e.g. www.kstourssrilanka.com), prefixes with /.
 */
export const assetUrl = (path: string | undefined): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (base && cleanPath.startsWith(`${base}/`)) {
    return cleanPath;
  }
  return `${base}${cleanPath}`;
};
