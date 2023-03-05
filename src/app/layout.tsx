import localFont from "next/font/local";

const nunito = localFont({
  src: '../../public/fonts/NunitoVariableFontWght.ttf',
  display: 'swap',
  variable: '--font-ui',
});

const nunitoItalic = localFont({
  src: '../../public/fonts/NunitoItalicVariableFontWght.ttf',
  display: 'swap',
  variable: '--font-ui-italic',
});


const catamaran = localFont({
  src: '../../public/fonts/CatamaranVariableFontWght.ttf',
  display: 'swap',
  variable: '--font-headline',
});

const merriweather = localFont({
  src: [
    {
      path: '../../public/fonts/MerriweatherLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MerriweatherLightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/MerriweatherRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MerriweatherBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-article',
});

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${catamaran.variable} ${nunito.variable} ${nunitoItalic.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
