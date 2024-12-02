import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Hello World
      <br/>

      {/* This performs server side rendering, a new request and full page reload is done */}
      <a href='/users'>Users (Server side render)</a>
      <br/>

      {/* This performs client side rendering, optimal when repeatative loading takes not relevant (css, js, etc) */}
      <Link href={'/users'}>Users (Client side render)</Link>
    </main>
  )
}
