export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#domains', label: 'Domains' },
  { href: '#why-canonix', label: 'Why Canonix' },
  { href: '#vision', label: 'Vision' },
  { href: '#careers', label: 'Careers' },
] as const;

export const footerQuickLinks = ['About', 'Domains', 'Why Canonix', 'Vision'] as const;

export const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: '#',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z' 
  },
  { 
    name: 'Twitter', 
    href: '#',
    icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' 
  },
] as const;
