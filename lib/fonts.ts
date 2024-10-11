import { Cinzel, Caveat } from 'next/font/google';

export const cinzel = Cinzel({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
});

export const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
});
