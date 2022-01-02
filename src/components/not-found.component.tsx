import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const NotFoundComponent: FC = () => (
  <>
    <div className="md:flex">
      <div className="w-full px-5 mb-14 md:px-0 md:align-middle md:mb-0 md:flex md:flex-col md:justify-center md:pr-7 lg:pr-28">
        <Image
          width="1079"
          height="895"
          src="/scarecrow.png"
          layout="responsive"
          alt="scarecrow image"
          priority
        />
      </div>
      <div className="md:align-middle md:flex md:flex-col md:justify-center md:items-start lg:pr-11">
        <h2 className="font-bold text-5xl leading-tight mb-8">
          I have bad news for you
        </h2>
        <p className="font-normal text-lg leading-7 mb-8">
          The page your looking for might be removed or is temporarily
          unavailable
        </p>
        <Link
          href={`${publicRuntimeConfig?.devChallengesBaseUrl}/responsive` || ""}
        >
          <a className="inline-block text-white font-bold leading-5 py-6 px-12 bg-gray-900">
            BACK TO HOME PAGE
          </a>
        </Link>
      </div>
    </div>
  </>
);
