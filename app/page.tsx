import Image from 'next/image'
import { LoginButton, LogoutButton } from './components/buttons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginButton/>
      <LogoutButton/>
    </main>
  )
}
