import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/restaurant/9/menu');
}
