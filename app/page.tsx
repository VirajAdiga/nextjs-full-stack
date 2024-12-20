import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      Hello World
      <br/>

      {/* This performs server side rendering, a new request and full page reload is done */}
      <a href='/users'>Users (Server side render)</a>
      <br/>

      {/* This performs client side rendering, optimal when repeatitive loading is not relevant */}
      <Link href={'/users'}>Users (Client side render)</Link>

      <ProductCard />
    </main>
  )
}
