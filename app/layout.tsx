import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {Roboto} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer'

const roboto = Roboto({subsets: ['latin'],weight: "700"});

export const metadata = {
  title: 'Blog',
  description: 'The Blog Discription',
};

export default function RootLayout({children}:{children:any}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
        />
      </head>
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );}