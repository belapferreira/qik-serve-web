import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import Image from 'next/image';

type CategoryProps = {
  name: string;
  imageSrc: string;
  activeCategory: string;
  handleClick: (name: string) => void;
};

export const Category = (props: CategoryProps) => {
  const { name, imageSrc, activeCategory, handleClick } = props;

  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const { webSettings } = restaurant || {};

  const primaryColour = webSettings?.primaryColour;

  const isActive = name === activeCategory;

  return (
    <a
      href={`#${name}`}
      onClick={() => handleClick(name)}
      className="relative flex flex-col items-center gap-6 px-[11px] pb-2"
    >
      <div
        className="relative size-[5.125rem] overflow-hidden rounded-full border-2 border-transparent"
        {...(isActive && { style: { borderColor: primaryColour } })}
      >
        <Image
          src={imageSrc}
          fill
          className="rounded-full object-cover p-0.5"
          alt={name}
        />
      </div>

      <strong className="h-9 font-semibold text-gray-900">{name}</strong>

      {isActive && (
        <span
          className="absolute bottom-0 left-0 h-0.5 w-full"
          style={{ background: primaryColour }}
        />
      )}
    </a>
  );
};
