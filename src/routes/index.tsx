import { createFileRoute } from '@tanstack/react-router'
import {
  Hero,
  Categories,
  HowWorks,
  Services,
  SearchProfessional,
  Benefits,
  Store,
  BePart,
  Review,
} from '../sections'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="flex flex-col gap-[64px] py-[64px]">
      <Hero />
      <Categories />
      <HowWorks />
      <Services />
      <SearchProfessional />
      <Benefits />   
      <Store />
      <BePart />
      <Review />
    </main>
  )
}