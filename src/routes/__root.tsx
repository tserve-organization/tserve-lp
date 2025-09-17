import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Footer, Header } from '../components'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <main className="w-full">
        <Header />
        <Outlet />
        <Footer />
      </main>
      
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
