import { Header, Footer } from './components'
import {
  Hero,
  Categories,
  Benefits,
  Store,
  BePart,
  Review,
} from './sections'

function App() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Categories />
      <Benefits />
      <Store />
      <BePart />
      <Review />
      <Footer />
    </main>
  )
}

export default App
