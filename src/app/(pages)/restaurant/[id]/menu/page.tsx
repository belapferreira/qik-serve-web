import { Search } from '@/app/components/Search';

export default async function Page() {
  return (
    <main className="mx-auto flex w-full max-w-content-w flex-col gap-1.5 px-4 pt-3">
      <Search />
    </main>
  );
}
