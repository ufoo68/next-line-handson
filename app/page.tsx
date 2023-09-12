import { getServerSession } from 'next-auth';
import { LoginButton, LogoutButton } from './components/buttons'
import { authOptions } from './options';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.info(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {session ? <LogoutButton/> : <LoginButton/>}
    </main>
  )
}
