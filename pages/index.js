import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import NameCard from '../components/NameCard'
import Career from '../components/Career'
import Header from '../components/Header'
export default function Home() {
  return (
    <>
      <title>ポートフォリオ</title>
      <Header />
      <NameCard />
      <Career />
    </>
  )
}
