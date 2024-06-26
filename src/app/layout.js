import Link from 'next/link'
import Scroll from './components/scrollToTop';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Contemplative Cavalier",
  description: "The website of the Contemplative Cavalier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + 'font-mono overflow-x-hidden'}>
        <div className='h-screen'>
          <div className="flex justify-center">
            <div className="gradient absolute"></div>
          </div>
            <div className="flex justify-center">
                <h1 className='text-4xl sm:text-6xl lg:text-8xl mt-15vh sm:mt-30vh text-center title-fly-in title-shadow'>THE CONTEMPLATIVE CAVALIER</h1>
            </div>
            <div className='flex flex-col sm:flex-row text-center justify-center gap-4 sm:gap-24 lg:gap-32 mt-16 text-lg sm:text-xl lg:text-3xl '>
              <Link className="link-fade-in nav-shadow" href="/#About">About</Link>
              <Link className="link-fade-in nav-shadow" href="/Issues#Issues">Issues</Link>
              <Link className="link-fade-in nav-shadow" href="/Submit#Submit">Submit</Link>
              <Link className="link-fade-in nav-shadow" href="/Contact#Contact">Contact</Link>
            </div>
        </div>
        <div className="flex">
          {children}
        </div>
        <Scroll />
      </body>
    </html>
  );
}
