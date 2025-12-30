import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/header'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-20 gap-4">
        <h1 className="text-4xl font-bold">TanStack Start Better Auth Starter</h1>
      </main>
    </>
  )
}
