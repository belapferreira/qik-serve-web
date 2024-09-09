import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type NavItemProps = ComponentProps<'li'> & {
  href: string;
  slug: string;
};

export const NavItem = (props: NavItemProps) => {
  const { children, href, slug, ...rest } = props;

  const pathname = usePathname();

  const isActive = pathname.includes(slug);

  return (
    <li
      {...rest}
      className="relative flex h-full w-[14.5rem] items-center justify-center text-xl uppercase max-md:[&:nth-last-child(-n+2)]:hidden"
    >
      <Link href={href}>{children}</Link>

      {isActive && (
        <span className="absolute bottom-0 left-0 hidden h-1 w-full bg-white md:inline-flex" />
      )}
    </li>
  );
};
