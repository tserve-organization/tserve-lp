import { Header, Footer } from './components'
import {
  Hero,
  Categories,
  Services,
  SearchProfessional,
  Benefits,
  Store,
  BePart,
  Review,
} from './sections'

function App() {
  return (
    <main className="w-full flex flex-col gap-[64px]">
      <Header />
      <Hero />
      <Categories />
      <Services />
      <SearchProfessional />
      <Benefits />   
      <Store />
      <BePart />
      <Review />
      <Footer />
    </main>
  )
}

export default App
