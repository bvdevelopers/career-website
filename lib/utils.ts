export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const truncate = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export const formatPhone = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const generateSlug = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
