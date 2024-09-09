'use client';

import { IoMenuOutline } from 'react-icons/io5';

import { NAV_ITEMS } from '@/constants';
import { NavItem } from './NavItem';
import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';

export const Header = () => {
  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const { webSettings } = restaurant || {};

  const navBackgroundColour = webSettings?.navBackgroundColour;
  const bannerImage = webSettings?.bannerImage;

  return (
    <header
      className="flex h-max w-full flex-col items-center justify-center"
      style={{ backgroundColor: navBackgroundColour }}
    >
      <nav className="flex h-[3.25rem] w-full max-w-content-w items-center justify-center">
        <ul className="flex h-full w-full justify-center">
          {NAV_ITEMS.map(({ href, label, slug }) => (
            <NavItem key={slug} href={href} slug={slug}>
              {label}
            </NavItem>
          ))}
        </ul>

        <button className="absolute right-0 p-4 md:hidden">
          <IoMenuOutline size={24} />
        </button>
      </nav>

      <div className="relative h-[9.375rem] w-full">
        <Image
          src={bannerImage}
          fill
          alt={restaurant?.name || 'Restaurant'}
          className="object-cover"
          quality={100}
        />
      </div>
    </header>
  );
};
