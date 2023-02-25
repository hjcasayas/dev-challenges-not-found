import Image from 'next/image';
import scarecrow from '../../public/images/scarecrow.png';

export const ScareCrow = () => {
  return (
    <Image alt="Scare Crow" src={scarecrow} className="block w-full h-auto" />
  );
};
