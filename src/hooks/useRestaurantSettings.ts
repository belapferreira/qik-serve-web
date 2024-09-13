import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';

export const useRestaurantSettings = () => {
  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const currencySymbol = restaurant?.ccySymbol;
  const primaryColour = restaurant?.webSettings?.primaryColour;

  const { webSettings } = restaurant || {};

  const navBackgroundColour = webSettings?.navBackgroundColour;
  const bannerImage = webSettings?.bannerImage;

  const name = restaurant?.name;

  return {
    navBackgroundColour,
    currencySymbol,
    primaryColour,
    bannerImage,
    name,
  };
};
