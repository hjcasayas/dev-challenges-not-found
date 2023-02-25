import Image from 'next/image';

import { inconsolata, spaceMono, montserrat } from '@/fonts';
import scarecrow from '../../public/images/scarecrow.png';

export default function Home() {
  return (
    <div className="flex flex-col py-5 px-6 w-screen h-screen justify-between">
      <div>
        <header className={`${inconsolata.className} font-bold text-2xl mb-16`}>
          <h1>404 NOT FOUND</h1>
        </header>
        <main className="container mx-auto mb-6">
          <div className="md:flex md:flex-row">
            <div className="px-5 mb-[60px] md:mb-0 md:w-1/2">
              <Image
                src={scarecrow}
                alt="Scare Crow"
                className="block w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-between md:w-1/2">
              <div>
                <h2
                  className={`${spaceMono.className} font-bold text-4xl mb-8 md:text-6xl md:max-w-[30rem]`}
                >
                  I have bad news for you.
                </h2>
                <p
                  className={`${spaceMono.className} text-lg font-normal mb-16 md:text-2xl md:max-w-[24rem]`}
                >
                  The page you are looking for might be removed or is
                  temporarily unavailable
                </p>
              </div>
              <a
                className={`${spaceMono.className} self-start font-bold text-sm py-6 px-11 text-white bg-black`}
                href="https://hjcasayas.info"
                target="_blank"
                rel="noreferrer"
              >
                BACK TO HOMEPAGE
              </a>
            </div>
          </div>
        </main>
      </div>
      <div>
        <footer
          className={`${montserrat.className} font-medium text-center text-sm text-[#BDBDBD]`}
        >
          created by{' '}
          <a
            className="font-bold"
            href="https://github.com/hjcasayas"
            target="_blank"
            rel="noreferrer"
          >
            hjcasayas
          </a>{' '}
          -{' '}
          <a
            className="font-bold"
            href="https://dev-challenges.io"
            target="_blank"
            rel="noreferrer"
          >
            devChallenges.io
          </a>
        </footer>
      </div>
    </div>
  );
}
