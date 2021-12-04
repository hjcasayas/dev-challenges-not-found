import { FC, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

export const LayoutComponent: FC<Props> = ({ children }) => (
  <div className="w-screen min-h-screen flex flex-col">
    <Head>
      <title>404 Not Found</title>
      <meta
        name="description"
        content="404 Not Found Challenge by devChallenges.io"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className="flex flex-col flex-1 container mx-auto font-mono px-6 py-5 text-gray-900">
      <header className="mb-16">
        <h1 className="font-bold text-2xl leading-7 tracking-tighter">
          404 NOT FOUND
        </h1>
      </header>
      <main className="flex-1 mb-28 xl:mb-20">{children}</main>
      <footer>
        <p className="text-center text-sm leading-4 text-gray-400">
          created by{" "}
          <Link href="https://github.com/hjcasayas">
            <a className="font-bold">hjcasayas</a>
          </Link>
          &nbsp; &#45; &nbsp;
          <Link href="https://devchallenges.io/">
            <a>devchallenges.io</a>
          </Link>
        </p>
      </footer>
    </div>
  </div>
);
