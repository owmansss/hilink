import Image from 'next/image'
import Hero from './components/section/hero'
import Camp from './components/section/camp'
import Guide from './components/section/guide'
import Features from './components/section/features'
import GetApp from './components/section/getapp'

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
