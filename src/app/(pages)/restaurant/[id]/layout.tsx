import { StoreProvider } from '@/app/providers/storeProvider';
import { ReactNode } from 'react';
import { fetcher } from '@/utils/fetcher';
import { Restaurant } from '@/@types/restaurant';
import { Header } from '@/app/components/Header';
import { notFound } from 'next/navigation';

type Props = {
  children: ReactNode;
  params: {
    id: string;
  };
};

export const generateMetadata = async (props: Props) => {
  const { id } = props.params;

  try {
    const restaurant = await fetcher<Restaurant>(`/venue/${id}`, {
      next: {
        revalidate: 60 * 10, // 10 minutes
      },
    });

    return {
      title: restaurant.name,
    };
  } catch {
    return {
      title: 'Restaurant',
    };
  }
};

export default async function PagesLayout(props: Props) {
  try {
    const {
      children,
      params: { id },
    } = props;

    const restaurant = await fetcher(`/venue/${id}`);

    return (
      <StoreProvider restaurant={restaurant}>
        <div className="flex min-h-screen w-full flex-col items-center">
          <Header />

          {children}
        </div>
      </StoreProvider>
    );
  } catch (error) {
    console.log('🚫 Restaurant page:', error);

    notFound();
  }
}
