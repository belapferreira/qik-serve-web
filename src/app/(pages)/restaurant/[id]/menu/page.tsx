import { Products } from '@/app/components/Products';
import { Search } from '@/app/components/Search';
import { Summary } from '@/app/components/Summary';

export default async function Page() {
  return (
    <main className="mx-auto flex w-full max-w-content-w flex-col gap-1.5 px-4 pb-16 pt-3">
      <Search />

      {/* Content */}
      <div className="grid h-full w-full grid-cols-[1fr_320px] gap-6 bg-foreground px-10 py-8">
        <Products />

        <Summary />
      </div>
    </main>
  );
}
