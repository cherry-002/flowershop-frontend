import localFont from 'next/font/local';

const VazirFont = localFont({
  src: [
    {
      path: '../assets/fonts/Vazirmatn-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Vazirmatn-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Vazirmatn-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Vazirmatn-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Vazirmatn-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Vazirmatn-Light.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-Vazir',
});


export default VazirFont;
